import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    // TODO: Replace this URL with your Mailchimp form action URL
    // Go to Mailchimp → Audience → Signup forms → Embedded forms → copy the action URL
    const MAILCHIMP_URL = ''

    if (!MAILCHIMP_URL) {
      // UI preview mode — show success without real submission
      setTimeout(() => setStatus('success'), 900)
      return
    }

    fetch(MAILCHIMP_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: new URLSearchParams({ EMAIL: email }),
    })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }

  return (
    <section className="relative py-[100px] overflow-hidden" style={{ background: '#00113a' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,214,91,0.07) 0%, transparent 70%)',
      }} />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, #ffe088, transparent)', opacity: 0.3 }} />
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, #ffe088, transparent)', opacity: 0.3 }} />

      <div className="relative z-10 max-w-[720px] mx-auto px-6 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,214,91,0.12)', border: '1px solid rgba(255,214,91,0.3)' }}>
            <span className="material-symbols-outlined text-secondary text-[28px]">mail</span>
          </div>
        </div>

        {/* Label */}
        <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">
          Monthly Newsletter
        </span>

        {/* Heading */}
        <h3
          className="text-white text-[32px] md:text-[42px] font-extrabold mt-3 mb-4 leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Stay Connected to<br />
          <span style={{ color: '#fed65b' }}>the Word & Vision</span>
        </h3>

        {/* Subtext */}
        <p className="text-white/60 text-base mb-10 leading-relaxed max-w-[480px] mx-auto">
          Subscribe to the Overcomers Nation monthly newsletter — Kingdom insights, ministry updates,
          and teachings from Dr. Okronipa delivered straight to your inbox every month.
        </p>

        {/* Form */}
        {status === 'success' ? (
          <div
            className="flex flex-col items-center gap-3 py-8 px-6 rounded-2xl"
            style={{ background: 'rgba(255,214,91,0.08)', border: '1px solid rgba(255,214,91,0.2)' }}
          >
            <span className="material-symbols-outlined text-secondary text-[40px]">check_circle</span>
            <p className="text-white font-bold text-lg">You're subscribed!</p>
            <p className="text-white/60 text-sm">
              Welcome to the ONC family. Your first newsletter will arrive next month.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[520px] mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-xl text-sm font-medium outline-none transition-all"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
              }}
              onFocus={e => { e.target.style.border = '1px solid rgba(255,214,91,0.6)' }}
              onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.15)' }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-7 py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest transition-all active:scale-95 flex-shrink-0"
              style={{
                background: status === 'loading'
                  ? 'rgba(255,214,91,0.5)'
                  : 'linear-gradient(135deg, #735c00, #ffe088)',
                color: '#00113a',
              }}
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-sm mt-3">Something went wrong. Please try again.</p>
        )}

        {/* Privacy note */}
        <p className="text-white/30 text-xs mt-6">
          No spam. Unsubscribe anytime. Your email is kept private.
        </p>

      </div>
    </section>
  )
}
