import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setThemeState] = useState(
    () => localStorage.getItem('oncTheme') || 'navy'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('oncTheme', theme)
  }, [theme])

  function setTheme(t) {
    setThemeState(t)
  }

  return { theme, setTheme }
}
