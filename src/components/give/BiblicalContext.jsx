const cards = [
  {
    icon: 'account_balance',
    title: 'Tithe',
    body: 'The first tenth of our increase, acknowledging God\'s sovereignty over our provision. Tithing is an act of trust and obedience that opens the windows of heaven.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Offering',
    body: 'A way of honouring God when you come for our services or join us on our online platforms. Every offering is an expression of worship and gratitude to God.',
  },
  {
    icon: 'handshake',
    title: 'Partnership',
    body: 'Supporting the programmes, projects and outreaches of Overcomers Nation Church. Partners fuel evangelism, community impact and the advancement of the Kingdom.',
  },
]

export default function BiblicalContext() {
  return (
    <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 border-l-4 border-secondary-fixed-dim pl-8 py-4">
          <h3 className="text-[48px] font-extrabold text-primary mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            The Heart of Giving
          </h3>
          <p className="text-[18px] text-on-surface-variant mb-8 leading-relaxed">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
            for God loves a cheerful giver."
          </p>
          <span className="text-sm font-bold text-secondary">— 2 Corinthians 9:7</span>
        </div>

        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-surface-container p-8 rounded-lg border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">{card.icon}</span>
              <h4 className="text-sm font-bold text-primary mb-2">{card.title}</h4>
              <p className="text-base text-on-surface-variant leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
