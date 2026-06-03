export default function LeadershipSection() {
  return (
    <section className="py-[120px] bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 order-2 md:order-1 mt-12 md:mt-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 rounded-2xl transform -rotate-3 transition-transform group-hover:rotate-0" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-surface-container">
                <img
                  alt="Portrait of Senior Pastor"
                  className="w-full h-full object-cover"
                  src="/images/pastor.jpg"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="w-12 h-1 bg-secondary mb-8" />
            <h3 className="text-[48px] font-extrabold text-primary mb-2 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Our Leadership
            </h3>
            <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-8">
              Senior Pastor &amp; Visionary
            </p>
            <div className="space-y-6">
              <p className="text-[18px] text-on-surface leading-relaxed">
                Guided by a profound divine revelation, our Senior Pastor has dedicated his life to raising an army
                of believers who walk in dominion. His ministry is marked by a unique blend of apostolic authority
                and compassionate mentorship — empowering every individual to discover their God-given identity as
                an overcomer.
              </p>
              <p className="text-[18px] text-on-surface-variant leading-relaxed">
                In over 8 years of ministry, Overcomers Nation has grown from a local assembly into a global movement
                reaching millions through YouTube, Facebook, Telegram and Podbean. His teachings on faith, dominion
                and the Kingdom provide a blueprint for believers to influence every sphere of society.
              </p>
              <p className="text-[18px] text-on-surface-variant leading-relaxed">
                Under his leadership, the church has become a beacon of hope and a center for spiritual health and
                wholeness — committed to equipping the saints and passing the legacy of faith to the next generation
                through discipleship and a culture of Kingdom excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
