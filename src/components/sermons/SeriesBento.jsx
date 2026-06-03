const series = [
  {
    span: 'md:col-span-2 md:row-span-2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPCCcRiEGVApMxIrx5qFaMvhOsWczbjHpe2oJ7I6fPsVRVvoHPmLVtmuVWHPQ3ejwCHtzptZh4qzioQUDGz9HZT2So-n3Ya37RsO0lSlqXRlWRtM4W8Z1c2P-AUsLPIKEIjeZcot4RI1hUmd0SYLTp9VPmVCH-zHj-H4hU1fKaAEZDrzuXSeDySjyq-B89mD-kiWKjxU-0RO8MYMrZvb-oTjWX-vnqc30KXJDOuMAP7em0O-2B58Ip7TVi1B0ZZCz_c3Z2--SVMaSz',
    label: 'CURRENT SERIES',
    title: 'Kingdom Keys',
    subtitle: '8 Part Masterclass on Spiritual Authority',
    titleSize: 'text-[48px] font-extrabold',
  },
  {
    span: 'md:col-span-2 md:row-span-1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKvdNg6vfRfKNVBwmCLQhNgRZhlXv9FyrmaABR2D_rj4FXoN67KEFKadAfbWvDO_8XHYVVb97ejlm7kMMVkZW0XSCaiZDtcHr2-KaZJ26Rayg1H9Mzf3FUVSiMN1xKCU_jML0xbxCN0GOHJQjML0xbxCN0GOHJQjML0xbxCN0GOHJQ',
    label: null,
    title: 'FINANCIAL SERIES',
    subtitle: '6 MESSAGES',
    titleSize: 'text-[32px] font-bold',
    subtitleGold: true,
  },
  {
    span: 'md:col-span-1 md:row-span-1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7npR6ST3oboynAX181M5mHPmY6R6L6ZGD2eWqas_W077jIktQVLZlv8ZNyfvL5nlpuP23N0AEIeK1kxld8Z_aurmZW0QPDfom0fdegmXinluBWtSoX-IFwJ3ob6z-F4ABlsgLI2SCchi9IWm46UQkWOPVbd8GigcZh8YquspRC225aqeIg4d5HTxEEfAA2WdjZZwLNwh6YoyVaC3WCzPnLDbNLruAxeQAuhzTf9ikEkc22EWWZwkajgFQxpzly1s0yKTlAykhl6XQ',
    label: null,
    title: 'THE ZOE LIFE',
    subtitle: null,
    titleSize: 'text-sm font-bold',
  },
  {
    span: 'md:col-span-1 md:row-span-1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB0Vau0cnEaBF5sCAdipVha1YSlgoU48i_AfSiyv8EgdQXxG-0PhAUEZSzuz8ib7FXGhBhO3O46yLSnqLwbIMiFXG25gSXwRKyoouERg9Ww6Gi6aXOm3P5P0UjO9PqRUgzEPfjN-C-MDpAkHWdMwd13-ODPag-ipZ9yzxzxE3Y0CVV89DDkVBYMuPoNmG-jfXfyCZXfdXmO7egeNx2TViUcuXjrXxNUaaxHAEICdEQaj5Xx-SBndImWeg08wqFpcbs0S0-cpNKqgiI',
    label: null,
    title: 'HIGHLY EXTENDED',
    subtitle: null,
    titleSize: 'text-sm font-bold',
  },
]

export default function SeriesBento() {
  return (
    <section className="w-full py-[120px] bg-primary text-on-primary">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-8 text-center">
          <span className="text-secondary-fixed text-sm font-bold uppercase tracking-widest">Digital Archive</span>
          <h3 className="text-[48px] font-extrabold leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Message Series
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          {series.map((s, i) => (
            <div
              key={i}
              className={`${s.span} relative group overflow-hidden rounded-xl cursor-pointer`}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={s.title}
                src={s.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                {s.label && (
                  <span className="text-secondary-fixed text-sm font-bold uppercase">{s.label}</span>
                )}
                <h4 className={`${s.titleSize} mt-2 leading-tight`} style={i === 0 ? { letterSpacing: '-0.02em' } : {}}>
                  {s.title}
                </h4>
                {s.subtitle && (
                  <p className={`text-base mt-2 ${s.subtitleGold ? 'text-secondary-fixed font-bold text-sm' : 'text-on-primary/70'}`}>
                    {s.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
