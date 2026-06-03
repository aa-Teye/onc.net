const sermons = [
  {
    title: 'Walking in Divine Dominion',
    date: 'Oct 27, 2024',
    speaker: 'Apostle John Doe',
    duration: '54:20',
    badge: 'Series: Foundations',
    badgeClass: 'bg-primary-container text-on-primary-container',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8iP67Og1DZQS_nNzNRKrQlfE7L7_L02Ot0t142DiwySuYWCSuc6cPheMEBXK6TjHdaItc4Tg7HVzCrc9xAScV9PupNI8cjOIcCVXZZSWIOP4okIewgTxU4_fSuMyBPVAG67Q3K7uhU1AKCgTH1ylMvwDDjX-0fsvR8ZctgJ9m4Nah_bkhRLonuAND-KhMoZDqHwiwksuc1bqSGg6wzpclPz3L6ms1nPNq4fyZ2X3pRBKcgkhd5jTPqTAAM9FzMS1jSk_uWEqwGA6S',
  },
  {
    title: 'The Sound of Victory',
    date: 'Oct 20, 2024',
    speaker: 'Pastor Jane Smith',
    duration: '42:15',
    badge: 'New Release',
    badgeClass: 'bg-tertiary-container text-on-tertiary-container',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIn5LfzKA-0-Issb7Rm-zie_UcmoXZbae5-EWBvUGhJjzCE6Ql2YKvCLAexh03eYnBLP35cowZ7Q7dv36zYQaqToWoC_46rJH586tDyN6O5OfrH3VKwGK8fI3HNqs5SMZZsJa1X5dy1hz0Dmj9J9ygU1Bwb7EUgiteM1Ad-f6oD3JiwDk7JPd3xoi7IBM_KS82DRScg_sZ6NHv1wJU8iTjVs_xpIapoWHJqDQbjyCh9A66bkSKo3YZrvipH0OIFMfE_N9ohLBSw0AK',
  },
  {
    title: 'Established in Righteousness',
    date: 'Oct 13, 2024',
    speaker: 'Apostle John Doe',
    duration: '1:12:05',
    badge: 'Series: Governance',
    badgeClass: 'bg-primary-container text-on-primary-container',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3DBaSYGCBHZtgM5EbgtzjstiRaIj3HUrDc59lcjdpi8633TCHTkArJFW-6F9LiblxlONqh6KCFDVheBeDpa1PzX2wvGMW_GBHBnMRkBNOmrf2S5a_j1J5r4HLeXSYZYXyFjni9ZfwxM1_U2EiN-wCK4Hv2iC4oTXpjWNc9ZzrEsglek3f0czhzv_3vCXMVN4F9pHQr-x672BfNxSkam3OQ0fyTZ0jk5Ze2Z1Ex1HKzFqTiJpyad-4CHgcf2aD-D02n_hajZL4R31j',
  },
]

function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
        <span className="material-symbols-outlined text-secondary text-4xl">play_arrow</span>
      </div>
    </div>
  )
}

export default function SermonGrid() {
  return (
    <section className="w-full py-[120px]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Recent Archives</span>
            <h3 className="text-[48px] font-extrabold text-primary leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Latest Messages
            </h3>
          </div>
          <a className="text-primary text-sm font-bold flex items-center gap-1 hover:text-secondary transition-colors" href="#">
            VIEW ALL ARCHIVES <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[120px]">
          {sermons.map((s, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={s.title}
                  src={s.src}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <PlayOverlay />
                <span className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 text-xs rounded font-bold">
                  {s.duration}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <span className={`${s.badgeClass} px-2 py-0.5 rounded text-[10px] font-bold uppercase`}>
                    {s.badge}
                  </span>
                </div>
                <h4 className="text-[32px] font-bold group-hover:text-secondary transition-colors leading-tight">
                  {s.title}
                </h4>
                <div className="flex items-center gap-4 text-outline text-xs font-bold uppercase">
                  <span>{s.date}</span>
                  <span>•</span>
                  <span>{s.speaker}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
