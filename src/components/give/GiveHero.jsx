export default function GiveHero() {
  return (
    <section className="relative w-full h-[530px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-primary/40 z-10" />
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Grand cathedral interior with warm golden light"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0MSKSQgNioOv6_abzp-uQShNXKxuuAuFAh3kd9pthhJKdwsa7nzUHhjO3a72RIlEy6rysuCXVACWt1BcE5BHtW15z0-s9Lvx7XvFRqo6ilCx1eGzCDJtF_bS95CpeeKXRrwpmiwP4-BUWqrspivQRLZJvrdwc2tvBiO7EfeZ1fUZfwH9XKIiHf3ddAiNzY8ayxn1NnJXGbb2lwJ6YaSW-TP2fjBTILUSJ0f354hoFM2hDDbufKDgSVYezqCv2joGXR9wLXu5QqgQu"
      />
      <div className="relative z-20 text-center px-8 max-w-4xl">
        <span className="text-sm font-bold text-secondary-fixed uppercase tracking-[0.2em] mb-4 block">
          Faithful Stewardship
        </span>
        <h2 className="text-[48px] md:text-[72px] font-black text-on-primary mb-6 leading-tight" style={{ letterSpacing: '-0.04em' }}>
          Honoring God Through Giving
        </h2>
        <p className="text-[18px] text-primary-fixed max-w-2xl mx-auto leading-relaxed">
          Your generosity enables us to reach nations, restore lives, and build a legacy of faith that transcends generations.
        </p>
      </div>
    </section>
  )
}
