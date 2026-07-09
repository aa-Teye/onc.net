const WA_NUMBER = '233546363957'
const WA_MESSAGE = encodeURIComponent('Hello, I need help with giving / partnership with Overcomers Nation Church.')

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
        <h2 className="text-[40px] md:text-[48px] font-extrabold text-on-primary mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Need Help with Giving or<br className="hidden sm:block" /> Ways to Partner?
        </h2>
        <p className="text-[16px] md:text-[18px] text-primary-fixed mb-10 max-w-xl mx-auto leading-relaxed">
          Have questions about giving, tithing or how to partner with this ministry? Our team is ready to help —
          send us a message on WhatsApp and we'll get back to you right away.
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-extrabold text-base transition-all hover:scale-105 active:scale-95 shadow-xl"
          style={{ background: '#25D366', color: '#fff' }}
        >
          {/* WhatsApp icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat with Us on WhatsApp
        </a>
      </div>
    </section>
  )
}
