import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import NewsTicker from '../components/NewsTicker'
import StatsSection from '../components/StatsSection'
import CountdownSection from '../components/CountdownSection'
import MandateSection from '../components/MandateSection'
import LeadershipSection from '../components/LeadershipSection'
import GallerySection from '../components/GallerySection'
import GlobalReach from '../components/GlobalReach'
import TestimoniesSlider from '../components/TestimoniesSlider'
import MediaSection from '../components/MediaSection'

export default function Home() {
  return (
    <Layout>
      {/* Hero + Ticker fill the full viewport on landing */}
      <div className="flex flex-col" style={{ height: '100vh' }}>
        <div className="flex-1 min-h-0">
          <HeroSection />
        </div>
        <NewsTicker />
      </div>

      {/* Countdown — first thing seen on scroll */}
      <CountdownSection />

      {/* Impact stats */}
      <StatsSection />

      {/* Core sections */}
      <MandateSection />
      <LeadershipSection />

      {/* Gallery */}
      <GallerySection />

      {/* Global Reach */}
      <GlobalReach />

      {/* Testimonies */}
      <TestimoniesSlider />

      {/* Media / Sermons */}
      <MediaSection />
    </Layout>
  )
}
