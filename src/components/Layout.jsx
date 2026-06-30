import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import PrayerModal from './PrayerModal'
import SocialSidebar from './SocialSidebar'
import { useScrolledPastHero } from '../hooks/useScrolledPastHero'

export default function Layout({ children, showFloating = true }) {
  const pastHero = useScrolledPastHero()

  return (
    <div className="bg-background text-on-surface overflow-x-hidden">
      <div className="majesty-bar" />
      <Navbar />
      <main style={{ paddingTop: '4px' }}>
        {children}
      </main>
      <Footer />

      {/* Floating elements — only shown after hero scroll */}
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
