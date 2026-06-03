export default function GiveCTA() {
  return (
    <section className="relative py-[120px]">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Diverse people gathered in a modern church hall"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE86bXm76OblMkWKIadXF_hpqvGKoEtYYXdzHvHne2nvqJyI14WcgZW9txL33AGEG0pKNm2gr9kZMzjq5W3Www3WYWF8WBS7AlYmbjyXGG_e6T0oxRAa93oZIf-ziOtsfnXoyeMC8TtibFonr3e6CEketx4yihGJbXXbniyR0i0QAA4-dF2PRBmqJSIHIKd2V9qTquQLT1BQJ5Wb9A665tPOfqMWG33l90rUbhrjAPpra0LPF_IGCB4ZRhrnyaiobPpV5QAz-nU-YE"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative z-10 px-8 max-w-[1280px] mx-auto text-center">
        <h2 className="text-[48px] font-extrabold text-on-primary mb-8 leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Need Help with Giving?
        </h2>
        <p className="text-[18px] text-primary-fixed mb-12 max-w-xl mx-auto leading-relaxed">
          If you have questions regarding your donation or would like to discuss other ways to support the ministry,
          our finance team is here to assist you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-secondary-container text-on-secondary-container px-12 py-5 rounded-lg text-sm font-bold text-lg hover:bg-secondary-fixed transition-all active:scale-95 shadow-xl">
            Contact Finance Team
          </button>
          <button className="border-2 border-on-primary text-on-primary px-12 py-5 rounded-lg text-sm font-bold text-lg hover:bg-on-primary hover:text-primary transition-all active:scale-95">
            Download Report
          </button>
        </div>
      </div>
    </section>
  )
}
