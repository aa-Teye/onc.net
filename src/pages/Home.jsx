import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import CountdownSection from '../components/CountdownSection'
import MandateSection from '../components/MandateSection'
import LeadershipSection from '../components/LeadershipSection'
import GallerySection from '../components/GallerySection'
import TestimoniesSlider from '../components/TestimoniesSlider'
import MediaSection from '../components/MediaSection'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />

      {/* Countdown — first thing seen on scroll */}
      <CountdownSection />

      {/* Impact stats */}
      <StatsSection />

      {/* Core sections */}
      <MandateSection />
      <LeadershipSection />

      {/* Gallery */}
      <GallerySection />

      {/* Testimonies */}
      <TestimoniesSlider />

      {/* Media / Sermons */}
      <MediaSection />

      {/* CTA */}
      <CTASection />
    </Layout>
  )
}
