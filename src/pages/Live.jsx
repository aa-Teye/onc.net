import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const SERVICES = [
  { label: 'Sunday Service',   day: 0, hour: 8,  minute: 0  },
  { label: 'Tuesday Midweek', day: 2, hour: 18, minute: 30 },
  { label: 'Friday Haven',    day: 5, hour: 17, minute: 55 },
]

function getNextService() {
  const now = new Date()
  let soonest = null
  let soonestMs = Infinity

  for (const svc of SERVICES) {
    const candidate = new Date(now)
    candidate.setHours(svc.hour, svc.minute, 0, 0)
    let diff = svc.day - now.getDay()
    if (diff < 0 || (diff === 0 && candidate <= now)) diff += 7
    candidate.setDate(now.getDate() + diff)
    const ms = candidate - now
    if (ms < soonestMs) { soonestMs = ms; soonest = { svc, date: candidate, ms } }
  }
  return soonest
}

const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const SERVICE_DAYS = new Set(SERVICES.map(s => s.day))

function useCountdown() {
  const [state, setState] = useState({ label: '', dateStr: '', days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const tick = () => {
      const next = getNextService()
      if (!next) return
      const { svc, date, ms } = next
      setState({
        label: svc.label,
        dateStr: date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
          + ' · ' + date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
        days:    Math.floor(ms / 86400000),
        hours:   Math.floor((ms % 86400000) / 3600000),
        minutes: Math.floor((ms % 3600000) / 60000),
        seconds: Math.floor((ms % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return state
}

// ──────────────────────────────────────────────────────
// PASTE YOUR YOUTUBE CHANNEL ID HERE (starts with "UC")
// Find it: studio.youtube.com → Settings → Channel → Advanced settings
const CHANNEL_ID = 'UC_l58cOXpmAOR5GaOzMUXmQ'
// ──────────────────────────────────────────────────────

const LIVE_EMBED = `https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3&color=white`

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
  const countdown = useCountdown()

  return (
    <Layout>
      <section className="min-h-screen pt-16" style={{ background: 'linear-gradient(to bottom, #00113a 0%, #000d28 100%)' }}>
        <div className="max-w-[1100px] mx-auto px-6 py-16">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{ background: 'rgba(255,0,0,0.12)', border: '1px solid rgba(255,0,0,0.25)' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0"
                style={{ animation: 'livePulse 1.5s ease-in-out infinite' }} />
              <span className="text-red-400 text-xs font-black uppercase tracking-[0.2em]">Live Stream</span>
            </div>

            <h1
              className="font-black text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(32px, 6vw, 64px)', letterSpacing: '-0.03em' }}
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

            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tune in to our services from anywhere in the world.
            </p>
          </div>

          {/* ── LIVE EMBED — always visible ── */}
          <div className="mb-10">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="w-full h-full"
                src={LIVE_EMBED}
                title="Overcomers Nation Church Live"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
          </div>

          {/* Schedule strip */}
          <div
            className="rounded-2xl px-4 sm:px-8 py-6 mb-14 flex flex-col sm:flex-row items-center gap-6 justify-between"
            style={{ background: 'rgba(255,214,91,0.05)', border: '1px solid rgba(255,214,91,0.15)' }}
          >
            {/* Next service countdown */}
            <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
              <p className="text-secondary text-[11px] font-black uppercase tracking-[0.2em]">
                Next — {countdown.label}
              </p>
              <p className="text-white/45 text-xs">{countdown.dateStr}</p>
            </div>

            {/* Countdown timer */}
            <div className="flex items-start justify-center gap-1 sm:gap-2">
              {[
                { v: countdown.days,    l: 'Days'  },
                { v: countdown.hours,   l: 'Hrs'   },
                { v: countdown.minutes, l: 'Mins'  },
                { v: countdown.seconds, l: 'Secs'  },
              ].map(({ v, l }, i, arr) => (
                <div key={l} className="flex items-start gap-1 sm:gap-2">
                  <div className="flex flex-col items-center">
                    <div
                      className="rounded-lg text-center"
                      style={{
                        padding: 'clamp(4px,1.5vw,10px) clamp(8px,2.5vw,16px)',
                        minWidth: 'clamp(40px,10vw,60px)',
                        background: 'rgba(255,214,91,0.08)',
                        border: '1px solid rgba(255,214,91,0.2)',
                      }}
                    >
                      <span className="font-black text-white leading-none block"
                        style={{ fontSize: 'clamp(18px,5vw,32px)' }}>
                        {String(v).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-secondary font-bold uppercase tracking-widest mt-1"
                      style={{ fontSize: 'clamp(7px,1.8vw,9px)' }}>
                      {l}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-secondary/50 font-bold leading-none mt-0.5"
                      style={{ fontSize: 'clamp(16px,4vw,26px)' }}>
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Weekly schedule */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-white/30 text-[9px] uppercase tracking-widest">Weekly Schedule</p>
              <div className="flex gap-1.5">
                {DAYS_SHORT.map((d, i) => {
                  const isServiceDay = SERVICE_DAYS.has(i)
                  const svc = SERVICES.find(s => s.day === i)
                  return (
                    <div key={d} className="flex flex-col items-center gap-0.5">
                      <span className={`text-[8px] font-bold uppercase ${isServiceDay ? 'text-secondary' : 'text-white/20'}`}>{d}</span>
                      <div
                        className="rounded flex items-center justify-center"
                        style={{
                          width: '28px', height: '28px',
                          ...(isServiceDay
                            ? { background: 'rgba(255,214,91,0.18)', border: '1.5px solid rgba(255,214,91,0.5)' }
                            : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }),
                        }}
                      >
                        {isServiceDay
                          ? <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          : <span className="w-1 h-1 rounded-full bg-white/20" />}
                      </div>
                      {isServiceDay && svc && (
                        <span className="text-secondary/60 font-bold text-center" style={{ fontSize: '7px' }}>
                          {svc.hour === 8 ? '8AM' : svc.hour === 18 ? '6:30P' : '5:55P'}
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
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
