import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'English',    flag: '🇬🇧' },
  { code: 'fr', label: 'Français',   flag: '🇫🇷' },
  { code: 'es', label: 'Español',    flag: '🇪🇸' },
  { code: 'pt', label: 'Português',  flag: '🇧🇷' },
  { code: 'de', label: 'Deutsch',    flag: '🇩🇪' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const current = languages.find(l => l.code === i18n.language) || languages[0]

  function select(code) {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant/40 hover:border-secondary/60 transition-colors text-sm font-bold text-on-surface bg-surface/80 backdrop-blur-sm"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
        <span className="material-symbols-outlined text-[16px] text-outline">
          {open ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[55]" onClick={() => setOpen(false)} />
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 z-[60] bg-surface border border-outline-variant rounded-xl shadow-2xl overflow-hidden min-w-[160px]"
            style={{ animation: 'dropIn 0.15s ease' }}>
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => select(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold hover:bg-surface-container transition-colors ${
                  lang.code === current.code
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'text-on-surface'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
                {lang.code === current.code && (
                  <span className="material-symbols-outlined text-[16px] ml-auto">check</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
