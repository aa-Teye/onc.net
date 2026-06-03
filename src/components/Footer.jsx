const links = [
  { label: 'Service Times', href: '#' },
  { label: 'Contact: 054 636 3957', href: 'tel:0546363957' },
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="w-full px-8 flex flex-col items-center text-center bg-primary border-t-4 border-secondary">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1280px] py-12 gap-8">
        <div className="text-left">
          <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Overcomers Nation</h4>
          <p className="text-on-primary opacity-80 max-w-xs text-base leading-relaxed">
            Building a nation of winners through the uncompromised word of faith.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {links.map((link, i) => (
            <a
              key={i}
              className="text-base text-on-primary-container hover:text-secondary-fixed-dim transition-opacity opacity-90 hover:opacity-100"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1280px] border-t border-on-primary/10 pt-8 pb-4">
        <p className="text-base text-on-primary-container">
          © 2024 Overcomers Nation Church. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
