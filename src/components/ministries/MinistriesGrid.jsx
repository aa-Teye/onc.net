const ministries = [
  {
    tag: 'YOUTH',
    tagClass: 'bg-primary text-on-primary',
    borderClass: 'border-secondary',
    title: 'The Haven',
    body: 'Our youth ministry is a vibrant hub for teenagers and young adults to discover their identity in Christ. We combine high-energy worship with deep biblical truth to equip the next generation of leaders.',
    details: [
      { icon: 'event', text: 'Weekly Gatherings: Fridays 6PM' },
      { icon: 'groups', text: 'Small Group Mentorship' },
    ],
    iconColor: 'text-secondary',
    btn: { label: 'Join Radical Gen', style: 'bg-secondary text-on-primary hover:bg-primary' },
    src: '/images/youth-worship.jpg',
    alt: 'Youth Ministry - The Haven',
  },
  {
    tag: 'CHILDREN',
    tagClass: 'bg-secondary text-on-primary',
    borderClass: 'border-primary',
    title: "ONC Children's Church",
    body: 'A safe, fun, and engaging environment where children from ages 2 to 12 learn the foundational stories of the Bible. We prioritize safety and spiritual growth through play and study.',
    details: [
      { icon: 'school', text: 'Age-Appropriate Curriculum' },
      { icon: 'verified_user', text: 'Certified Volunteers' },
    ],
    iconColor: 'text-primary',
    btn: { label: 'Register Child', style: 'bg-primary text-on-primary hover:bg-secondary' },
    src: '/images/children-day-1.jpg',
    alt: "Children's Ministry",
  },
  {
    tag: 'MEN',
    tagClass: 'bg-primary-container text-on-primary-container',
    borderClass: 'border-secondary',
    title: 'The Faithful Men',
    body: 'Dedicated to building godly men of integrity and strength. We focus on biblical manhood, leadership in the home, and professional excellence through brotherhood.',
    details: [
      { icon: 'fitness_center', text: 'Monthly Breakfast & Fellowship' },
      { icon: 'shield', text: 'Accountability Partners' },
    ],
    iconColor: 'text-secondary',
    btn: { label: 'Get Connected', style: 'bg-primary text-on-primary hover:bg-secondary' },
    src: '/images/preacher.jpg',
    alt: "Men's Ministry - The Faithful Men",
  },
  {
    tag: 'WOMEN',
    tagClass: 'bg-tertiary-container text-on-tertiary-container',
    borderClass: 'border-primary',
    title: 'Covered Women Network',
    body: 'A community of women committed to spiritual growth and mutual support. We empower women to excel in their callings while nurturing a heart for God and family.',
    details: [
      { icon: 'spa', text: 'Quarterly Retreats' },
      { icon: 'volunteer_activism', text: 'Community Outreach Programs' },
    ],
    iconColor: 'text-primary',
    btn: { label: 'Join the Sisterhood', style: 'bg-secondary text-on-primary hover:bg-primary' },
    src: '/images/covered-women.jpg',
    alt: "Women's Ministry - Covered Women Network",
  },
]

export default function MinistriesGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 mb-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ministries.map((m, i) => (
          <div
            key={i}
            className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                alt={m.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={m.src}
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary transition-colors" />
              <div className="absolute top-4 left-4">
                <span className={`${m.tagClass} text-sm font-bold px-3 py-1 rounded-full`}>{m.tag}</span>
              </div>
            </div>

            <div className={`p-8 border-l-4 ${m.borderClass}`}>
              <h3 className="text-[32px] font-bold text-primary mb-4 leading-tight">{m.title}</h3>
              <p className="text-base text-on-surface-variant mb-6 leading-relaxed">{m.body}</p>
              <ul className="space-y-3 mb-8">
                {m.details.map((d, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span className={`material-symbols-outlined ${m.iconColor}`}>{d.icon}</span>
                    <span className="text-sm font-bold">{d.text}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`${m.btn.style} px-8 py-3 rounded-lg text-sm font-bold transition-colors`}
              >
                {m.btn.label}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
