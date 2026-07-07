import { useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const YT_CHANNEL = 'https://www.youtube.com/@overcomersnationchurch2041'

const recentSermons = [
  {
    id: 'dUuIJ3ifXdU',
    title: 'The Priority of Love – Your Greatest Quest',
    speaker: 'Overcomers Nation Church',
  },
  {
    id: 'uHeNqbxzUYM',
    title: 'Understanding Your Worth in Christ',
    speaker: 'Rev Dr Ebenezer Okronipa',
  },
  {
    id: 'ccaQMT3EDx4',
    title: 'The Power in the Name of Jesus',
    speaker: 'Rev Dr Ebenezer Okronipa',
  },
  {
    id: 'Azb7wu-opAk',
    title: 'What God Builds, Hell Attacks',
    speaker: 'Overcomers Nation Church',
  },
]

const platforms = [
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

function SermonCard({ video }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="group cursor-pointer" onClick={() => setPlaying(p => !p)}>
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-3">
        {playing ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={e => { e.target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg` }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #735c00, #ffe088)' }}
              >
                <span className="material-symbols-outlined text-primary text-2xl" style={{ marginLeft: '2px' }}>play_arrow</span>
              </div>
            </div>
          </>
        )}
      </div>
      <h4 className="text-white text-sm font-bold leading-snug group-hover:text-secondary transition-colors">{video.title}</h4>
      <p className="text-white/50 text-xs mt-1">{video.speaker}</p>
    </div>
  )
}

export default function Live() {
  return (
    <Layout>
      <section className="min-h-screen pt-16" style={{ background: 'linear-gradient(to bottom, #00113a 0%, #000d28 100%)' }}>
        <div className="max-w-[1100px] mx-auto px-6 py-16">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{ background: 'rgba(255,0,0,0.12)', border: '1px solid rgba(255,0,0,0.25)' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0"
                style={{ animation: 'livePulse 1.5s ease-in-out infinite' }} />
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

            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Tune in to our Sunday services and midweek messages from anywhere in the world.
            </p>

            {/* Service times */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                <span className="font-semibold">Sunday Service — 8:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                <span className="font-semibold">Tuesday Midweek — 6:30 PM</span>
              </div>
            </div>

            {/* Main CTA — Watch Live on YouTube */}
            <a
              href={`${YT_CHANNEL}/live`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base transition-all hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #735c00, #ffe088)',
                color: '#00113a',
                boxShadow: '0 0 30px rgba(255,224,136,0.25)',
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch Live on YouTube
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
            <span className="text-white/30 text-xs font-bold uppercase tracking-widest">Recent Messages</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* Recent sermon videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {recentSermons.map((v, i) => (
              <SermonCard key={i} video={v} />
            ))}
          </div>

          {/* Also available on */}
          <div className="text-center mb-8">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-6">Also available on</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: `1px solid ${p.color}40`,
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

          {/* Browse all */}
          <div className="text-center">
            <Link
              to="/sermons"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/40 hover:text-secondary transition-colors"
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
