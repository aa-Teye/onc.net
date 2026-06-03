import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Sermons from './pages/Sermons'
import Give from './pages/Give'
import Ministries from './pages/Ministries'
import Contact from './pages/Contact'
import About from './pages/About'
import Live from './pages/Live'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/give" element={<Give />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </BrowserRouter>
  )
}
