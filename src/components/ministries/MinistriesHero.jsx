export default function MinistriesHero() {
  return (
    <section className="relative h-[530px] flex items-center justify-center overflow-hidden mb-[120px]">
      <div className="absolute inset-0 z-0">
        <img
          alt="Overcomers Nation Community"
          className="w-full h-full object-cover brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkQ_l4Ize_Evvj9mSTWRTaKuDWdbMyitL6UVCL7lqbbD2z75OGKioXLDX0P_t0Zk664PmjYQpjsPnxg-hwCCNO7ytxcB91h5yvuhqNTC22zz5tVpvdRkqFgHGQLgTgc3nBPBk_PaZfGF9Bhg0TPBuY3A1PgK_fIwTABDlqLBJKWVCpkGfq6I6TKkSh5vwoEtDcyz2RsKP78lhRdTD0OBRUQmi2GfB6EwcyNW5mL3S497i62LEsS7RVxVZhEX9sQu3QH2KEPD0xWaUR"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2
          className="text-[48px] md:text-[72px] font-black text-surface-container-lowest mb-4 leading-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          OUR MINISTRIES
        </h2>
        <p className="text-[18px] text-primary-fixed mb-8 leading-relaxed">
          Empowering every generation to overcome and lead through faith, community, and service.
        </p>
        <div className="w-24 h-1 bg-secondary-fixed mx-auto" />
      </div>
    </section>
  )
}
