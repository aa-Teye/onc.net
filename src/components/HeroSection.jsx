import { useTranslation } from 'react-i18next'

const videoBoxes = [
  { src: '/images/pastor.jpg', label: 'Sunday Message', tag: 'SERMON' },
  { src: '/images/covered-women.jpg', label: 'Women Ministry', tag: 'MINISTRY' },
  { src: '/images/children-singing.jpg', label: "Children's Praise", tag: 'KIDS' },
  { src: '/images/youth-worship.jpg', label: 'Youth Worship', tag: 'YOUTH' },
  { src: '/images/children-day-1.jpg', label: 'Children Day', tag: 'EVENT' },
  { src: '/images/youth-group.jpg', label: 'Youth Connect', tag: 'CONNECT' },
  { src: '/images/children-panel.jpg', label: 'Panel Discussion', tag: 'TEACH' },
  { src: '/images/preacher.jpg', label: 'Live Service', tag: 'LIVE' },
]

function VideoCard({ src, label, tag }) {
  return (
    <div
      className="relative h-full flex-shrink-0 rounded-xl overflow-hidden"
      style={{ width: '300px', border: '1px solid rgba(255,224,136,0.15)' }}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 40%, rgba(0,0,0,0.78) 100%)' }}
      />
      {/* Tag badge */}
      <div
        className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-black tracking-widest"
        style={{ background: 'rgba(115,92,0,0.9)', color: '#ffe088' }}
      >
        {tag}
      </div>
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: 'rgba(255,224,136,0.88)', backdropFilter: 'blur(4px)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#00113a" style={{ marginLeft: '3px' }}>
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>
      {/* Bottom title + progress bar */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
        <p className="text-white text-xs font-bold truncate">{label}</p>
        <div className="mt-1.5 h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.15)' }}>
          <div
            className="h-full rounded-full"
            style={{ width: '42%', background: 'linear-gradient(to right, #ffe088, #e9c349)' }}
          />
        </div>
      </div>
    </div>
  )
}

function VideoStrip({ reverse = false, speed = 60 }) {
  const cards = reverse ? [...videoBoxes].reverse() : videoBoxes
  return (
    <div
      className="flex h-full gap-3 absolute top-0 left-0 items-stretch"
      style={{
        animation: `heroScroll${reverse ? 'Rev' : ''} ${speed}s linear infinite`,
        width: 'max-content',
        paddingTop: '4px',
        paddingBottom: '4px',
      }}
    >
      {[...cards, ...cards].map((card, i) => (
        <VideoCard key={i} {...card} />
      ))}
    </div>
  )
}

export default function HeroSection() {
  const { t } = useTranslation()
  return (
    <section className="relative h-full flex items-center justify-center pt-16 overflow-hidden">

      {/* Scrolling video card background */}
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ height: '100%' }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '51%' }}>
          <VideoStrip reverse={false} speed={55} />
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '51%' }}>
          <VideoStrip reverse={true} speed={45} />
        </div>
      </div>

      {/* Dark navy overlay */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(to bottom, rgba(0,17,58,0.91) 0%, rgba(0,17,58,0.80) 50%, rgba(0,17,58,0.95) 100%)',
      }} />

      {/* Gold radial glow */}
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 55% at 35% 55%, rgba(115,92,0,0.28) 0%, transparent 70%)',
        animation: 'heroPulse 6s ease-in-out infinite',
      }} />

      {/* Content */}
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
              textShadow: '0 4px 40px rgba(0,0,0,0.7)',
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
            <button
              className="px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, #735c00 0%, #ffe088 50%, #735c00 100%)',
                backgroundSize: '200% auto',
                color: '#00113a',
                animation: 'shimmerBtn 3s linear infinite',
              }}
            >
              {t('hero.joinOnline')}
            </button>
            <button
              className="border-2 border-secondary-fixed text-secondary-fixed px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-secondary-fixed/10 transition-all"
              style={{ textShadow: '0 0 8px rgba(255,224,136,0.4)' }}
            >
              {t('hero.discoverMore')}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes heroScrollRev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
        @keyframes shimmerBtn {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  )
}
