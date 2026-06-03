import { useState } from 'react'

export default function PrayerModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', request: '' })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setOpen(false); setSubmitted(false); setForm({ name: '', email: '', request: '' }) }, 2500)
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-[80] flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl font-bold text-sm uppercase tracking-widest transition-transform hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #735c00, #ffe088)',
          color: '#00113a',
          boxShadow: '0 4px 20px rgba(255,224,136,0.4)',
        }}
      >
        <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
        Pray With Us
      </button>

      {/* Modal backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,17,58,0.85)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div
            className="bg-surface w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
            style={{ animation: 'modalIn 0.3s ease' }}
          >
            {/* Header */}
            <div className="bg-primary px-8 py-6 relative"
              style={{ borderBottom: '3px solid #735c00' }}>
              <button onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white material-symbols-outlined">
                close
              </button>
              <span className="text-secondary-fixed text-xs font-bold uppercase tracking-widest">We Stand With You</span>
              <h3 className="text-white text-[24px] font-extrabold mt-1">Submit a Prayer Request</h3>
            </div>

            {/* Body */}
            <div className="px-8 py-6">
              {submitted ? (
                <div className="text-center py-8">
                  <span className="material-symbols-outlined text-secondary text-5xl mb-3 block">favorite</span>
                  <p className="text-[18px] font-bold text-primary">Your request has been received.</p>
                  <p className="text-on-surface-variant mt-1">Our prayer team will intercede for you.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Your Name</label>
                    <input
                      className="w-full border-b-2 border-outline-variant focus:border-secondary bg-transparent py-2 text-base outline-none transition-colors"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Email (optional)</label>
                    <input
                      className="w-full border-b-2 border-outline-variant focus:border-secondary bg-transparent py-2 text-base outline-none transition-colors"
                      placeholder="youremail@example.com"
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Your Prayer Request</label>
                    <textarea
                      className="w-full border-b-2 border-outline-variant focus:border-secondary bg-transparent py-2 text-base outline-none transition-colors resize-none"
                      placeholder="Share your prayer need..."
                      rows={4}
                      value={form.request}
                      onChange={e => setForm({ ...form, request: e.target.value })}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg text-sm font-bold uppercase tracking-widest transition-all active:scale-95"
                    style={{ background: 'linear-gradient(135deg, #735c00, #ffe088)', color: '#00113a' }}
                  >
                    Submit Prayer Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  )
}
