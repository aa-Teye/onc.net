import Navbar from './Navbar'
import Footer from './Footer'
import BottomNav from './BottomNav'
import NewsTicker from './NewsTicker'
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
      {/* Extra bottom space on desktop so content never hides behind the fixed ticker */}
      <div className="hidden md:block h-[42px]" />
      <Footer />
      <BottomNav />

      {/* Fixed bottom ticker — desktop only (mobile uses BottomNav) */}
      <div className="hidden md:block fixed bottom-0 left-0 w-full z-[45]">
        <NewsTicker />
      </div>

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
