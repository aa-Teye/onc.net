export default function MinistriesCTA() {
  return (
    <section className="bg-primary text-on-primary py-[120px]">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl text-center md:text-left">
          <h2
            className="text-[48px] font-extrabold mb-4 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Find Your Place in the Family
          </h2>
          <p className="text-[18px] text-primary-fixed opacity-90 leading-relaxed">
            No matter where you are in your journey, there is a community waiting for you at Overcomers Nation.
            Get involved today.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <button className="bg-secondary text-on-primary px-10 py-4 rounded-lg text-sm font-bold hover:border-b-4 hover:border-surface transition-all">
            Contact Us
          </button>
          <button className="border border-on-primary text-on-primary px-10 py-4 rounded-lg text-sm font-bold hover:bg-on-primary hover:text-primary transition-all">
            View All Groups
          </button>
        </div>
      </div>
    </section>
  )
}
