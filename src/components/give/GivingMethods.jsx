import { useState, useEffect } from 'react'

const PAYSTACK_KEY = 'pk_test_4ca05c4f5ba99328e539a67aab15a35040d31904'

const BANK_DETAILS = `Bank: Republic Bank
Account Name: Ebenezer Okronipa Ministries
Account No: 0076344843027
Branch: Legon`

function OnlineGiveModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', amount: '' })
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
      ref: 'ONC_GIVE_' + Date.now(),
      metadata: {
        custom_fields: [
          { display_name: 'Full Name', variable_name: 'name', value: form.name },
        ],
      },
      onSuccess: () => { setLoading(false); setSuccess(true) },
      onCancel: () => setLoading(false),
    })
    handler.openIframe()
  }

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,17,58,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-surface rounded-2xl w-full max-w-md shadow-2xl relative overflow-y-auto max-h-[90dvh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-outline-variant transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {success ? (
          <div className="text-center py-10 px-6">
            <span className="material-symbols-outlined text-secondary text-[56px]">check_circle</span>
            <h3 className="text-primary text-2xl font-extrabold mt-4 mb-2">Thank You!</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Your gift has been received. God bless you for your generosity!
            </p>
            <button
              onClick={onClose}
              className="bg-primary text-on-primary px-8 py-3 rounded-xl text-sm font-bold"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handlePay} className="p-6 sm:p-8">
            <h3 className="text-primary text-xl font-extrabold mb-1">Give Online</h3>
            <p className="text-on-surface-variant text-sm mb-6">Card, MoMo & Bank Transfer accepted via Paystack</p>

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
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-1">Amount (GHS) *</label>
                <input
                  name="amount" type="number" min="1" required value={form.amount} onChange={handleChange}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant text-sm outline-none focus:border-secondary transition-colors bg-surface"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest transition-all active:scale-95"
              style={{ background: loading ? 'rgba(115,92,0,0.5)' : 'linear-gradient(135deg, #735c00, #ffe088)', color: '#00113a' }}
            >
              {loading ? 'Opening payment…' : `Give${form.amount ? ' GHS ' + form.amount : ''} Now →`}
            </button>

            <p className="text-center text-on-surface-variant text-xs mt-4">
              Secured by Paystack · Card, MoMo & Bank Transfer accepted
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default function GivingMethods() {
  const [copiedBank, setCopiedBank] = useState(false)
  const [copiedMomo, setCopiedMomo] = useState(false)
  const [showGiveModal, setShowGiveModal] = useState(false)

  function copyBank() {
    navigator.clipboard.writeText(BANK_DETAILS)
    setCopiedBank(true)
    setTimeout(() => setCopiedBank(false), 2000)
  }

  function copyMomo() {
    navigator.clipboard.writeText('MTN MoMo Pay: 204122 | Numbers: 0596322520 / 0546363957 | Name: Overcomers Nation Church')
    setCopiedMomo(true)
    setTimeout(() => setCopiedMomo(false), 2000)
  }

  return (
    <section className="bg-primary py-[60px] sm:py-[120px]">
      <div className="px-4 sm:px-8 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[28px] sm:text-[40px] md:text-[48px] font-extrabold text-on-primary mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Choose Your Method
          </h2>
          <p className="text-[18px] text-primary-fixed-dim leading-relaxed">
            Secure, transparent, and convenient ways to support the ministry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Online Giving */}
          <div className="bg-surface-container-lowest p-6 sm:p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 rounded-lg border-b-4 border-transparent hover:border-secondary">
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">payments</span>
              </div>
              <h3 className="text-[22px] sm:text-[26px] lg:text-[32px] font-bold text-primary mb-4 leading-tight">Online Giving</h3>
              <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                Quick and secure giving via card or mobile money through our online portal. Available 24/7.
              </p>
            </div>
            <button
              onClick={() => setShowGiveModal(true)}
              className="bg-secondary text-on-secondary py-4 text-sm font-bold rounded transition-all active:scale-95 hover:bg-secondary/90"
            >
              Give Now
            </button>
          </div>

          {/* Mobile Money */}
          <div className="bg-surface-container-lowest p-6 sm:p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 rounded-lg border-b-4 border-transparent hover:border-secondary">
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">smartphone</span>
              </div>
              <h3 className="text-[22px] sm:text-[26px] lg:text-[32px] font-bold text-primary mb-4 leading-tight">Mobile Money</h3>
              <p className="text-base text-on-surface-variant mb-6 leading-relaxed">
                Send via MTN MoMo to Overcomers Nation Church.
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Name</span>
                <span className="text-sm font-bold text-primary">Overcomers Nation Church</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">MoMoPay</span>
                <span className="text-sm font-bold text-primary">204122</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Number</span>
                <span className="text-sm font-bold text-primary">0596 322 520</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Alt Number</span>
                <span className="text-sm font-bold text-primary">0546 363 957</span>
              </div>
            </div>
            <button
              onClick={copyMomo}
              className="border-2 border-primary text-primary py-4 text-sm font-bold rounded hover:bg-primary hover:text-on-primary transition-all active:scale-95"
            >
              {copiedMomo ? 'Copied!' : 'Copy MoMo Details'}
            </button>
          </div>

          {/* Bank Transfer */}
          <div className="bg-surface-container-lowest p-6 sm:p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 rounded-lg border-b-4 border-transparent hover:border-secondary">
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">account_balance</span>
              </div>
              <h3 className="text-[22px] sm:text-[26px] lg:text-[32px] font-bold text-primary mb-4 leading-tight">Bank Transfer</h3>
              <p className="text-base text-on-surface-variant mb-6 leading-relaxed">
                Direct bank transfer for local and international partners.
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Bank</span>
                <span className="text-sm font-bold text-primary">Republic Bank</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Acc Name</span>
                <span className="text-sm font-bold text-primary text-right min-w-0 break-words">Ebenezer Okronipa Ministries</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Acc No</span>
                <span className="text-sm font-bold text-primary">0076344843027</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Branch</span>
                <span className="text-sm font-bold text-primary">Legon</span>
              </div>
            </div>
            <button
              onClick={copyBank}
              className="border-2 border-primary text-primary py-4 text-sm font-bold rounded hover:bg-primary hover:text-on-primary transition-all active:scale-95"
            >
              {copiedBank ? 'Copied!' : 'Copy Bank Details'}
            </button>
          </div>

        </div>
      </div>

      {showGiveModal && <OnlineGiveModal onClose={() => setShowGiveModal(false)} />}
    </section>
  )
}
