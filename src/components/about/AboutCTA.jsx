export default function AboutCTA() {
  return (
    <section className="bg-primary text-on-primary py-[120px] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary-container" />

      <div className="px-8 max-w-[1280px] mx-auto text-center relative z-10">
        <h2
          className="text-[48px] md:text-[72px] font-black mb-8 uppercase leading-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          Experience the Nation
        </h2>
        <p className="text-[18px] mb-8 max-w-xl mx-auto opacity-80 leading-relaxed">
          Join us for our next service and discover what it means to live as a true overcomer.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <button className="bg-secondary-container text-on-secondary-container px-10 py-4 text-sm font-bold rounded-sm hover:scale-105 transition-transform active:scale-95 shadow-lg">
            JOIN A SERVICE
          </button>
          <button className="border border-secondary-fixed text-secondary-fixed px-10 py-4 text-sm font-bold rounded-sm hover:bg-secondary-fixed/10 transition-colors">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Geometric accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 border border-secondary/10 -translate-y-1/2 -translate-x-1/2 rotate-45" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3" />
    </section>
  )
}
