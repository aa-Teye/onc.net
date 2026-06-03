import { NavLink } from 'react-router-dom'

const navItems = [
  { icon: 'home',               label: 'Home',    to: '/' },
  { icon: 'church',             label: 'About',   to: '/about' },
  { icon: 'play_circle',        label: 'Live',    to: '/live', live: true },
  { icon: 'volunteer_activism', label: 'Give',    to: '/give' },
  { icon: 'potted_plant',       label: 'Sermons', to: '/sermons' },
]

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md h-16 flex items-center justify-around z-50 border-t border-outline-variant/10">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 transition-colors ${
              isActive ? 'text-secondary' : 'text-on-surface-variant'
            }`
          }
        >
          <span className="relative">
            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            {item.live && (
              <span
                className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500"
                style={{ animation: 'livePulse 1.5s ease-in-out infinite' }}
              />
            )}
          </span>
          <span className="text-[10px] font-bold">{item.label}</span>
        </NavLink>
      ))}

      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </nav>
  )
}
