const platforms = [
  {
    name: 'YouTube',
    tagline: 'Watch & Stream',
    description: 'Full Sunday services, message replays, and our complete video archive. Subscribe so you never miss a service.',
    href: 'https://youtube.com/@overcomersnationchurch2041',
    color: '#FF0000',
    bg: 'rgba(255,0,0,0.07)',
    cta: 'Watch Messages',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    tagline: 'Live & Replay',
    description: 'Catch us live every Sunday, join community discussions, and watch service replays anytime.',
    href: 'https://facebook.com/overcomersnation',
    color: '#1877F2',
    bg: 'rgba(24,119,242,0.07)',
    cta: 'Watch on Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Telegram',
    tagline: 'Audio & Alerts',
    description: 'Get instant message notifications, audio recordings, and exclusive devotionals straight to your phone.',
    href: 'https://t.me/overcomersnation',
    color: '#2AABEE',
    bg: 'rgba(42,171,238,0.07)',
    cta: 'Join Channel',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    name: 'Podbean',
    tagline: 'Podcast',
    description: 'Listen to all messages as a podcast — on any device, any podcast app, anytime you want.',
    href: 'https://overcomersnation.podbean.com',
    color: '#f06030',
    bg: 'rgba(240,96,48,0.07)',
    cta: 'Listen Now',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M12 3c-1.66 0-3 1.34-3 3v4c0 1.66 1.34 3 3 3s3-1.34 3-3V6c0-1.66-1.34-3-3-3zm0 14.5c-3.31 0-6-2.69-6-6H4c0 3.97 2.94 7.23 6.75 7.78V22h2.5v-2.72C17.06 18.73 20 15.47 20 11.5h-2c0 3.31-2.69 6-6 6z"/>
      </svg>
    ),
  },
]

export default function PlatformSection() {
  return (
    <section className="w-full py-[120px] bg-background">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-secondary/40" />
            <span className="text-secondary text-sm font-bold uppercase tracking-[0.2em]">Sermons & Messages</span>
            <div className="h-px w-16 bg-secondary/40" />
          </div>
          <h3
            className="text-[48px] font-extrabold text-primary leading-tight mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Catch Every Message
          </h3>
          <p className="text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            All our sermons, teachings, and messages are available across your favourite platforms. Choose where you listen or watch.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: '#fff',
                border: '1px solid rgba(0,17,58,0.08)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              }}
            >
              {/* Colored top bar */}
              <div className="h-1 w-full flex-shrink-0" style={{ background: p.color }} />

              <div className="flex flex-col flex-1 p-7">
                {/* Icon blob */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: p.bg, color: p.color }}
                >
                  {p.icon}
                </div>

                {/* Platform name */}
                <h4 className="text-[22px] font-extrabold text-primary mb-1 leading-tight">
                  {p.name}
                </h4>

                {/* Tagline */}
                <span
                  className="text-[11px] font-black uppercase tracking-[0.18em] mb-4"
                  style={{ color: p.color }}
                >
                  {p.tagline}
                </span>

                {/* Description */}
                <p className="text-sm text-on-surface-variant leading-relaxed flex-1 mb-6">
                  {p.description}
                </p>

                {/* CTA */}
                <div
                  className="flex items-center gap-2 text-sm font-bold transition-gap duration-200"
                  style={{ color: p.color }}
                >
                  <span>{p.cta}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-on-surface-variant mt-10 opacity-60">
          New messages added after every service — subscribe on your preferred platform to stay updated.
        </p>
      </div>
    </section>
  )
}
