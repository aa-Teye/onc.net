import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import TranslateButton from './TranslateButton'

const navKeys = [
  { key: 'nav.home',        to: '/' },
  { key: 'nav.about',       to: '/about' },
  { key: 'nav.sermons',     to: '/sermons' },
  { key: 'nav.ministries',  to: '/ministries' },
  { key: 'nav.give',        to: '/give' },
  { key: 'nav.contact',     to: '/contact' },
]

export default function Navbar() {
  const { t } = useTranslation()
  return (
    <header className="fixed top-[4px] left-0 w-full h-16 px-4 flex justify-between items-center bg-surface/70 backdrop-blur-md z-50 border-b border-primary/20 shadow-sm">
      <NavLink to="/" className="flex items-center">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          padding: '3px',
          background: 'linear-gradient(135deg, #ffe088, #735c00, #ffe088)',
          backgroundSize: '200% 200%',
          animation: 'logoRing 3s linear infinite',
          boxShadow: '0 0 12px rgba(255,224,136,0.7), 0 0 28px rgba(255,224,136,0.35)',
          flexShrink: 0,
        }}>
          <img
            alt="Overcomers Nation Logo"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              background: '#fff',
            }}
            src="/images/logo.png"
          />
        </div>
        <style>{`
          @keyframes logoRing {
            0%   { background-position: 0% 50%;   box-shadow: 0 0 12px rgba(255,224,136,0.7), 0 0 28px rgba(255,224,136,0.35); }
            50%  { background-position: 100% 50%;  box-shadow: 0 0 20px rgba(255,224,136,1),   0 0 45px rgba(255,224,136,0.6); }
            100% { background-position: 0% 50%;   box-shadow: 0 0 12px rgba(255,224,136,0.7), 0 0 28px rgba(255,224,136,0.35); }
          }
        `}</style>
      </NavLink>

      <div className="hidden md:flex items-center gap-8 px-8">
        {navKeys.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `text-sm font-bold uppercase tracking-widest transition-colors ${
                isActive ? 'text-secondary' : 'text-on-surface hover:text-secondary'
              }`
            }
          >
            {t(link.key)}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <TranslateButton />
        <button className="bg-secondary text-on-secondary px-4 py-2 text-sm font-bold rounded-lg hover:bg-secondary/90 transition-all active:scale-95">
          {t('nav.planVisit')}
        </button>
      </div>
    </header>
  )
}
