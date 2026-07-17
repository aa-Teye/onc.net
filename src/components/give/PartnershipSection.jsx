const WA_NUMBER = '233546363957'

const tiers = [
  {
    icon: 'favorite',
    name: 'Kingdom Seed Partner',
    amount: 'Any Amount',
    desc: 'Every seed counts. Join as a Kingdom Seed Partner with any regular monthly gift and be part of what God is building through Overcomers Nation.',
    perks: ['Monthly newsletter', 'Partner prayer updates', 'Access to ministerial resources'],
    highlight: false,
  },
  {
    icon: 'star',
    name: 'Covenant Partner',
    amount: 'GHS 100 / month',
    desc: 'Step into a deeper level of commitment. Covenant Partners are the backbone of this ministry — fuelling outreaches, media and discipleship.',
    perks: ['All Seed Partner benefits', 'Quarterly partner devotional', 'Name in our prayer wall', 'Partner appreciation events'],
    highlight: true,
  },
  {
    icon: 'military_tech',
    name: 'Kingdom Champion',
    amount: 'GHS 500 / month',
    desc: 'Champion the vision at the highest level. Kingdom Champions directly fund missions, ONBI scholarships and community outreaches.',
    perks: ['All Covenant Partner benefits', 'Direct line to ministry office', 'Annual partner dinner with Dr. Okronipa', 'Dedicated intercession for your family'],
    highlight: false,
  },
]

function waLink(tier) {
  const msg = encodeURIComponent(
    `Hello, I would like to become a *${tier.name}* (${tier.amount}) with Overcomers Nation Church. Please guide me on the next steps.`
  )
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

export default function PartnershipSection() {
  return (
    <section className="py-[100px] px-8 bg-surface">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">Join the Vision</span>
          <h2
            className="text-[40px] md:text-[52px] font-extrabold text-primary mt-3 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Become a Ministry Partner
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            Partnership is more than giving — it is a covenant relationship. When you partner with Overcomers Nation
            you share in every soul won, every life transformed and every community impacted.
          </p>
          <p className="text-secondary font-bold mt-3 text-sm italic">
            "And my God will supply every need of yours according to his riches in glory in Christ Jesus." — Phil 4:19
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                tier.highlight
                  ? 'bg-primary text-on-primary shadow-2xl scale-[1.02]'
                  : 'bg-surface-container-low border border-outline-variant/30 hover:border-secondary/40 hover:shadow-lg'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-on-primary text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: tier.highlight ? 'rgba(255,214,91,0.15)' : 'rgba(0,17,58,0.06)' }}
              >
                <span className="material-symbols-outlined text-secondary text-[22px]">{tier.icon}</span>
              </div>

              <h3 className={`text-[20px] font-extrabold mb-1 ${tier.highlight ? 'text-white' : 'text-primary'}`}>
                {tier.name}
              </h3>
              <p className="text-sm font-bold mb-4 text-secondary">{tier.amount}</p>
              <p className={`text-sm leading-relaxed mb-6 flex-1 ${tier.highlight ? 'text-white/70' : 'text-on-surface-variant'}`}>
                {tier.desc}
              </p>

              <ul className="space-y-2 mb-8">
                {tier.perks.map((perk, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-secondary text-[16px] flex-shrink-0">check_circle</span>
                    <span className={tier.highlight ? 'text-white/80' : 'text-on-surface-variant'}>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(tier)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl text-sm font-extrabold uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${
                  tier.highlight
                    ? 'bg-secondary text-on-primary hover:bg-secondary/90'
                    : 'bg-primary text-on-primary hover:bg-primary/90'
                }`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Become a Partner
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-on-surface-variant text-sm">
          All amounts are in Ghanaian Cedis. International partners —{' '}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hello, I am an international partner and would like to support Overcomers Nation Church. Please guide me.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-bold hover:underline"
          >
            chat with us on WhatsApp
          </a>{' '}
          for details.
        </p>
      </div>
    </section>
  )
}
