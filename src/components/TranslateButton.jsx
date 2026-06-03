import { useState, useEffect, useRef } from 'react'

const languages = [
  { code: 'en',    label: 'English',    flag: '🇬🇧' },
  { code: 'fr',    label: 'Français',   flag: '🇫🇷' },
  { code: 'es',    label: 'Español',    flag: '🇪🇸' },
  { code: 'pt',    label: 'Português',  flag: '🇧🇷' },
  { code: 'de',    label: 'Deutsch',    flag: '🇩🇪' },
  { code: 'it',    label: 'Italiano',   flag: '🇮🇹' },
  { code: 'nl',    label: 'Nederlands', flag: '🇳🇱' },
  { code: 'ar',    label: 'العربية',    flag: '🇸🇦' },
  { code: 'zh-CN', label: '中文',       flag: '🇨🇳' },
  { code: 'sw',    label: 'Kiswahili',  flag: '🌍' },
]

// Set the Google Translate cookie and reload — most reliable method
function setCookieTranslate(langCode) {
  const host = window.location.hostname

  if (langCode === 'en') {
    // Clear cookie to restore original language
    const exp = 'expires=Thu, 01 Jan 1970 00:00:01 GMT'
    document.cookie = `googtrans=; path=/; ${exp}`
    document.cookie = `googtrans=; path=/; domain=${host}; ${exp}`
    document.cookie = `googtrans=; path=/; domain=.${host}; ${exp}`
  } else {
    const val = `/en/${langCode}`
    document.cookie = `googtrans=${val}; path=/`
    document.cookie = `googtrans=${val}; path=/; domain=.${host}`
  }
  window.location.reload()
}

// Try using the Google Translate combo select directly (no reload)
function tryComboSelect(langCode) {
  const combo = document.querySelector('.goog-te-combo')
  if (!combo) return false

  combo.value = langCode === 'en' ? '' : langCode
  combo.dispatchEvent(new Event('change'))
  return true
}

function translatePage(langCode) {
  localStorage.setItem('onc_lang', langCode)

  // Method 1: direct widget combo (instant, no reload)
  if (tryComboSelect(langCode)) return

  // Method 2: cookie + reload (100% reliable fallback)
  setCookieTranslate(langCode)
}

// ────────────────────────────────────────────────────────────────
export default function TranslateButton() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(() => localStorage.getItem('onc_lang') || 'en')
  const ref = useRef(null)

  // Wait for Google Translate widget to load, then sync it
  useEffect(() => {
    if (active === 'en') return

    let attempts = 0
    const interval = setInterval(() => {
      attempts++
      if (tryComboSelect(active)) {
        clearInterval(interval)
      } else if (attempts > 30) {
        clearInterval(interval)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function select(code) {
    setActive(code)
    setOpen(false)
    translatePage(code)
  }

  const current = languages.find(l => l.code === active) || languages[0]

  return (
    <div ref={ref} className="relative">
      {/* Globe button */}
      <button
        onClick={() => setOpen(o => !o)}
        title="Translate page"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-outline-variant/40 hover:border-secondary/70 bg-surface/80 backdrop-blur-sm transition-all group"
        style={{ boxShadow: open ? '0 0 0 2px rgba(115,92,0,0.35)' : 'none' }}
      >
        {/* Earth/globe icon */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" strokeWidth="1.8"
          className="text-secondary group-hover:text-on-surface transition-colors"
          stroke="currentColor">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
        <span className="text-xs font-bold text-on-surface uppercase tracking-wide hidden sm:inline">
          {current.flag} {current.code === 'zh-CN' ? 'ZH' : current.code.toUpperCase()}
        </span>
        <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-outline">
          <path d={open ? 'M7 14l5-5 5 5H7z' : 'M7 10l5 5 5-5H7z'}/>
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 top-full mt-2 z-[60] bg-surface border border-outline-variant rounded-xl shadow-2xl overflow-hidden"
          style={{ minWidth: '180px', animation: 'dropIn 0.15s ease' }}
        >
          <div className="px-3 py-2 border-b border-outline-variant/40 bg-surface-container-low">
            <p className="text-[10px] font-bold text-outline uppercase tracking-widest flex items-center gap-1">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10z"/>
              </svg>
              Translate entire page
            </p>
          </div>
          <div className="py-1 max-h-[320px] overflow-y-auto">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => select(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-surface-container transition-colors ${
                  lang.code === active
                    ? 'bg-secondary-container text-on-secondary-container font-bold'
                    : 'text-on-surface font-medium'
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
                {lang.code === active && (
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="ml-auto text-secondary">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
