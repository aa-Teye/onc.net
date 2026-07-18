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
    <section className="py-[60px] sm:py-[120px] px-4 sm:px-8 max-w-[1280px] mx-auto">

      {/* Quote — full width centred */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">The Heart of Giving</span>
        <p className="text-[22px] md:text-[28px] font-semibold text-primary mt-4 mb-4 leading-relaxed" style={{ letterSpacing: '-0.01em' }}>
          "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
          for God loves a cheerful giver."
        </p>
        <span className="text-sm font-bold text-secondary">— 2 Corinthians 9:7</span>
      </div>

      {/* 3 cards — equal columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="bg-surface-container p-5 sm:p-8 rounded-xl border border-outline-variant/30 hover:border-secondary/40 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
              <span className="material-symbols-outlined text-secondary text-[22px]">{card.icon}</span>
            </div>
            <h4 className="text-[18px] font-extrabold text-primary mb-3">{card.title}</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
