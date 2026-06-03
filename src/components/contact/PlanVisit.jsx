const DIRECTIONS_URL =
  'https://maps.google.com/maps?daddr=Overcomers+Nation+Church+Naa+Atta+Street+Tesano+Accra+Ghana'

const MAP_EMBED =
  'https://maps.google.com/maps?q=Overcomers+Nation+Church+Naa+Atta+Street+Tesano+Accra+Ghana&t=&z=16&ie=UTF8&iwloc=&output=embed'

const details = [
  {
    icon: 'location_on',
    label: 'Address',
    lines: ['Naa Atta Street, Tesano', 'Accra, Ghana'],
  },
  {
    icon: 'schedule',
    label: 'Sunday Service',
    lines: ['8:00 AM — Main Worship'],
  },
  {
    icon: 'schedule',
    label: 'Midweek Service',
    lines: ['Wednesday, 6:30 PM'],
  },
  {
    icon: 'call',
    label: 'Call for Directions',
    lines: ['054 636 3957'],
  },
]

export default function PlanVisit() {
  return (
    <section className="w-full bg-primary text-on-primary">
      {/* Header strip */}
      <div className="max-w-[1280px] mx-auto px-8 pt-[80px] pb-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-16 bg-secondary-fixed/40" />
          <span className="text-secondary-fixed text-sm font-bold uppercase tracking-[0.2em]">We'd Love to Have You</span>
          <div className="h-px w-16 bg-secondary-fixed/40" />
        </div>
        <h3
          className="text-[48px] font-extrabold leading-tight mb-3"
          style={{ letterSpacing: '-0.02em' }}
        >
          Plan Your Visit
        </h3>
        <p className="text-on-primary/70 text-[18px] max-w-xl mx-auto leading-relaxed">
          We are located in Tesano, Accra. Come as you are — our doors are always open.
        </p>
      </div>

      {/* Map + info grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ minHeight: '480px' }}>

        {/* Info panel */}
        <div className="flex flex-col justify-between p-10 lg:p-14 gap-8" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div className="space-y-7">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(255,224,136,0.12)' }}
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">{d.icon}</span>
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-on-primary/50 mb-0.5">{d.label}</p>
                  {d.lines.map((line, i) => (
                    <p key={i} className="text-[16px] font-semibold text-on-primary/90 leading-snug">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Get Directions button */}
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:brightness-110 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #735c00 0%, #ffe088 50%, #735c00 100%)',
              backgroundSize: '200% auto',
              color: '#00113a',
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Get Directions on Google Maps
          </a>
        </div>

        {/* Map — takes 2 of 3 columns on desktop */}
        <div className="lg:col-span-2 min-h-[380px] lg:min-h-0 relative">
          <iframe
            title="Overcomers Nation Church — Naa Atta Street, Tesano, Accra"
            src={MAP_EMBED}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
