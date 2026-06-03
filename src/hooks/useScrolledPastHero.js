import { useEffect, useState } from 'react'

export function useScrolledPastHero() {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const check = () => setPast(window.scrollY > window.innerHeight * 0.85)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  return past
}
