import { useState } from 'react'

const sermons = [
  {
    id: 'dUuIJ3ifXdU',
    title: 'The Priority of Love – Your Greatest Quest',
    speaker: 'Overcomers Nation Church',
    badge: 'Latest',
    badgeClass: 'bg-secondary text-on-primary',
  },
  {
    id: 'uHeNqbxzUYM',
    title: 'Understanding Your Worth in Christ',
    speaker: 'Rev Dr Ebenezer Okronipa',
    badge: null,
    badgeClass: '',
  },
  {
    id: 'Azb7wu-opAk',
    title: 'What God Builds, Hell Attacks',
    speaker: 'Overcomers Nation Church',
    badge: null,
    badgeClass: '',
  },
]

function SermonCard({ s }) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://img.youtube.com/vi/${s.id}/hqdefault.jpg`

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-xl mb-4" onClick={() => setPlaying(true)}>
        {playing ? (
          <>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${s.id}?autoplay=1&rel=0&modestbranding=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
              title={s.title}
            />
            <button
              onClick={e => { e.stopPropagation(); setPlaying(false) }}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </>
        ) : (
          <>
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt={s.title}
              src={thumb}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-secondary/90 rounded-full flex items-center justify-center shadow-xl">
                <span className="material-symbols-outlined text-on-primary text-[32px] ml-1">play_arrow</span>
              </div>
            </div>
          </>
        )}
      </div>

      {!playing && (
        <div className="flex flex-col gap-2">
          {s.badge && (
            <span className={`${s.badgeClass} px-2 py-0.5 rounded text-[10px] font-bold uppercase w-fit`}>
              {s.badge}
            </span>
          )}
          <h4
            className="text-[26px] md:text-[30px] font-bold group-hover:text-secondary transition-colors leading-tight"
            onClick={() => setPlaying(true)}
          >
            {s.title}
          </h4>
          <div className="flex items-center gap-3 text-outline text-xs font-bold uppercase">
            <span>{s.speaker}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SermonGrid() {
  return (
    <section className="w-full py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex justify-between items-end mb-10 gap-4 flex-wrap">
          <div>
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Recent Archives</span>
            <h3
              className="text-[36px] md:text-[48px] font-extrabold text-primary leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Latest Messages
            </h3>
          </div>
          <a
            href="https://www.youtube.com/@overcomersnationchurch2041"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-bold flex items-center gap-1 hover:text-secondary transition-colors"
          >
            VIEW ALL ON YOUTUBE <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {sermons.map((s, i) => (
            <SermonCard key={i} s={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
