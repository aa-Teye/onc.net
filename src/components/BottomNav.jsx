import { NavLink } from 'react-router-dom'

const navItems = [
  { icon: 'home',               label: 'Home',    to: '/' },
  { icon: 'church',             label: 'About',   to: '/about' },
  { icon: 'live_tv',            label: 'Live',    to: '/live', live: true },
  { icon: 'volunteer_activism', label: 'Give',    to: '/give' },
  { icon: 'headphones',         label: 'Sermons', to: '/sermons' },
]

export default function BottomNav() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface border-t border-outline-variant/20"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-stretch h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className="flex flex-col items-center justify-center gap-0.5 flex-1 transition-colors"
          >
            {({ isActive }) => (
              <>
                <span className="relative flex items-center justify-center w-12 h-7">
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-200 ${
                      isActive ? 'bg-secondary/15 scale-100' : 'scale-0'
                    }`}
                  />
                  <span
                    className={`material-symbols-outlined relative z-10 transition-all duration-200 ${
                      isActive ? 'text-secondary text-[24px]' : 'text-on-surface-variant text-[22px]'
                    }`}
                    style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {item.icon}
                  </span>
                  {item.live && (
                    <span
                      className="absolute top-0 right-1 w-2 h-2 rounded-full bg-red-500 z-20"
                      style={{ animation: 'livePulse 1.5s ease-in-out infinite' }}
                    />
                  )}
                </span>
                <span
                  className={`text-[10px] transition-all duration-200 ${
                    isActive ? 'font-bold text-secondary' : 'font-medium text-on-surface-variant'
                  }`}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>

      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </nav>
  )
}
