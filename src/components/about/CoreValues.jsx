const values = [
  {
    icon: 'verified_user',
    title: 'Integrity',
    body: 'We operate with unwavering transparency and biblical standards, ensuring our public influence matches our private character.',
  },
  {
    icon: 'bolt',
    title: 'Vitality',
    body: 'We embrace the energetic move of the Holy Spirit, fostering an environment where innovation and spiritual fire coexist.',
  },
  {
    icon: 'architecture',
    title: 'Excellence',
    body: 'Precision in all we do. We believe our craftsmanship in ministry reflects the majesty of the Creator we serve.',
  },
]

export default function CoreValues() {
  return (
    <section className="bg-surface-container-high py-[120px]">
      <div className="px-8 max-w-[1280px] mx-auto text-center mb-20">
        <h2
          className="text-[48px] font-extrabold text-primary mb-2 leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Core Values
        </h2>
        <div className="h-1 bg-secondary-container mx-auto w-16 mb-8" />
        <p className="text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          The pillars that sustain our movement and define our culture.
        </p>
      </div>

      <div className="px-8 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <div
            key={i}
            className="bg-surface p-8 border-t-2 border-secondary shadow-sm hover:shadow-xl transition-shadow group"
          >
            <div className="w-12 h-12 bg-primary-container flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">{v.icon}</span>
            </div>
            <h4 className="text-[32px] font-bold text-primary mb-2 leading-tight">{v.title}</h4>
            <p className="text-base text-on-surface-variant leading-relaxed">{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
