import Layout from '../components/Layout'
import MinistriesHero from '../components/ministries/MinistriesHero'
import MinistriesGrid from '../components/ministries/MinistriesGrid'
import MinistriesCTA from '../components/ministries/MinistriesCTA'

export default function Ministries() {
  return (
    <Layout>
      <MinistriesHero />
      <MinistriesGrid />
      <MinistriesCTA />
    </Layout>
  )
}
