const announcements = [
  'Sunday Worship Service — 8:00 AM  |  Tesano, Accra, Ghana',
  'Tuesday Midweek Service — 6:30 PM',
  'Mandate Miracle Encounter Service — Join Us Every Week',
  'Children\'s Church — Every Sunday during service',
  'Covered Women Network — Quarterly Retreat coming soon',
  'The Haven Youth Ministry — Fridays 6:00 PM',
  'ONBI Enrolment Now Open — Contact us to register',
  'Overcomers Nation — Tesano, Accra, Ghana  |  +233 54 636 3957',
]

export default function NewsTicker() {
  const text = announcements.join('          ///          ')

  return (
    <div className="bg-primary border-y-2 border-secondary overflow-hidden relative" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #00113a, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #00113a, transparent)' }} />

      {/* Label */}
      <div className="absolute left-0 top-0 h-full flex items-center z-20 bg-secondary px-4">
        <span className="text-primary text-xs font-black uppercase tracking-widest whitespace-nowrap">LIVE</span>
      </div>

      <div className="flex whitespace-nowrap pl-16">
        <div style={{ animation: 'ticker 45s linear infinite', display: 'flex' }}>
          <span className="text-white text-sm font-semibold uppercase tracking-[0.12em] px-8"
            style={{ textShadow: '0 0 12px rgba(255,224,136,0.5)' }}>
            {text}
          </span>
          <span className="text-white text-sm font-semibold uppercase tracking-[0.12em] px-8"
            style={{ textShadow: '0 0 12px rgba(255,224,136,0.5)' }}>
            {text}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
