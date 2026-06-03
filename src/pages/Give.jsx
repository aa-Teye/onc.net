import Layout from '../components/Layout'
import GiveHero from '../components/give/GiveHero'
import BiblicalContext from '../components/give/BiblicalContext'
import GivingMethods from '../components/give/GivingMethods'
import TrustBanner from '../components/give/TrustBanner'
import GiveCTA from '../components/give/GiveCTA'

export default function Give() {
  return (
    <Layout>
      <GiveHero />
      <BiblicalContext />
      <GivingMethods />
      <TrustBanner />
      <GiveCTA />
    </Layout>
  )
}
