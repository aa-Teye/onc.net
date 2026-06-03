const images = [
  { w: 'w-[300px]', h: 'h-[400px]', rotate: 'rotate-1',  src: '/images/children-day-1.jpg' },
  { w: 'w-[450px]', h: 'h-[350px]', rotate: '-rotate-2', src: '/images/covered-women.jpg' },
  { w: 'w-[350px]', h: 'h-[450px]', rotate: 'rotate-2',  src: '/images/children-singing.jpg' },
  { w: 'w-[500px]', h: 'h-[380px]', rotate: '-rotate-1', src: '/images/children-panel1.jpg' },
  { w: 'w-[320px]', h: 'h-[420px]', rotate: 'rotate-3',  src: '/images/youth-worship.jpg' },
  { w: 'w-[400px]', h: 'h-[480px]', rotate: '-rotate-3', src: '/images/youth-group.jpg' },
]

function GallerySet() {
  return (
    <div className="flex items-center gap-6">
      {images.map((img, i) => (
        <div
          key={i}
          className={`${img.w} ${img.h} flex-shrink-0 rounded-2xl overflow-hidden border-4 border-secondary/20 shadow-lg transform ${img.rotate}`}
        >
          <img alt="Community Gallery" className="w-full h-full object-cover" src={img.src} />
        </div>
      ))}
    </div>
  )
}

export default function GallerySection() {
  return (
    <section className="py-[120px] overflow-hidden bg-background">
      <div className="max-w-[1280px] mx-auto px-8 mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-secondary/30" />
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.2em]">Our Community</span>
          <div className="h-px flex-1 bg-secondary/30" />
        </div>
        <h3
          className="text-[48px] font-extrabold text-primary text-center leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Life At ONC
        </h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="scroll-container flex items-center gap-6 py-4">
          <GallerySet />
          <GallerySet />
        </div>
      </div>
    </section>
  )
}
