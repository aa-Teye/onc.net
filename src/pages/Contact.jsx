import Layout from '../components/Layout'
import ContactHero from '../components/contact/ContactHero'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import PlanVisit from '../components/contact/PlanVisit'

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <div className="max-w-[1280px] mx-auto px-8 pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[120px]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <PlanVisit />
    </Layout>
  )
}
