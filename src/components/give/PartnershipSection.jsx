import { useState, useEffect } from 'react'

// TODO: Replace with your Paystack public key from dashboard.paystack.com
const PAYSTACK_KEY = 'pk_test_4ca05c4f5ba99328e539a67aab15a35040d31904'

const tiers = [
  {
    icon: 'favorite',
    name: 'Kingdom Seed Partner',
    amount: '',
    amountNum: 0,
    desc: 'Every seed counts. Join as a Kingdom Seed Partner with any regular monthly gift and be part of what God is building through Overcomers Nation.',
    highlight: false,
    placeholder: 'Enter amount (GHS)',
  },
  {
    icon: 'star',
    name: 'Covenant Partner',
    amount: 'GHS 100',
    amountNum: 100,
    desc: 'Step into a deeper level of commitment. Covenant Partners are the backbone of this ministry — fuelling outreaches, media and discipleship.',
    highlight: true,
    placeholder: null,
  },
  {
    icon: 'military_tech',
    name: 'Kingdom Champion',
    amount: 'GHS 500',
    amountNum: 500,
    desc: 'Champion the vision at the highest level. Kingdom Champions directly fund missions, ONBI scholarships and community outreaches.',
    highlight: false,
    placeholder: null,
  },
]

function PartnerForm({ tier, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', amount: tier.amountNum || '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!document.getElementById('paystack-script')) {
      const script = document.createElement('script')
      script.id = 'paystack-script'
      script.src = 'https://js.paystack.co/v1/inline.js'
      document.body.appendChild(script)
    }
  }, [])

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handlePay(e) {
    e.preventDefault()
    const amt = parseFloat(form.amount)
    if (!form.name || !form.email || !amt) return

    setLoading(true)

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email: form.email,
      amount: amt * 100,
      currency: 'GHS',
      ref: 'ONC_PARTNER_' + Date.now(),
      metadata: {
        custom_fields: [
          { display_name: 'Full Name',         variable_name: 'name',  value: form.name },
          { display_name: 'Phone',             variable_name: 'phone', value: form.phone },
          { display_name: 'Partnership Tier',  variable_name: 'tier',  value: tier.name },
        ],
      },
      onSuccess: () => { setLoading(false); setSuccess(true) },
      onCancel:  () => setLoading(false),
    })
    handler.openIframe()
  }

  if (success) {
    return (
      <div className="text-center py-8 px-4">
        <span className="material-symbols-outlined text-secondary text-[56px]">check_circle</span>
        <h3 className="text-primary text-2xl font-extrabold mt-4 mb-2">Welcome, Partner!</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          Thank you for becoming a <strong>{tier.name}</strong>. Your commitment is received and
          your name is added to our prayer wall. God bless you!
        </p>
        <button
          onClick={onClose}
          className="bg-primary text-on-primary px-8 py-3 rounded-xl text-sm font-bold"
        >
          Close
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handlePay} className="p-6 sm:p-8">
      <h3 className="text-primary text-xl font-extrabold mb-1">{tier.name}</h3>
      <p className="text-secondary text-sm font-bold mb-6">{tier.amount || 'Custom amount'}</p>

      <div className="space-y-4">
        <div>
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-1">Full Name *</label>
          <input
            name="name" required value={form.name} onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant text-sm outline-none focus:border-secondary transition-colors bg-surface"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-1">Email Address *</label>
          <input
            name="email" type="email" required value={form.email} onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant text-sm outline-none focus:border-secondary transition-colors bg-surface"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-1">Phone Number</label>
          <input
            name="phone" value={form.phone} onChange={handleChange}
            placeholder="+233 XX XXX XXXX"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant text-sm outline-none focus:border-secondary transition-colors bg-surface"
          />
        </div>
        {tier.amountNum === 0 && (
          <div>
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-1">Amount (GHS) *</label>
            <input
              name="amount" type="number" min="1" required value={form.amount} onChange={handleChange}
              placeholder="Enter amount"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant text-sm outline-none focus:border-secondary transition-colors bg-surface"
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest transition-all active:scale-95"
        style={{ background: loading ? 'rgba(115,92,0,0.5)' : 'linear-gradient(135deg, #735c00, #ffe088)', color: '#00113a' }}
      >
        {loading ? 'Opening payment…' : `Pay ${tier.amountNum ? 'GHS ' + tier.amountNum : (form.amount ? 'GHS ' + form.amount : '')} →`}
      </button>

      <p className="text-center text-on-surface-variant text-xs mt-4">
        Secured by Paystack · Card, MoMo & Bank Transfer accepted
      </p>
    </form>
  )
}

export default function PartnershipSection() {
  const [selectedTier, setSelectedTier] = useState(null)

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
              <p className="text-sm font-bold mb-4 text-secondary">
                {tier.amount || 'Any Amount'}
              </p>
              <p className={`text-sm leading-relaxed mb-6 flex-1 ${tier.highlight ? 'text-white/70' : 'text-on-surface-variant'}`}>
                {tier.desc}
              </p>

              <button
                onClick={() => setSelectedTier(tier)}
                className={`w-full py-3 rounded-xl text-sm font-extrabold uppercase tracking-widest transition-all active:scale-95 ${
                  tier.highlight
                    ? 'bg-secondary text-on-primary hover:bg-secondary/90'
                    : 'bg-primary text-on-primary hover:bg-primary/90'
                }`}
              >
                Become a Partner
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-on-surface-variant text-sm">
          All amounts are in Ghanaian Cedis. International partners —&nbsp;
          <a href="/contact" className="text-secondary font-bold hover:underline">contact us</a> for details.
        </p>
      </div>

      {/* Modal */}
      {selectedTier && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          style={{ background: 'rgba(0,17,58,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={e => { if (e.target === e.currentTarget) setSelectedTier(null) }}
        >
          <div className="bg-surface rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden">
            <button
              onClick={() => setSelectedTier(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-outline-variant transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
            <PartnerForm tier={selectedTier} onClose={() => setSelectedTier(null)} />
          </div>
        </div>
      )}

      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </section>
  )
}
