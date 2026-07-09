import { useState } from 'react'

const series = [
  {
    id: 'dUuIJ3ifXdU',
    span: 'col-span-1 md:col-span-2 md:row-span-2',
    label: 'LATEST MESSAGE',
    title: 'The Priority of Love',
    subtitle: 'Your Greatest Quest',
    titleSize: 'text-[32px] md:text-[42px] font-extrabold',
  },
  {
    id: 'uHeNqbxzUYM',
    span: 'col-span-1 md:col-span-2 md:row-span-1',
    label: null,
    title: 'Understanding Your Worth in Christ',
    subtitle: 'Rev Dr Ebenezer Okronipa',
    titleSize: 'text-[20px] font-bold',
    subtitleGold: true,
  },
  {
    id: 'Azb7wu-opAk',
    span: 'col-span-1 md:col-span-1 md:row-span-1',
    label: null,
    title: 'What God Builds, Hell Attacks',
    subtitle: null,
    titleSize: 'text-sm font-bold',
  },
]

function BentoCard({ item }) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`
  const embedSrc = `https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0&modestbranding=1`

  return (
    <div
      className={`${item.span} relative group overflow-hidden rounded-xl cursor-pointer`}
      style={{ minHeight: '200px' }}
    >
      {playing ? (
        <>
          <iframe
            className="w-full h-full absolute inset-0"
            src={embedSrc}
            allow="autoplay; fullscreen"
            allowFullScreen
            title={item.title}
          />
          <button
            onClick={e => { e.stopPropagation(); setPlaying(false) }}
            className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </>
      ) : (
        <>
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={item.title}
            src={thumb}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

          {/* Play button on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setPlaying(true)}
              className="w-16 h-16 bg-secondary/90 hover:bg-secondary rounded-full flex items-center justify-center shadow-2xl transition-all scale-90 group-hover:scale-100"
            >
              <span className="material-symbols-outlined text-on-primary text-[32px] ml-1">play_arrow</span>
            </button>
          </div>

          <div className="absolute bottom-0 left-0 p-5 md:p-7 pointer-events-none">
            {item.label && (
              <span className="text-secondary text-xs font-black uppercase tracking-widest block mb-2">
                {item.label}
              </span>
            )}
            <h4 className={`${item.titleSize} text-white leading-tight`} style={{ letterSpacing: '-0.01em' }}>
              {item.title}
            </h4>
            {item.subtitle && (
              <p className={`mt-1.5 text-sm ${item.subtitleGold ? 'text-secondary font-bold' : 'text-white/70'}`}>
                {item.subtitle}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default function SeriesBento() {
  return (
    <section className="w-full py-[120px] bg-primary text-on-primary">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="mb-10 text-center">
          <span className="text-secondary text-sm font-bold uppercase tracking-widest">Digital Archive</span>
          <h3 className="text-[40px] md:text-[48px] font-extrabold leading-tight mt-1" style={{ letterSpacing: '-0.02em' }}>
            Recent Messages
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[580px]">
          {series.map((s, i) => (
            <BentoCard key={i} item={s} />
          ))}

          {/* See All CTA card */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 relative rounded-xl overflow-hidden flex flex-col items-center justify-center gap-4 border border-white/10 hover:border-secondary/50 transition-colors cursor-pointer group min-h-[160px]"
            style={{ background: 'rgba(255,255,255,0.04)' }}
            onClick={() => window.open('https://www.youtube.com/@overcomersnationchurch2041', '_blank', 'noopener')}
          >
            <span className="material-symbols-outlined text-secondary text-[40px] group-hover:scale-110 transition-transform">
              video_library
            </span>
            <div className="text-center px-4">
              <p className="text-white font-bold text-sm leading-tight">More Messages</p>
              <p className="text-secondary text-xs mt-1">View full archive on YouTube</p>
            </div>
            <span className="material-symbols-outlined text-secondary/60 text-[18px]">arrow_forward</span>
          </div>
        </div>
      </div>
    </section>
  )
}
