import Layout from '../components/Layout'
import AboutHero from '../components/about/AboutHero'
import MissionVision from '../components/about/MissionVision'
import CoreValues from '../components/about/CoreValues'
import AboutCTA from '../components/about/AboutCTA'

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <AboutCTA />
    </Layout>
  )
}
