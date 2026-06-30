const messages = [
  {
    title: 'The Concept of Dominion',
    date: 'Sun, Oct 24 · Senior Pastor',
    badge: 'New Release',
    src: '/images/youth-worship.jpg',
  },
  {
    title: 'The Pursuit of Love',
    date: 'Wed, Oct 20 · Faith Seminar',
    badge: null,
    src: '/images/covered-women.jpg',
  },
  {
    title: 'Katartizo — Speaking the Word',
    date: 'Sun, Oct 17 · Spiritual Warfare',
    badge: null,
    src: '/images/children-panel2.jpg',
  },
];

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full play-overlay flex items-center justify-center text-secondary border border-white/20 group-hover:bg-secondary group-hover:text-primary transition-all">
        <span className="material-symbols-outlined text-[32px]">play_arrow</span>
      </div>
    </div>
  );
}

export default function MediaSection() {
  return (
    <section className="py-[120px] bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Digital Sanctuary</span>
            <h3 className="text-[48px] font-extrabold mt-2 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Latest Messages
            </h3>
          </div>
          <button className="hidden md:block text-sm font-bold text-secondary border-b-2 border-secondary pb-1 hover:text-white hover:border-white transition-colors">
            View Sermon Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {messages.map((msg, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-surface-container mb-4">
                <img
                  alt={msg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={msg.src}
                />
                <PlayButton />
                {msg.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-primary px-3 py-1 text-[10px] font-bold uppercase rounded-full">
                      {msg.badge}
                    </span>
                  </div>
                )}
              </div>
              <h4 className="text-[20px] font-bold group-hover:text-secondary transition-colors">{msg.title}</h4>
              <p className="text-white/60 text-sm mt-1">{msg.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
