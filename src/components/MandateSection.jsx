export default function MandateSection() {
  return (
    <section className="py-[120px] bg-surface">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <div className="w-12 h-1 bg-secondary mb-8" />
            <h3 className="text-[48px] font-extrabold text-primary mb-8 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Our Divine Mandate
            </h3>
            <p className="text-[18px] text-on-surface-variant leading-relaxed text-balance">
              We're a Bible-based Christian church and organisation. Our core mandate is to raise an army of Overcomers
              who will influence their worlds through the power of the Holy Spirit and the forces of Faith and Love.
              We provide a loving community saturated with power for health and wholeness, physically, mentally and spiritually.
            </p>
          </div>
          <div className="md:col-span-5 relative mt-12 md:mt-0">
            <div className="aspect-square bg-surface-container-high rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
              <img
                alt="A diverse and joyful group of modern believers gathered in a bright sanctuary."
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeuv7IRplU3XCOvC8stkhNXGXmWmp50kCfRTL6f0OF7sByLe57PgpFfVFhAg1myqjo91lJGstiARC4FP6xCUEiPISqSwQEfI30xFfYxlRZhiDoS-QCJHDyixoZVowzJgUcqQboL6M2RA8ME_1hvF824aQvrbX8wmyjAMUg_b1ESIN4LwznFqAKLNZB9Kz586TQXzy-Gdf_oscqMBr2I68azY8n3XS2B90fmrnCu5itTtzJ66t0yuuPXfCaWbYRqWcqQWu-KIxmqIp3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
