import Layout from '../components/Layout'
import AboutHero from '../components/about/AboutHero'
import MissionVision from '../components/about/MissionVision'
import EventsSection from '../components/about/EventsSection'
import OutreachSection from '../components/about/OutreachSection'
import AboutCTA from '../components/about/AboutCTA'

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <MissionVision />
      <EventsSection />
      <OutreachSection />
      <AboutCTA />
    </Layout>
  )
}
