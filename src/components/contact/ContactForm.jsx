import { useState } from 'react'

const subjects = ['General Inquiry', 'Prayer Request', 'Counseling', 'Ministry Information']

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: subjects[0], message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest py-3 px-4 transition-all outline-none text-base'

  return (
    <div className="lg:col-span-7">
      <div className="bg-surface-bright p-8 rounded-xl shadow-xl border border-outline-variant">
        <h3 className="text-[32px] font-bold text-primary mb-6 leading-tight">Send a Message</h3>

        {submitted ? (
          <div className="py-16 text-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-4 block">check_circle</span>
            <p className="text-[18px] text-on-surface-variant">
              Thank you! We'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Full Name</label>
                <input
                  className={inputClass}
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Email Address</label>
                <input
                  className={inputClass}
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Subject</label>
              <select
                className={inputClass}
                name="subject"
                value={form.subject}
                onChange={handleChange}
              >
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Your Message</label>
              <textarea
                className={inputClass}
                name="message"
                placeholder="How can we help you?"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-secondary text-on-secondary text-sm font-bold rounded shadow-md hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest"
            >
              Submit Message
            </button>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <a
          className="flex items-center justify-between p-6 bg-primary text-on-primary rounded-xl hover:scale-[1.02] transition-transform"
          href="#"
        >
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-4xl">social_leaderboard</span>
            <div>
              <p className="text-sm font-bold">Follow us on</p>
              <p className="text-[32px] font-bold leading-none">Facebook</p>
            </div>
          </div>
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
        <a
          className="flex items-center justify-between p-6 bg-error text-on-error rounded-xl hover:scale-[1.02] transition-transform"
          href="#"
        >
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-4xl">video_library</span>
            <div>
              <p className="text-sm font-bold">Watch us on</p>
              <p className="text-[32px] font-bold leading-none">YouTube</p>
            </div>
          </div>
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </div>
  )
}
