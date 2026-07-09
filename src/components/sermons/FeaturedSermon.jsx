import { useState } from 'react'

const FEATURED_ID = 'dUuIJ3ifXdU'

export default function FeaturedSermon() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="relative w-full h-[707px] min-h-[600px] bg-primary flex items-end overflow-hidden">

      {/* Background — fades out when video plays */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-700"
        style={{ opacity: playing ? 0 : 1 }}
      >
        <img
          className="w-full h-full object-cover opacity-60"
          alt="ONC sermon stage"
          src={`https://img.youtube.com/vi/${FEATURED_ID}/maxresdefault.jpg`}
          onError={e => { e.target.src = `https://img.youtube.com/vi/${FEATURED_ID}/hqdefault.jpg` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/10" />
      </div>

      {/* Cinematic iframe overlay */}
      {playing && (
        <div className="absolute inset-0 z-30 bg-black animate-[fadeIn_0.4s_ease]">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${FEATURED_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Featured Sermon"
          />
          <button
            onClick={() => setPlaying(false)}
            aria-label="Close video"
            className="absolute top-4 right-4 z-40 w-10 h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
      )}

      {/* Content — fades when playing */}
      <div
        className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-8 pb-16 md:pb-[120px] flex flex-col items-start transition-opacity duration-500"
        style={{ opacity: playing ? 0 : 1, pointerEvents: playing ? 'none' : 'auto' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-sm font-bold">
            FEATURED MESSAGE
          </span>
          <span className="text-secondary-fixed text-sm font-bold">OVERCOMERS NATION CHURCH</span>
        </div>

        <h2
          className="text-[40px] md:text-[72px] font-black text-on-primary max-w-3xl mb-6 leading-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          The Priority of Love
        </h2>

        <p className="text-[16px] md:text-[18px] text-on-primary/80 max-w-2xl mb-8 leading-relaxed">
          Your Greatest Quest — a transformative message on walking in the highest commandment
          and experiencing God's love in every dimension of life.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setPlaying(true)}
            className="bg-secondary text-on-secondary px-8 py-4 rounded-lg text-sm font-bold flex items-center gap-2 active:scale-95 transition-all hover:bg-secondary/90 shadow-lg shadow-secondary/30"
          >
            <span className="material-symbols-outlined">play_circle</span> WATCH NOW
          </button>
          <a
            href="https://www.youtube.com/@overcomersnationchurch2041"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-on-primary/60 text-on-primary px-8 py-4 rounded-lg text-sm font-bold hover:bg-on-primary hover:text-primary transition-all"
          >
            VIEW CHANNEL
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </section>
  )
}
