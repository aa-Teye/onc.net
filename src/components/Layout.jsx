import { useEffect } from 'react'
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

export default function Layout({ children, showFloating = true }) {
  const pastHero = useScrolledPastHero()
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
        <div
          style={{
            opacity: pastHero ? 1 : 0,
            pointerEvents: pastHero ? 'auto' : 'none',
            transition: 'opacity 0.5s ease',
          }}
        >
          <SocialSidebar />
          <WhatsAppButton />
          <PrayerModal />
        </div>
      )}
    </div>
  )
}
