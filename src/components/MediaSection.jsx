const messages = [
  {
    title: 'THE CONCEPT OF DOMINION SERIES',
    date: 'Sun, Oct 24 • Senior Pastor',
    badge: 'New Release',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuX3RFmdpPqu6876aW4DzMQZyR6kamue7-NOJ_WM5ZFdli9OPhGJNcqxS-Vz-wRQvhnWDYJZFCuDGpdj66nTUehyvbvhrGmJ2eZ30OmFphS-DLxg2hwQcC2vkx0qRYTCFCg41zMOh8IiETP1-k5psY3BajvN1nVycEkj3ddaizJjPGVyjLZj5PQJggHGLKGWmzEAfihsVkds6FIyhPRcOXlyJYGmdh2n9ZTuk74d3sneoRFicq9RaLvuW1fMxWAtML-tgp0G959wWH',
  },
  {
    title: 'THE PURSUIT OF LOVE',
    date: 'Wed, Oct 20 • Faith Seminar',
    badge: null,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1z7RnDsVOhoY2b2SjRwZswTXRJuUomWQWVFChFbn-GSZQVHolfsblKfDnvUUQH8deN4tKZeU7mWtdvHJPEyGyIQhP3LsE0O8NeFviDChgcRDi6k8c8z94LtF-Bni3iaauZL15Pn8pvZ3r0_wdnS-4-sp6iAOsFcdnB3HluvqPhMShWoJH9A1Xpv1rq_jMmAC3sRHKFoKZxQtfxmEpqyCtOW7veN2jFP7EabTROenFuMrg-n6YlmTj52LuXliPUx8Q2DEh6fG6GzE9',
  },
  {
    title: 'KATARTIZO SPEAKING THE WORD',
    date: 'Sun, Oct 17 • Spiritual Warfare',
    badge: null,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMFhcaDvG6SdozxtFissvfdeLtLqovnhk4Uw6tzMKZsQxSSZpYv_4yXZRcN4IDXEL7vjS_ue-cRugAHpSGlq_9CfkKrQUwajqaI0dnRrJfmKZ65TxBAfqfkhrIEahOsHrcueJZX9N6dGPNvhc7Yxq2tiGiMfFOa4Xuxgb0rMJ9BpC8PebcNnWhrL9d-4A6E6LNDPDBUdoBuGBsNoNyA2_nz7HH1qLyWFWO96bAHsbdHUJ_8FyuzK8F_ppDQf5oOS7Hv2So6VkSwG5X',
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
