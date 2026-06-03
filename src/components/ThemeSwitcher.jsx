import { useTheme } from '../hooks/useTheme'

const themes = [
  { id: 'navy',   color: '#00113a', label: 'Navy' },
  { id: 'purple', color: '#2d0060', label: 'Purple' },
]

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-full"
      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
      title="Switch theme"
    >
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          title={`${t.label} theme`}
          className="w-5 h-5 rounded-full transition-all duration-200 hover:scale-110"
          style={{
            background: t.color,
            boxShadow:
              theme === t.id
                ? `0 0 0 2px #ffe088`
                : '0 0 0 2px transparent',
          }}
        />
      ))}
    </div>
  )
}
