import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function getNextService() {
  const now = new Date()
  const next = new Date()

  // Next Sunday 8:00 AM
  const day = now.getDay() // 0=Sun
  const daysUntilSunday = day === 0
    ? (now.getHours() < 8 ? 0 : 7)
    : 7 - day

  next.setDate(now.getDate() + daysUntilSunday)
  next.setHours(8, 0, 0, 0)
  return next
}

function Pad({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary/60 border border-secondary/30 rounded-xl px-6 py-4 min-w-[80px] text-center backdrop-blur-sm"
        style={{ boxShadow: '0 0 20px rgba(255,224,136,0.1)' }}>
        <span className="text-[42px] md:text-[56px] font-black text-white leading-none">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-secondary text-xs font-bold uppercase tracking-widest mt-2">{label}</span>
    </div>
  )
}

export default function CountdownSection() {
  const [ref, visible] = useScrollReveal()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = getNextService() - new Date()
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Subtle gold glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(115,92,0,0.05) 0%, transparent 70%)',
      }} />

      <div
        ref={ref}
        className="max-w-[1280px] mx-auto px-8 text-center relative z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">
          Don't Miss It
        </span>
        <h3 className="text-primary text-[32px] md:text-[40px] font-extrabold mt-2 mb-3"
          style={{ letterSpacing: '-0.02em' }}>
          Next Sunday Worship Service
        </h3>
        <p className="text-on-surface-variant text-sm mb-12 uppercase tracking-widest">
          Every Sunday — 8:00 AM  |  Tesano, Accra, Ghana
        </p>

        <div className="flex items-start justify-center gap-4 md:gap-8">
          <Pad value={timeLeft.days}    label="Days" />
          <span className="text-secondary text-[40px] font-bold mt-3 leading-none">:</span>
          <Pad value={timeLeft.hours}   label="Hours" />
          <span className="text-secondary text-[40px] font-bold mt-3 leading-none">:</span>
          <Pad value={timeLeft.minutes} label="Minutes" />
          <span className="text-secondary text-[40px] font-bold mt-3 leading-none">:</span>
          <Pad value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <button className="px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-lg active:scale-95 transition-all"
            style={{ background: 'linear-gradient(135deg, #735c00, #ffe088)', color: '#00113a' }}>
            Plan My Visit
          </button>
          <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-secondary/10 transition-all">
            Watch Online
          </button>
        </div>
      </div>
    </section>
  )
}
