import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const announcements = [
  'Sunday Worship Service — 8:00 AM  |  Tesano, Accra, Ghana',
  'Tuesday Midweek Service — 6:30 PM',
  'Mandate Miracle Encounter Service — Join Us Every Week',
  "Children's Church — Every Sunday during service",
  'Covered Women Network — Quarterly Retreat coming soon',
  'The Haven Youth Ministry — Fridays 5:55 PM',
  'ONBI Enrolment Now Open — Contact us to register',
  'Overcomers Nation — Tesano, Accra, Ghana  |  +233 54 636 3957',
]
const tickerText = announcements.join('          ///          ')

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ height: '100vh', background: '#00113a' }}
    >
      {/* Background photo */}
      <img
        src="/images/mandate.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '90% 28%', opacity: 0.5 }}
      />

      {/* Left-to-right dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #00113a 30%, rgba(0,17,58,0.72) 60%, rgba(0,17,58,0.45) 100%)',
        }}
      />

      {/* Bottom-up fade */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(0deg, #00113a 8%, transparent 50%)' }}
      />

      {/* Main content — grows to fill available space, centers vertically */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16">
        <div style={{ maxWidth: '820px' }}>

          {/* Headline */}
          <h1
            className="font-black text-white mb-8"
            style={{
              fontSize: 'clamp(28px, 5.5vw, 100px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.02,
            }}
          >
            {t('hero.title')}<br />
            <span style={{ color: '#fed65b' }}>{t('hero.church')}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-12 leading-relaxed"
            style={{
              color: '#dbe1ff',
              fontSize: 'clamp(17px, 1.6vw, 26px)',
              lineHeight: 1.55,
              maxWidth: '580px',
            }}
          >
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5">
            <Link
              to="/live"
              className="inline-flex items-center gap-3 font-extrabold rounded-xl transition-all active:scale-95"
              style={{
                background: '#fed65b',
                color: '#00113a',
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                padding: 'clamp(14px, 1.2vw, 20px) clamp(26px, 2vw, 38px)',
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: '#d12c2c', animation: 'livePulse 1.5s ease-in-out infinite' }}
              />
              {t('hero.joinOnline')}
            </Link>

            <Link
              to="/sermons"
              className="inline-flex items-center gap-2 font-bold rounded-xl transition-all active:scale-95"
              style={{
                border: '1.5px solid rgba(233,195,73,0.55)',
                color: '#fed65b',
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                padding: 'clamp(14px, 1.2vw, 20px) clamp(26px, 2vw, 38px)',
              }}
            >
              {t('hero.discoverMore')}
              <span className="material-symbols-outlined" style={{ fontSize: 'clamp(16px, 1.2vw, 22px)' }}>arrow_forward</span>
            </Link>
          </div>

          {/* Location — below CTAs, smaller */}
          <div className="inline-flex items-center gap-2 mt-8">
            <span className="w-5 h-px" style={{ background: '#e9c349', opacity: 0.7 }} />
            <span
              className="font-semibold uppercase"
              style={{ color: '#e9c349', fontSize: '10px', letterSpacing: '0.22em', opacity: 0.85 }}
            >
              {t('hero.location')}
            </span>
          </div>

        </div>
      </div>

      {/* Ticker — pinned to bottom of hero */}
      <div className="relative z-10 bg-primary border-t-2 border-b-2 overflow-hidden" style={{ borderColor: '#fed65b', paddingTop: '10px', paddingBottom: '10px' }}>
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #00113a, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #00113a, transparent)' }} />
        {/* LIVE label */}
        <div className="absolute left-0 top-0 h-full flex items-center z-20 px-4" style={{ background: '#fed65b' }}>
          <span style={{ color: '#00113a', fontSize: '11px', fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>LIVE</span>
        </div>

        <div className="flex whitespace-nowrap pl-16">
          <div style={{ animation: 'oncTicker 55s linear infinite', display: 'flex' }}>
            <span className="text-white text-sm font-semibold uppercase px-8"
              style={{ letterSpacing: '0.12em', textShadow: '0 0 12px rgba(255,224,136,0.5)' }}>
              {tickerText}
            </span>
            <span className="text-white text-sm font-semibold uppercase px-8"
              style={{ letterSpacing: '0.12em', textShadow: '0 0 12px rgba(255,224,136,0.5)' }}
              aria-hidden="true">
              {tickerText}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
        @keyframes oncTicker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
