import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

// ── Replace this with your YouTube Channel ID ──────────────────────────────
// How to find it: YouTube Studio → Settings → Channel → Basic Info → Channel ID
// It starts with "UC" e.g. UCxxxxxxxxxxxxxxxxxxxxxxxx
const YT_CHANNEL_ID = 'YOUR_CHANNEL_ID'
// ─────────────────────────────────────────────────────────────────────────────

const otherPlatforms = [
  {
    name: 'Facebook Live',
    desc: 'Watch & join the comments',
    href: 'https://facebook.com/overcomersnation',
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Telegram',
    desc: 'Audio + instant notifications',
    href: 'https://t.me/overcomersnation',
    color: '#2AABEE',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    name: 'Podbean',
    desc: 'Listen as a podcast',
    href: 'https://overcomersnation.podbean.com',
    color: '#f06030',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 3c-1.66 0-3 1.34-3 3v4c0 1.66 1.34 3 3 3s3-1.34 3-3V6c0-1.66-1.34-3-3-3zm0 14.5c-3.31 0-6-2.69-6-6H4c0 3.97 2.94 7.23 6.75 7.78V22h2.5v-2.72C17.06 18.73 20 15.47 20 11.5h-2c0 3.31-2.69 6-6 6z"/>
      </svg>
    ),
  },
]

export default function Live() {
  return (
    <Layout>
      <section className="min-h-screen pt-16" style={{ background: 'linear-gradient(to bottom, #00113a 0%, #000d28 100%)' }}>
        <div className="max-w-[1100px] mx-auto px-6 py-16">

          {/* Header */}
          <div className="text-center mb-10">
            {/* Pulsing live badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ background: 'rgba(255,0,0,0.12)', border: '1px solid rgba(255,0,0,0.25)' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0" style={{ animation: 'livePulse 1.5s ease-in-out infinite' }} />
              <span className="text-red-400 text-xs font-black uppercase tracking-[0.2em]">Live Stream</span>
            </div>

            <h1
              className="font-black text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.03em' }}
            >
              Watch Us{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ffe088 0%, #e9c349 40%, #ffb77d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Live
              </span>
            </h1>

            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
              Tune in to our Sunday services and midweek messages from anywhere in the world.
            </p>

            {/* Service times */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed/80" />
                <span className="font-semibold">Sunday Service — 8:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed/80" />
                <span className="font-semibold">Wednesday Midweek — 6:30 PM</span>
              </div>
            </div>
          </div>

          {/* YouTube embed */}
          <div
            className="w-full rounded-2xl overflow-hidden shadow-2xl mb-12"
            style={{
              aspectRatio: '16/9',
              border: '1px solid rgba(255,224,136,0.15)',
              boxShadow: '0 0 60px rgba(255,224,136,0.08)',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/live_stream?channel=${YT_CHANNEL_ID}&autoplay=0&rel=0&modestbranding=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Overcomers Nation Church — Live Stream"
              loading="lazy"
            />
          </div>

          {/* Also available on */}
          <div className="text-center mb-8">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-6">Also available on</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {otherPlatforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all hover:scale-105 hover:brightness-110"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: `1px solid ${p.color}30`,
                    color: p.color,
                  }}
                >
                  {p.icon}
                  <div className="text-left">
                    <p className="text-sm font-bold text-white leading-none">{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: p.color }}>{p.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Browse all messages link */}
          <div className="text-center">
            <Link
              to="/sermons"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-secondary-fixed transition-colors"
            >
              Browse all past messages & series
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </Layout>
  )
}
