import { useState, useEffect } from 'react'
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
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-[4px] left-0 w-full h-16 px-4 flex justify-between items-center z-50 border-b transition-all duration-300"
        style={{
          background: scrolled ? '#f8f9fa' : 'rgba(248,249,250,0.75)',
          backdropFilter: 'blur(16px)',
          borderColor: scrolled ? 'rgba(0,17,58,0.15)' : 'rgba(0,17,58,0.1)',
          boxShadow: scrolled ? '0 2px 20px rgba(0,17,58,0.12)' : '0 1px 4px rgba(0,17,58,0.06)',
        }}
      >

        {/* Logo + Church name — always visible */}
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            padding: '3px',
            background: 'linear-gradient(135deg, #ffe088, #735c00, #ffe088)',
            backgroundSize: '200% 200%',
            animation: 'logoRing 3s linear infinite',
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
          <span className="text-[13px] sm:text-[15px] font-black text-primary uppercase tracking-tight leading-tight">
            Overcomers Nation<br />
            <span className="text-secondary text-[10px] sm:text-[11px] tracking-[0.15em] font-bold">Church</span>
          </span>
          <style>{`
            @keyframes logoRing {
              0%   { background-position: 0% 50%; }
              50%  { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </NavLink>

        {/* Desktop nav links */}
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

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <TranslateButton />
          <NavLink
            to="/live"
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all active:scale-95"
            style={{ background: 'rgba(255,0,0,0.12)', border: '1px solid rgba(255,0,0,0.25)', color: '#f87171' }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" style={{ animation: 'livePulse 1.5s ease-in-out infinite' }} />
            Watch Live
          </NavLink>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-primary transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-primary transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-primary transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        <style>{`
          @keyframes livePulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%       { opacity: 0.4; transform: scale(0.85); }
          }
        `}</style>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-[68px] left-0 w-full z-40 md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(0,17,58,0.97)', backdropFilter: 'blur(16px)' }}
      >
        <nav className="flex flex-col px-6 py-2">
          {navKeys.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-4 text-base font-bold uppercase tracking-widest border-b border-white/10 transition-colors ${
                  isActive ? 'text-secondary' : 'text-white hover:text-secondary'
                }`
              }
            >
              {t(link.key)}
            </NavLink>
          ))}

          <NavLink
            to="/live"
            onClick={() => setOpen(false)}
            className="mt-5 mb-4 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-lg active:scale-95 transition-all"
            style={{ background: 'rgba(255,0,0,0.15)', border: '1px solid rgba(255,0,0,0.3)', color: '#f87171' }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" style={{ animation: 'livePulse 1.5s ease-in-out infinite' }} />
            Watch Live
          </NavLink>
        </nav>
      </div>
    </>
  )
}
