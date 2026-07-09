const outreaches = [
  {
    icon: 'campaign',
    color: '#fed65b',
    tag: 'Evangelism',
    title: 'Encounter Jesus Outreach',
    desc: 'Our flagship ongoing outreach — taking the Gospel to the streets, markets and communities with signs, wonders and the undeniable presence of God. Every soul matters and every encounter is intentional.',
    stat: 'Ongoing — across communities',
    featured: true,
  },
  {
    icon: 'volunteer_activism',
    color: '#fed65b',
    tag: 'Community',
    title: 'Community Care Drive',
    desc: 'ONC volunteers reach out to the less privileged in Tesano and surrounding areas with food, care packages and the love of Christ.',
    stat: 'Coming soon',
    featured: false,
  },
  {
    icon: 'school',
    color: '#fed65b',
    tag: 'Education',
    title: 'Back to School Initiative',
    desc: 'Providing stationery, uniforms and school bags to children from low-income families — investing in the next generation.',
    stat: 'Coming soon',
    featured: false,
  },
  {
    icon: 'local_hospital',
    color: '#fed65b',
    tag: 'Healthcare',
    title: 'Health & Wellness Fair',
    desc: 'Free health screenings, blood pressure checks and health education sessions run in partnership with medical professionals.',
    stat: 'Coming soon',
    featured: false,
  },
  {
    icon: 'elderly',
    color: '#fed65b',
    tag: 'Seniors',
    title: 'Flourishing Seniors Visit',
    desc: 'Visits to elderly care homes and hospitals — bringing prayer, music and companionship to those who need it most.',
    stat: 'Coming soon',
    featured: false,
  },
  {
    icon: 'home_heart',
    color: '#fed65b',
    tag: 'Support',
    title: 'Kingdom Family Relief Fund',
    desc: 'Emergency support for families in sudden hardship — food, rent and utilities provided confidentially through the church.',
    stat: 'Coming soon',
    featured: false,
  },
]

export default function OutreachSection() {
  return (
    <section className="py-[100px] px-8" style={{ background: '#00113a' }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">Beyond the Four Walls</span>
          <h2
            className="text-[40px] md:text-[52px] font-extrabold text-white mt-3 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Our Outreaches
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            We are called to serve — not just within the church but in every corner of the community God has placed us in.
          </p>
        </div>

        {/* Outreach cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outreaches.map((o, i) => (
            <div
              key={i}
              className={`group rounded-xl p-7 border transition-all duration-300 ${
                o.featured
                  ? 'border-secondary/60 hover:border-secondary col-span-1 md:col-span-2 lg:col-span-1'
                  : 'border-white/10 hover:border-secondary/50'
              }`}
              style={{ background: o.featured ? 'rgba(255,214,91,0.07)' : 'rgba(255,255,255,0.04)' }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(255,214,91,0.12)' }}
              >
                <span className="material-symbols-outlined text-secondary text-[22px]">{o.icon}</span>
              </div>

              {/* Tag */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/80">
                {o.tag}
              </span>

              {/* Title */}
              <h4 className="text-[18px] font-extrabold text-white mt-2 mb-3 group-hover:text-secondary transition-colors leading-tight">
                {o.title}
              </h4>

              {/* Desc */}
              <p className="text-sm text-white/55 leading-relaxed mb-5">
                {o.desc}
              </p>

              {/* Stat */}
              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${o.featured ? 'bg-green-400' : 'bg-secondary'}`}
                  style={o.featured ? { animation: 'livePulse 1.5s ease-in-out infinite' } : {}} />
                <span className={`text-xs font-bold ${o.featured ? 'text-green-400' : 'text-secondary/80'}`}>{o.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
