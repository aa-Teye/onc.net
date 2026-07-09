const events = [
  {
    month: 'TBA',
    day: '—',
    title: 'Faith Convention',
    type: 'Annual Convention',
    desc: 'Our flagship annual convention — a gathering of believers from across the nation and beyond to press into faith, receive the Word and experience the miraculous power of God.',
    icon: 'auto_awesome',
  },
  {
    month: 'TBA',
    day: '—',
    title: 'PEC',
    type: 'Pastors & Elders Conference',
    desc: 'A strategic gathering of pastors, elders and ministry leaders for equipping, alignment and prophetic impartation to strengthen the body of Christ across regions.',
    icon: 'groups',
  },
  {
    month: 'TBA',
    day: '—',
    title: 'Exodus Night',
    type: 'Special Night Service',
    desc: 'A powerful night of deliverance, breakthrough and supernatural exodus — where God\'s people are set free from every bondage and walk into their promised inheritance.',
    icon: 'nightlight',
  },
  {
    month: 'TBA',
    day: '—',
    title: 'Finance Convention',
    type: 'Kingdom Finance',
    desc: 'A Kingdom-focused convention on biblical prosperity, stewardship and financial dominion — equipping believers to excel in every area of economic life.',
    icon: 'payments',
  },
  {
    month: 'TBA',
    day: '—',
    title: 'Apostolic Visitation',
    type: 'Apostolic Meeting',
    desc: 'A divine appointment of apostolic ministry — impartation, correction, commissioning and the release of apostolic grace upon the church and its members.',
    icon: 'church',
  },
  {
    month: 'TBA',
    day: '—',
    title: 'Fathers Honour',
    type: 'Special Celebration',
    desc: 'A special service dedicated to honouring fathers — celebrating godly fatherhood, family legacy and the spirit of sonship within the Overcomers Nation family.',
    icon: 'favorite',
  },
]

export default function EventsSection() {
  return (
    <section className="py-[100px] px-8 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">Mark Your Calendar</span>
          <h2
            className="text-[40px] md:text-[52px] font-extrabold text-primary mt-3 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Upcoming Events
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-xl mx-auto text-base leading-relaxed">
            From conferences to special services — there is always something happening at Overcomers Nation.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <div
              key={i}
              className="group bg-surface rounded-xl p-6 border border-outline-variant/30 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Date badge + type */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="flex flex-col items-center justify-center w-14 h-14 rounded-xl flex-shrink-0"
                  style={{ background: '#00113a' }}
                >
                  <span className="text-secondary text-[10px] font-black uppercase tracking-widest">{ev.month}</span>
                  <span className="text-white text-[22px] font-black leading-none">{ev.day}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {ev.type}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-[18px] font-extrabold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
                {ev.title}
              </h4>

              {/* Desc */}
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {ev.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
