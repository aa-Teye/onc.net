import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import PrayerModal from './PrayerModal'
import SocialSidebar from './SocialSidebar'
import { useScrolledPastHero } from '../hooks/useScrolledPastHero'

function useSectionReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07 }
    )

    // Small delay so DOM is settled after page enter animation
    const timer = setTimeout(() => {
      sections.forEach(s => {
        s.classList.add('reveal-section')
        observer.observe(s)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      sections.forEach(s => s.classList.remove('reveal-section', 'in-view'))
    }
  }, [pathname])
}

function useScrolledDown(threshold = 80) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const check = () => setScrolled(window.scrollY > threshold)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [threshold])
  return scrolled
}

export default function Layout({ children, showFloating = true }) {
  const pastHero = useScrolledPastHero()
  const scrolledDown = useScrolledDown(80)
  useSectionReveal()

  return (
    <div className="bg-background text-on-surface overflow-x-hidden">
      <div className="majesty-bar" />
      <Navbar />
      <main style={{ paddingTop: '4px' }}>
        {children}
      </main>
      <Footer />

      {showFloating && (
        <>
          {/* Social sidebar appears as soon as you scroll down */}
          <div
            style={{
              opacity: scrolledDown ? 1 : 0,
              pointerEvents: scrolledDown ? 'auto' : 'none',
              transition: 'opacity 0.4s ease',
            }}
          >
            <SocialSidebar />
          </div>

          {/* WhatsApp + Prayer modal appear only after hero */}
          <div
            style={{
              opacity: pastHero ? 1 : 0,
              pointerEvents: pastHero ? 'auto' : 'none',
              transition: 'opacity 0.5s ease',
            }}
          >
            <WhatsAppButton />
            <PrayerModal />
          </div>
        </>
      )}
    </div>
  )
}
