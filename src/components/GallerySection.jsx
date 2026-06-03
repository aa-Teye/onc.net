import { useState } from 'react'

// Replace each id with your actual YouTube video ID (the part after ?v= in the URL)
const ytVideos = [
  { id: 'YOUR_VIDEO_ID_1', title: 'Sunday Worship Service', date: 'May 2025' },
  { id: 'YOUR_VIDEO_ID_2', title: 'Youth Revival Night', date: 'Apr 2025' },
  { id: 'YOUR_VIDEO_ID_3', title: "Children's Ministry Day", date: 'Mar 2025' },
  { id: 'YOUR_VIDEO_ID_4', title: 'Women of Faith Conference', date: 'Feb 2025' },
  { id: 'YOUR_VIDEO_ID_5', title: 'Bible Study — Book of John', date: 'Jan 2025' },
  { id: 'YOUR_VIDEO_ID_6', title: 'New Year Prayer Night', date: 'Dec 2024' },
]

function YouTubeCard({ id, title, date }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg"
      style={{ border: '1px solid rgba(0,17,58,0.10)' }}
    >
      <div className="relative bg-gray-900" style={{ aspectRatio: '16/9' }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        ) : (
          <button
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center group"
            onClick={() => setPlaying(true)}
            style={{ background: 'linear-gradient(135deg, #0d1b3e 0%, #1a2d5a 100%)' }}
          >
            {/* ONC watermark top-left */}
            <span
              className="absolute top-3 left-4 text-[11px] font-black tracking-[0.2em] uppercase"
              style={{ color: 'rgba(255,224,136,0.25)' }}
            >
              ONC
            </span>
            {/* YouTube-style play button */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200"
              style={{ background: '#FF0000' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '4px' }}>
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <span className="mt-4 text-white/75 text-sm font-semibold text-center px-6 line-clamp-2 leading-snug">
              {title}
            </span>
            {/* Bottom-right YouTube label */}
            <span
              className="absolute bottom-3 right-4 text-[10px] font-bold uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              YouTube
            </span>
          </button>
        )}
      </div>
      {/* Card footer */}
      <div className="px-4 py-3 bg-white">
        <p className="text-sm font-bold leading-tight" style={{ color: '#00113a' }}>{title}</p>
        <p className="text-xs mt-1 text-gray-400">{date}</p>
      </div>
    </div>
  )
}

export default function GallerySection() {
  return (
    <section className="py-[120px] bg-background">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-secondary/30" />
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.2em]">Our Community</span>
          <div className="h-px flex-1 bg-secondary/30" />
        </div>
        <h3
          className="text-[48px] font-extrabold text-primary text-center leading-tight mb-12"
          style={{ letterSpacing: '-0.02em' }}
        >
          Life At ONC
        </h3>

        {/* YouTube video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ytVideos.map((video) => (
            <YouTubeCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </section>
  )
}
