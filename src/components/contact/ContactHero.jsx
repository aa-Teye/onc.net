export default function ContactHero() {
  return (
    <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden mb-[120px]">
      <div className="absolute inset-0 bg-primary/40 z-10" />
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Grand cathedral interior with warm cinematic lighting"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4co8sSOB3N4KOYavOZNcY86XCCIAy3fILgYJbRO0likLpuwuJJ905Lp5WDyZP998noJuMVuQQl9yzNStmZMXF3tWkg4e2358J_WJowlfsAKrSYZSLz4DJ9DYisqInWUETi8KryT_iKwaXkk2GaKObKJWC_GrfZ3L_lc5wb2wcj9gDQ4MfKYMhjQoO1HwArYQ1F40bpVoncw0qoFyRg_xinShuhwGhxd9Mjr8pJ5AZX22ts32iPMlP55fHUOUMo2sz7PHnUVNmWj1h"
      />
      <div className="relative z-20 text-center px-8">
        <h2
          className="text-[48px] md:text-[72px] font-black text-surface-container-lowest mb-2 leading-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          Contact Us
        </h2>
        <p className="text-[32px] font-bold text-secondary-fixed max-w-2xl mx-auto leading-tight">
          We are here to walk with you on your journey.
        </p>
      </div>
    </section>
  )
}
