import Layout from '../components/Layout'
import GiveFAB from '../components/GiveFAB'
import FeaturedSermon from '../components/sermons/FeaturedSermon'
import FilterBar from '../components/sermons/FilterBar'
import SermonGrid from '../components/sermons/SermonGrid'
import SeriesBento from '../components/sermons/SeriesBento'
import NewsletterSection from '../components/sermons/NewsletterSection'

export default function Sermons() {
  return (
    <Layout>
      <FeaturedSermon />
      <FilterBar />
      <SermonGrid />
      <SeriesBento />
      <NewsletterSection />
      <GiveFAB />
    </Layout>
  )
}
