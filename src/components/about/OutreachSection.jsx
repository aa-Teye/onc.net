const outreaches = [
  {
    icon: 'volunteer_activism',
    color: '#fed65b',
    tag: 'Community',
    title: 'Bread of Life Feeding Drive',
    desc: 'Every quarter, ONC volunteers take to the streets of Tesano and surrounding communities to distribute hot meals, groceries and care packages to the less privileged.',
    stat: '500+ fed quarterly',
  },
  {
    icon: 'school',
    color: '#fed65b',
    tag: 'Education',
    title: 'Back to School Initiative',
    desc: 'We partner with local schools to provide stationery, uniforms and school bags to children from low-income families before every academic year begins.',
    stat: '200+ children supported yearly',
  },
  {
    icon: 'campaign',
    color: '#fed65b',
    tag: 'Evangelism',
    title: 'Open-Air Gospel Crusades',
    desc: 'Our evangelism team regularly hosts open-air crusades in public spaces, markets and neighbourhoods — bringing the gospel to those who have never stepped inside a church.',
    stat: 'Monthly crusades across Accra',
  },
  {
    icon: 'local_hospital',
    color: '#fed65b',
    tag: 'Healthcare',
    title: 'ONC Health & Wellness Fair',
    desc: 'In partnership with medical professionals, we host free health screenings, blood pressure checks, eye tests and health education sessions for the community.',
    stat: 'Annual free medical outreach',
  },
  {
    icon: 'elderly',
    color: '#fed65b',
    tag: 'Seniors',
    title: 'Flourishing Seniors Visit',
    desc: 'Members of The Flourishing Group and volunteers visit orphanages, elderly care homes and hospitals to pray, sing and bring companionship to those who feel forgotten.',
    stat: 'Bi-monthly visits',
  },
  {
    icon: 'home_heart',
    color: '#fed65b',
    tag: 'Support',
    title: 'Kingdom Family Relief Fund',
    desc: 'A confidential fund that provides emergency support — food, rent, utilities — to families within and outside the church going through sudden hardship.',
    stat: 'On-going, needs-based',
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
              className="group rounded-xl p-7 border border-white/10 hover:border-secondary/50 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.04)' }}
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
                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                <span className="text-xs font-bold text-secondary/80">{o.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
