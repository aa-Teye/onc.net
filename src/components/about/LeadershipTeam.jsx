export default function LeadershipTeam() {
  return (
    <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
      {/* Senior Pastor */}
      <div className="flex flex-col md:flex-row gap-[120px] items-center">
        <div className="flex-1 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-secondary-container z-0" />
          <img
            className="relative z-10 w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
            alt="Dr. Okronipa - Senior Pastor"
            src="/images/pastor.jpg"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-primary z-0" />
        </div>

        <div className="flex-1">
          <span className="text-sm font-bold text-secondary mb-2 block">SENIOR PASTOR</span>
          <h2
            className="text-[48px] font-extrabold text-primary mb-8 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            DR. OKRONIPA
          </h2>
          <p className="text-[18px] text-on-surface-variant mb-8 italic leading-relaxed">
            "Leadership is not about position, it's about the sovereign responsibility to unlock the overcomer
            within every soul."
          </p>
          <div className="space-y-2 text-on-surface-variant">
            <p className="text-base leading-relaxed">
              Dr. Ebenezer Okronipa is the visionary founder of Overcomers Nation. With over 8 years of ministry
              experience, he has dedicated his life to bridging the gap between spiritual authority and Kingdom excellence.
            </p>
            <p className="text-base leading-relaxed">
              Under his leadership, Overcomers Nation has grown from a local assembly into a global movement reaching
              millions through YouTube, Facebook, Telegram and Podbean. He is a sought-after voice on spiritual
              leadership, dominion and Kingdom-driven socio-economic transformation.
            </p>
          </div>
          <div className="mt-8">
            <button className="bg-secondary-container text-on-secondary-container px-8 py-3 text-sm font-bold hover:bg-secondary-fixed transition-colors">
              READ FULL BIO
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
