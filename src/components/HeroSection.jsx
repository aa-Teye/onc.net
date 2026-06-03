import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const boxes = [
  { cls: 'w-32 h-32 bg-secondary-fixed', style: { animationDelay: '0s' } },
  { cls: 'w-48 h-48 bg-white',           style: { animationDelay: '-2s', marginLeft: '10%' } },
  { cls: 'w-24 h-24 bg-secondary-fixed', style: { animationDelay: '-5s', marginTop: '5%' } },
  { cls: 'w-64 h-64 bg-white',           style: { animationDelay: '-3s' } },
  { cls: 'w-40 h-40 bg-secondary-fixed', style: { animationDelay: '-7s', marginLeft: '15%' } },
  { cls: 'w-32 h-32 bg-white',           style: { animationDelay: '-1s' } },
  { cls: 'w-56 h-56 bg-secondary-fixed', style: { animationDelay: '-4s', marginTop: '-5%' } },
  { cls: 'w-36 h-36 bg-white',           style: { animationDelay: '-6s' } },
  { cls: 'w-44 h-44 bg-secondary-fixed', style: { animationDelay: '-8s', marginLeft: '5%' } },
]

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">

        {/* Base primary colour + animated boxes */}
        <div className="absolute inset-0 bg-primary overflow-hidden">
          <div className="absolute inset-0 flex flex-wrap gap-4 p-4 opacity-20">
            {boxes.map((b, i) => (
              <div
                key={i}
                className={`${b.cls} rounded-xl animate-drift animate-pulse-slow flex-shrink-0`}
                style={b.style}
              />
            ))}
          </div>
        </div>

        {/* Colour-multiply tint */}
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />

        {/* Bottom-up gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1280px] px-8 text-center md:text-left">
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-secondary-fixed opacity-80" />
            <span
              className="text-secondary-fixed text-xs font-bold uppercase tracking-[0.3em]"
              style={{ textShadow: '0 0 10px rgba(255,224,136,0.7)' }}
            >
              {t('hero.location')}
            </span>
            <span className="w-8 h-px bg-secondary-fixed opacity-80" />
          </div>

          <h2
            className="font-black text-white mb-6 leading-tight"
            style={{
              fontSize: 'clamp(40px, 7vw, 72px)',
              letterSpacing: '-0.04em',
              textShadow: '0 4px 40px rgba(0,0,0,0.5)',
            }}
          >
            {t('hero.title')}{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ffe088 0%, #e9c349 40%, #ffb77d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 16px rgba(255,224,136,0.5))',
            }}>
              {t('hero.church')}
            </span>
          </h2>

          <p className="text-[18px] font-normal text-white/80 mb-10 max-w-2xl leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/live"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, #735c00 0%, #ffe088 50%, #735c00 100%)',
                backgroundSize: '200% auto',
                color: '#00113a',
                animation: 'shimmerBtn 3s linear infinite',
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"
                style={{ animation: 'livePulse 1.5s ease-in-out infinite' }}
              />
              {t('hero.joinOnline')}
            </Link>
            <Link
              to="/sermons"
              className="inline-flex items-center justify-center border-2 border-secondary-fixed text-secondary-fixed px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-secondary-fixed/10 transition-all"
              style={{ textShadow: '0 0 8px rgba(255,224,136,0.4)' }}
            >
              {t('hero.discoverMore')}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmerBtn {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </section>
  )
}
