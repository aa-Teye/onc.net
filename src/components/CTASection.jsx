import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section style={{ background: '#fed65b', padding: '80px 40px' }}>
      <div
        className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div>
          <h2
            className="font-black"
            style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', color: '#00113a', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '10px' }}
          >
            Join Us This Sunday
          </h2>
          <p style={{ fontSize: '17px', color: '#5c4d12', maxWidth: '500px' }}>
            Experience the presence of God with a community that loves and builds you.
          </p>
        </div>
        <Link
          to="/give"
          className="inline-flex items-center gap-2 font-extrabold rounded-xl whitespace-nowrap transition-all active:scale-95 hover:opacity-90"
          style={{ background: '#00113a', color: '#fff', fontSize: '15px', padding: '18px 34px' }}
        >
          Give / Support
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>favorite</span>
        </Link>
      </div>
    </section>
  )
}
