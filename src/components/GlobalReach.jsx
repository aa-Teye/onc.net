import { useScrollReveal } from '../hooks/useScrollReveal'

const nations = [
  { flag: '🇬🇭', name: 'Ghana', note: 'Headquarters — Tesano, Accra' },
  { flag: '🇳🇬', name: 'Nigeria', note: 'Active Partners' },
  { flag: '🇬🇧', name: 'United Kingdom', note: 'Diaspora Community' },
  { flag: '🇺🇸', name: 'United States', note: 'Diaspora Community' },
  { flag: '🇩🇪', name: 'Germany', note: 'Active Partners' },
  { flag: '🇿🇦', name: 'South Africa', note: 'Kingdom Connections' },
  { flag: '🇰🇪', name: 'Kenya', note: 'Mission Partners' },
  { flag: '🇨🇦', name: 'Canada', note: 'Diaspora Community' },
  { flag: '🇮🇹', name: 'Italy', note: 'Active Partners' },
  { flag: '🇦🇺', name: 'Australia', note: 'Kingdom Connections' },
  { flag: '🇧🇪', name: 'Belgium', note: 'Active Partners' },
  { flag: '🇫🇷', name: 'France', note: 'Kingdom Connections' },
]

export default function GlobalReach() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section className="py-[120px] bg-primary overflow-hidden relative">
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[400, 600, 800].map(s => (
          <div key={s} className="absolute rounded-full border border-secondary/10"
            style={{ width: s, height: s, top: -s/2, left: -s/2 }} />
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <span className="text-secondary-fixed text-xs font-bold uppercase tracking-[0.3em]">
            Kingdom Without Borders
          </span>
          <h3 className="text-white text-[40px] md:text-[48px] font-extrabold mt-2 leading-tight"
            style={{ letterSpacing: '-0.02em' }}>
            Our Global Reach
          </h3>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            From Accra to the nations — Overcomers Nation is raising an army that knows no borders.
          </p>
        </div>

        {/* Nations grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {nations.map((n, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-secondary/40 transition-all duration-300 group"
              style={{
                animation: `fadeUp 0.5s ease both`,
                animationDelay: `${i * 0.07}s`,
              }}
            >
              <div className="text-4xl mb-2">{n.flag}</div>
              <p className="text-white text-sm font-bold">{n.name}</p>
              <p className="text-white/40 text-[10px] mt-1 uppercase tracking-wider group-hover:text-secondary-fixed transition-colors">
                {n.note}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-white/50 text-sm mb-4">Are you from another nation? Connect with us.</p>
          <button className="border border-secondary-fixed text-secondary-fixed px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-secondary-fixed/10 transition-all">
            Partner With ONC Globally
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
