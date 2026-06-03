const logos = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAA5raLdUsz3R5mTbQdD7WC60_86E_sGd2p-hFOw4EL1uxtlXHgfbNVjOfuy9UmLNxZS4vQ-epWdD32QhZL3nEjkK_buW7-B0CdOtsIIbu4AnnVncUHUNrSpFcOZxGTlxTKSYXZPcvEUGxeP9LwINDl_x-hQ2aGyiI46n_U1uIJqo1b9Lc_QJ7VY4hWwUgUAzz5AxEH-tTeiLYwPinCCLJeZLWChe2dnClkbEAT4GhdLtniPUK168nxc9ef6hVohkOtKNDne7UOR6v7',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB3altzRYnLEwOjTPeXFeBCd7f8HBbDQ3B54liMNvi7OVIalP5zD41tcNjIjhufVLX9GK49IHyazWWM5o9COENEPZoCJKtDNvjBHulV4CrGUWCw30yBEEVXMDrj-UqcXB5CJAnM_xdENJRJ1vd7wd-AnzjhbVT42vR3mAlxQYDopf41Cvo0Ah7T0smbLH9k3I6EaYlZzZJfU0cMzdsTZXwUsXwaZ4ONvtp2w005uIopcRFDeqKZ8TAOuh4D7VUJ6fYgDtddPbkS-Ea5',
]

export default function TrustBanner() {
  return (
    <section className="py-24 bg-surface">
      <div className="px-8 max-w-[1280px] mx-auto text-center">
        <div className="flex flex-col items-center gap-6">
          <span className="material-symbols-outlined text-secondary text-5xl">verified_user</span>
          <h3 className="text-[32px] font-bold text-primary leading-tight">Your Security is Our Priority</h3>
          <p className="text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            All transactions are encrypted and processed through industry-leading financial gateways. We adhere
            to the highest standards of financial accountability and transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            {logos.map((src, i) => (
              <img key={i} className="h-12 w-auto object-contain" alt="Security partner logo" src={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
