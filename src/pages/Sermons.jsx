import Layout from '../components/Layout'
import GiveFAB from '../components/GiveFAB'
import FeaturedSermon from '../components/sermons/FeaturedSermon'
import PlatformSection from '../components/sermons/PlatformSection'
import SeriesBento from '../components/sermons/SeriesBento'
import NewsletterSection from '../components/sermons/NewsletterSection'

export default function Sermons() {
  return (
    <Layout>
      <FeaturedSermon />
      <PlatformSection />
      <SeriesBento />
      <NewsletterSection />
      <GiveFAB />
    </Layout>
  )
}
