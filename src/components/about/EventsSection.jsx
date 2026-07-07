const events = [
  {
    month: 'JAN',
    day: '12',
    title: 'Kingdom New Year Summit',
    type: 'Annual Conference',
    desc: 'A powerful start to the year — three days of intensive prayer, prophetic declaration and Kingdom alignment for the year ahead.',
    icon: 'event',
  },
  {
    month: 'MAR',
    day: '08',
    title: 'Covered Women Conference',
    type: 'Women\'s Event',
    desc: 'A full-day gathering celebrating women of faith. Featuring worship, teaching, panel discussions and a sister-to-sister networking session.',
    icon: 'diversity_3',
  },
  {
    month: 'APR',
    day: '18',
    title: 'Good Friday Vigil',
    type: 'Special Service',
    desc: 'An evening of solemn worship, communion and reflection as we honour the sacrifice of Christ and prepare our hearts for resurrection.',
    icon: 'church',
  },
  {
    month: 'JUL',
    day: '20',
    title: 'The Haven Youth Camp',
    type: 'Youth Event',
    desc: 'A 3-day residential camp for teenagers and young adults — packed with adventure, discipleship, praise and identity-building sessions.',
    icon: 'camp',
  },
  {
    month: 'OCT',
    day: '05',
    title: 'Mandate Miracle Encounter',
    type: 'Revival Service',
    desc: 'Our flagship encounter service — a night of signs, wonders and divine intervention as we press into the miraculous together.',
    icon: 'bolt',
  },
  {
    month: 'DEC',
    day: '21',
    title: 'Carol of Overcomers',
    type: 'Christmas Special',
    desc: 'A night of carols, drama, worship and celebration as the ONC family gathers to honour the birth of our King.',
    icon: 'celebration',
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
