import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#00113a', borderTop: '4px solid #fed65b' }}>
      <div
        className="max-w-[1280px] mx-auto px-8 md:px-10"
        style={{ paddingTop: '64px', paddingBottom: '44px', borderBottom: '1px solid rgba(179,197,255,0.14)' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="ONC"
                style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover', background: '#fff' }}
              />
              <span style={{ color: '#fff', fontWeight: 900, fontSize: '14px', lineHeight: 1.2 }}>
                OVERCOMERS NATION<br />
                <span style={{ color: '#e9c349', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700 }}>CHURCH</span>
              </span>
            </div>
            <p style={{ color: '#9aa9d6', fontSize: '14.5px', lineHeight: 1.65, maxWidth: '280px' }}>
              Building a nation of winners through the uncompromised word of faith and love.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{ color: '#e9c349', fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'About',       to: '/about' },
                { label: 'Sermons',     to: '/sermons' },
                { label: 'Ministries',  to: '/ministries' },
                { label: 'Give',        to: '/give' },
                { label: 'Contact',     to: '/contact' },
              ].map(({ label, to }) => (
                <Link key={to} to={to} style={{ color: '#cdd6f4', fontSize: '14px' }}
                  className="hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h4 style={{ color: '#e9c349', fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Service Times
            </h4>
            <div className="flex flex-col gap-3" style={{ color: '#cdd6f4', fontSize: '14px', lineHeight: 1.5 }}>
              <span>Sunday — 8:00 AM</span>
              <span>Tuesday — 6:30 PM</span>
              <span>Friday (Youth) — 5:55 PM</span>
              <span style={{ color: '#9aa9d6' }}>Tesano, Accra, Ghana</span>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ color: '#e9c349', fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: '054 636 3957',    href: 'tel:0546363957' },
                { label: 'Facebook',         href: '#' },
                { label: 'YouTube',          href: 'https://youtube.com/@overcomersnationchurch2041' },
                { label: 'Telegram',         href: '#' },
                { label: 'Podbean',          href: '#' },
              ].map(({ label, href }) => (
                <a key={label} href={href} style={{ color: '#cdd6f4', fontSize: '14px' }}
                  className="hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <p className="text-center max-w-[1280px] mx-auto px-8 py-6"
        style={{ color: '#758dd5', fontSize: '13px' }}>
        © 2025 Overcomers Nation Church. All Rights Reserved.
      </p>
    </footer>
  )
}
