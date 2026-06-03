const supporting = [
  {
    name: 'Pastor Elena Mensah',
    role: 'Executive Pastor',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsndHvomc5JNNfck-uaEZYFzzoTvu7XlfFGi1Nkswl-k8CVXpeLM_Nvd7Tn9RLS6MtKMQrCBOoPBjSR_YBtNkqhoEi1cE__ij-MNMPOTvdy6Z89YyZJLCsSU9Bnzv-tPaYzVkPwA5xEWeiwYf4XHUwlSOw9rzdpChXcBzYPpg-095sj8f5zCOEH-I6s56sUZq9nbX5gQxHkkeKCkHUC0h3twJBzHoKj7JBFQkCgWyyM-J15w9e_aTKVgiMT56oHNN2izbTTGoQS9p1',
  },
  {
    name: 'Min. David Asante',
    role: 'Youth & Impact Director',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoTOISikDrm1-XQhokzzGtNuHdGybac-AtWOiGfmX8MaVbN_7UTerP6LltKJrqZ1u9Ky-s71xH6r-YfHXAPicJtkGASc76XEiYtkM3t2swNkszYEE7BL8ADcd1ocalAvQwKs5QtAZh6MnDWUYslxiPM37VMR4QE4L5iVGcBP7OIK5gg3vb9Z703lLkG6iPdC-AwE39s_u-7Cv393xusFkQC9B6JvMp4OPeryK3bs71ZZuHMsOlWGyYuj5E2bTMb8ISBbA7xelOGXYL',
  },
  {
    name: 'Deaconess Ruth Boakye',
    role: 'Operations & Finance',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvm1BFqhPxYgnKcolOL5WC59Jyz7Gr-8O_rizd9cVy5-3dVs0bQ19GpPFoQHrdUMNTkDeBHERSqmfEgW7W6vengSx1RUjMkjb7KXpIuf-9CXdP6dAgfjqTUxKrYAJXtPwAQ1S7m348V___-Qijog43zqmLlDpI_BTGm5OxAHnTRayZCFlR9EfoGxWrQq-ig4L9HAwvCaM_F-5MyU83i5pFCu4hXa6_DvQPZSxIiwQI2R89F03hcKFykf2IwDV3V-RXk0Esrw0JBVvK',
  },
  {
    name: 'Rev. Isaac Tetteh',
    role: 'Ministries Coordinator',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ARAI8iPZavY9TBLwdzaOn21QqAHIFlNVe06JH_l8OLaZkBaXLuYL7HkYyweLv5TZh0IKEEBhR5c-f1JUE1ObDxNCctXxtG63wNtUYmD_DHGw2VTd-3zk',
  },
]

export default function LeadershipTeam() {
  return (
    <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
      {/* Senior Pastor */}
      <div className="flex flex-col md:flex-row gap-[120px] items-center mb-[120px]">
        <div className="flex-1 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-secondary-container z-0" />
          <img
            className="relative z-10 w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
            alt="Dr. Okronipa - Senior Pastor"
            src="/images/pastor.jpg"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-primary z-0" />
        </div>

        <div className="flex-1">
          <span className="text-sm font-bold text-secondary mb-2 block">SENIOR PASTOR</span>
          <h2
            className="text-[48px] font-extrabold text-primary mb-8 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            DR. OKRONIPA
          </h2>
          <p className="text-[18px] text-on-surface-variant mb-8 italic leading-relaxed">
            "Leadership is not about position, it's about the sovereign responsibility to unlock the overcomer
            within every soul."
          </p>
          <div className="space-y-2 text-on-surface-variant">
            <p className="text-base leading-relaxed">
              Dr. Ebenezer Okronipa is the visionary founder of Overcomers Nation. With over 8 years of ministry
              experience, he has dedicated his life to bridging the gap between spiritual authority and Kingdom excellence.
            </p>
            <p className="text-base leading-relaxed">
              Under his leadership, Overcomers Nation has grown from a local assembly into a global movement reaching
              millions through YouTube, Facebook, Telegram and Podbean. He is a sought-after voice on spiritual
              leadership, dominion and Kingdom-driven socio-economic transformation.
            </p>
          </div>
          <div className="mt-8">
            <button className="bg-secondary-container text-on-secondary-container px-8 py-3 text-sm font-bold hover:bg-secondary-fixed transition-colors">
              READ FULL BIO
            </button>
          </div>
        </div>
      </div>

      {/* Supporting Leadership */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {supporting.map((person, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[3/4] mb-2 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={person.name}
                src={person.src}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h5 className="text-sm font-bold text-primary">{person.name}</h5>
            <p className="text-on-surface-variant text-sm">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
