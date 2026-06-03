import { useCountUp } from '../hooks/useCountUp'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Stat({ value, suffix, label, delay }) {
  const [count, ref] = useCountUp(value, 2200)
  const [revealRef, visible] = useScrollReveal()

  return (
    <div
      ref={revealRef}
      className="flex flex-col items-center text-center px-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
      }}
    >
      <div ref={ref} className="text-[56px] md:text-[72px] font-black leading-none"
        style={{
          background: 'linear-gradient(135deg, #ffe088 0%, #e9c349 60%, #ffb77d 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm font-bold uppercase tracking-[0.2em] mt-3">{label}</div>
    </div>
  )
}

const stats = [
  { value: 8,  suffix: '+',  label: 'Years of Ministry',       delay: '0s' },
  { value: 1,  suffix: 'M+', label: 'Reached via Social Media', delay: '0.15s' },
  { value: 4,  suffix: '',   label: 'Platforms — YT · FB · TG · Podbean', delay: '0.3s' },
  { value: 500, suffix: '+', label: 'Members & Growing',        delay: '0.45s' },
]

export default function StatsSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* gold line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg, transparent, #ffe088, transparent)' }} />

      <div className="max-w-[1280px] mx-auto px-8">
        <div
          ref={ref}
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((s, i) => <Stat key={i} {...s} />)}
        </div>
      </div>

      {/* gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg, transparent, #ffe088, transparent)' }} />
    </section>
  )
}
