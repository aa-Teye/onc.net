import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const videos = [
  {
    id: 'dUuIJ3ifXdU',
    name: 'Overcomers Nation Church',
    role: 'Teaching',
    title: 'The Priority of Love – Your Greatest Quest',
  },
  {
    id: 'uHeNqbxzUYM',
    name: 'Rev Dr Ebenezer Okronipa',
    role: 'Teaching',
    title: 'Understanding Your Worth in Christ',
  },
  {
    id: 'ccaQMT3EDx4',
    name: 'Rev Dr Ebenezer Okronipa',
    role: 'Teaching',
    title: 'The Power in the Name of Jesus',
  },
  {
    id: 'Azb7wu-opAk',
    name: 'Overcomers Nation Church',
    role: 'Teaching',
    title: 'What God Builds, Hell Attacks',
  },
]

// ── Replace images and quotes with real testimonies ──
const stories = [
  {
    name: 'Sister Abena Mensah',
    role: 'Member — 4 years',
    quote: 'I came broken, searching for hope. Overcomers Nation did not just give me a church — it gave me a family, a purpose, and a living encounter with God that changed every area of my life.',
    img: '/images/covered-women.jpg',
  },
  {
    name: 'Brother Kwame Asante',
    role: 'Microchurch Shepherd',
    quote: 'The teaching on dominion and faith transformed my business and my marriage. I now lead a microchurch and watch God do the same for others. This ministry is truly raising overcomers.',
    img: '/images/preacher.jpg',
  },
  {
    name: 'Youth Member — The Haven',
    role: 'Member — 2 years',
    quote: 'The Haven gave me identity at a time I had none. I found purpose, community, and a genuine relationship with God. I am not the same person I was when I walked through those doors.',
    img: '/images/youth-worship.jpg',
  },
  {
    name: 'Sister Grace Boateng',
    role: 'Covered Women Network',
    quote: 'Through the Covered Women Network I discovered my calling. The retreats, the prayers, the sisterhood — God used every part of this ministry to heal wounds I had carried for years.',
    img: '/images/covered-women.jpg',
  },
]

// ── Video Tab ────────────────────────────────────────────────────
function VideoTab() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const v = videos[active]

  function selectVideo(i) { setActive(i); setPlaying(false) }

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      {/* Player */}
      <div className="w-full lg:col-span-8">
        <div
          key={active}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary aspect-video"
          style={{ animation: 'fadeSlide 0.4s ease' }}
        >
          {playing ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                alt={v.title}
                className="w-full h-full object-cover"
                onError={e => { e.target.src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` }}
              />
              <div className="absolute inset-0 bg-primary/40" />
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #735c00, #ffe088)',
                    boxShadow: '0 0 30px rgba(255,224,136,0.5)',
                  }}
                >
                  <span className="material-symbols-outlined text-primary text-4xl" style={{ marginLeft: '4px' }}>
                    play_arrow
                  </span>
                </div>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6"
                style={{ background: 'linear-gradient(to top, rgba(0,17,58,0.9), transparent)' }}>
                <p className="text-secondary-fixed text-xs font-bold uppercase tracking-widest mb-1">{v.role}</p>
                <h4 className="text-white text-[16px] sm:text-[20px] font-bold">{v.title}</h4>
                <p className="text-white/60 text-sm">{v.name}</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Playlist — horizontal scroll on mobile, vertical sidebar on desktop */}
      <div className="w-full lg:col-span-4">
        <p className="text-xs font-bold text-outline uppercase tracking-widest mb-3">More Testimonies</p>

        {/* Mobile: swipeable horizontal row */}
        <div
          className="flex lg:hidden gap-3 overflow-x-auto pb-2"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {videos.map((vid, i) => (
            <button
              key={i}
              onClick={() => selectVideo(i)}
              className={`flex-shrink-0 rounded-xl overflow-hidden text-left transition-all active:scale-95 ${
                i === active ? 'ring-2 ring-secondary shadow-lg' : 'opacity-80'
              }`}
              style={{ minWidth: '150px', scrollSnapAlign: 'start' }}
            >
              <div className="relative w-full aspect-video bg-surface-container">
                <img
                  src={`https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`}
                  alt={vid.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 flex items-center justify-center ${i === active ? 'bg-primary/30' : 'bg-black/30'}`}>
                  <span className="material-symbols-outlined text-white text-[28px]">play_circle</span>
                </div>
              </div>
              <div className={`px-2 py-2 ${i === active ? 'bg-primary' : 'bg-surface-container'}`}>
                <p className={`text-[10px] font-bold uppercase tracking-wider truncate ${i === active ? 'text-secondary-fixed' : 'text-secondary'}`}>{vid.role}</p>
                <p className={`text-xs font-bold leading-snug line-clamp-2 ${i === active ? 'text-white' : 'text-on-surface'}`}>{vid.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Desktop: vertical list */}
        <div className="hidden lg:flex flex-col gap-3">
          {videos.map((vid, i) => (
            <button
              key={i}
              onClick={() => selectVideo(i)}
              className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                i === active
                  ? 'bg-primary text-on-primary shadow-lg'
                  : 'bg-surface hover:bg-surface-container border border-outline-variant/30'
              }`}
            >
              <div className="relative w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container">
                <img
                  src={`https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`}
                  alt={vid.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 flex items-center justify-center ${i === active ? 'bg-primary/30' : 'bg-black/20'}`}>
                  <span className="material-symbols-outlined text-white text-[18px]">play_circle</span>
                </div>
              </div>
              <div className="min-w-0">
                <p className={`text-xs font-bold truncate ${i === active ? 'text-secondary-fixed' : 'text-secondary'}`}>{vid.role}</p>
                <p className={`text-sm font-bold leading-tight truncate ${i === active ? 'text-white' : 'text-on-surface'}`}>{vid.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Stories Tab ──────────────────────────────────────────────────
function StoriesTab() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % stories.length), 6000)
    return () => clearInterval(id)
  }, [])

  const s = stories[active]

  return (
    <div>
      <div
        key={active}
        className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
        style={{ animation: 'fadeSlide 0.5s ease' }}
      >
        {/* Image */}
        <div className="md:col-span-4 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative">
            <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,17,58,0.55), transparent)' }} />
          </div>
          {/* Gold bracket accent */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-secondary rounded-br-2xl z-[-1]" />
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-secondary/40 rounded-tl-2xl z-[-1]" />
        </div>

        {/* Quote */}
        <div className="md:col-span-8">
          <div className="text-[72px] leading-none text-secondary opacity-25 font-serif mb-2 select-none">"</div>
          <p className="text-[20px] md:text-[22px] text-on-surface leading-relaxed font-light italic mb-8">
            {s.quote}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-[3px] bg-secondary" />
            <div>
              <p className="font-bold text-primary text-base">{s.name}</p>
              <p className="text-sm text-on-surface-variant">{s.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {stories.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === active ? '32px' : '10px',
              height: '10px',
              background: i === active ? '#735c00' : '#c5c6d2',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────
export default function TestimoniesSlider() {
  const [tab, setTab] = useState('video')
  const [ref, visible] = useScrollReveal()

  return (
    <section className="py-[120px] bg-surface-container-low overflow-hidden">
      <div
        ref={ref}
        className="max-w-[1280px] mx-auto px-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">Trophies of Faith</span>
          <h3 className="text-[40px] font-extrabold text-primary mt-2 leading-tight"
            style={{ letterSpacing: '-0.02em' }}>
            They Overcame
          </h3>
          <p className="text-on-surface-variant mt-3 max-w-xl mx-auto text-base">
            "And they overcame by the blood of the Lamb and the word of their testimony." — Rev 12:11
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl border border-outline-variant overflow-hidden shadow-sm">
            <button
              onClick={() => setTab('video')}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all ${
                tab === 'video'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">play_circle</span>
              Video Testimonies
            </button>
            <button
              onClick={() => setTab('stories')}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all border-l border-outline-variant ${
                tab === 'stories'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">auto_stories</span>
              Written Stories
            </button>
          </div>
        </div>

        {/* Tab content */}
        {tab === 'video' ? <VideoTab /> : <StoriesTab />}
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
