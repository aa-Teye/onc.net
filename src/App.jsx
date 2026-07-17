import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import Home from './pages/Home'
import Sermons from './pages/Sermons'
import Give from './pages/Give'
import Ministries from './pages/Ministries'
import Contact from './pages/Contact'
import About from './pages/About'
import Live from './pages/Live'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const { pathname } = useLocation()
  return (
    <div key={pathname} className="page-enter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/give" element={<Give />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
