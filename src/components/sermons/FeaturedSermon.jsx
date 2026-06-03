export default function FeaturedSermon() {
  return (
    <section className="relative w-full h-[707px] min-h-[600px] bg-primary flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-60"
          alt="A powerful cinematic shot of a modern church stage"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj2HTj7q0EWCVM48s8FTfsmFkUfVWoegl6n9_ELrmjFJe8s4nA0MrrB7pmiYTmBdKhyKt2Jz4Xd5ImFxRQMnt4YHvTGbY_xEiPBy0rnJ2ug-K7YFZ0gLoauD9cH2bgGJ6V2t1EfJR49elWdmikIaoB0oWtt2d6qmyi3UNe1fo68IzwcLCp0EzrVPfxDG6cAyDl5SRb_OWsF9Nli5GO3cMTBMadzVKCEcoam1D95aXRwU3ws7rHXgIzrOq2CLetvQrlMDBj2369m7Ej"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 pb-[120px] flex flex-col items-start">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-sm font-bold">
            FEATURED MESSAGE
          </span>
          <span className="text-secondary-fixed text-sm font-bold">LIVE FROM ACCRA</span>
        </div>
        <h2 className="text-[48px] md:text-[72px] font-black text-on-primary max-w-4xl mb-6 leading-tight" style={{ letterSpacing: '-0.04em' }}>
          Power of Unwavering Faith
        </h2>
        <p className="text-[18px] text-on-primary/80 max-w-2xl mb-8 leading-relaxed">
          Join us for this transformative message as we explore the architectural foundations of a life built on
          divine certainty and sovereign promise.
        </p>
        <div className="flex gap-4">
          <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg text-sm font-bold flex items-center gap-2 active:scale-95 transition-transform">
            <span className="material-symbols-outlined">play_arrow</span> WATCH NOW
          </button>
          <button className="border border-on-primary text-on-primary px-8 py-4 rounded-lg text-sm font-bold hover:bg-on-primary hover:text-primary transition-all">
            VIEW SERIES
          </button>
        </div>
      </div>
    </section>
  )
}
