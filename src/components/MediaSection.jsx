import { useState } from 'react'
import { Link } from 'react-router-dom'

const messages = [
  {
    id: 'dUuIJ3ifXdU',
    title: 'The Priority of Love – Your Greatest Quest',
    speaker: 'Overcomers Nation Church',
    badge: 'Latest',
  },
  {
    id: 'uHeNqbxzUYM',
    title: 'Understanding Your Worth in Christ',
    speaker: 'Rev Dr Ebenezer Okronipa',
    badge: null,
  },
  {
    id: 'ccaQMT3EDx4',
    title: 'The Power in the Name of Jesus',
    speaker: 'Rev Dr Ebenezer Okronipa',
    badge: null,
  },
]

export default function MediaSection() {
  const [playing, setPlaying] = useState(null)

  return (
    <section className="py-[120px] bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Digital Sanctuary</span>
            <h3
              className="text-[40px] md:text-[48px] font-extrabold mt-2 leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Latest Messages
            </h3>
          </div>
          <Link
            to="/sermons"
            className="hidden md:block text-sm font-bold text-secondary border-b-2 border-secondary pb-1 hover:text-white hover:border-white transition-colors"
          >
            View Sermon Archive
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {messages.map((msg, i) => (
            <div
              key={i}
              className="group cursor-pointer"
              onClick={() => setPlaying(playing === i ? null : i)}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-black mb-4">
                {playing === i ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${msg.id}?autoplay=1&rel=0`}
                    title={msg.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      alt={msg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={`https://img.youtube.com/vi/${msg.id}/maxresdefault.jpg`}
                      onError={e => { e.target.src = `https://img.youtube.com/vi/${msg.id}/hqdefault.jpg` }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95"
                        style={{
                          background: 'linear-gradient(135deg, #735c00, #ffe088)',
                          boxShadow: '0 0 24px rgba(255,224,136,0.45)',
                        }}
                      >
                        <span
                          className="material-symbols-outlined text-primary text-3xl"
                          style={{ marginLeft: '3px' }}
                        >
                          play_arrow
                        </span>
                      </div>
                    </div>
                    {msg.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-primary px-3 py-1 text-[10px] font-bold uppercase rounded-full">
                          {msg.badge}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>
              <h4 className="text-[18px] font-bold leading-snug group-hover:text-secondary transition-colors">
                {msg.title}
              </h4>
              <p className="text-white/60 text-sm mt-1">{msg.speaker}</p>
            </div>
          ))}
        </div>

        {/* Mobile — view all link */}
        <div className="flex justify-center mt-10 md:hidden">
          <Link
            to="/sermons"
            className="text-sm font-bold text-secondary border-b-2 border-secondary pb-1"
          >
            View Sermon Archive
          </Link>
        </div>
      </div>
    </section>
  )
}
