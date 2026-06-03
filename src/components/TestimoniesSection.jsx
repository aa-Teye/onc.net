const testimonies = [
  {
    label: 'TESTIMONY 1',
    src: 'https://lh3.googleusercontent.com/aida/ADBb0ug-XyuwmFrq99qt_RNgeIdBI8oEGPQoQtN7w4RYjqX36cajbPeKUGO7uHBOQ9V_u90YwPV2dKf-Oq88Q6rvMYSTYfMPTR_bWZULGzaY3zBeaaGqiy6IJaVjGe3NSlB5axWD5x0-krCIWxqRPduY1ypyKrMAGv2QFteM9lrT3IXgiRXiYoa5lzcHDpbD9HLs2salGKhQBhvIBr-E_xocS9Lz6CUdjNcwWjmKNYqPe0zHknQAHB08fc8jZM5sn76kZnRFgKNHNsJzwp0',
    alt: 'Vibrant Bible study group in a modern living room',
  },
  {
    label: 'TESTIMONY 2',
    src: 'https://lh3.googleusercontent.com/aida/ADBb0ug1oOioonT2g0IUkPas_XaJqRvdyFDjGLV9T0QF6mwDdLInOh6tIlRwYd_NqWge7KygEFrbwNogt8JnHpeYDoUq0qbszgXOvQdNhkxtg-bQQdGLTCPTBZcP_2WO6IjTYMxCddSCJ6Azr_QslBS5OgfUtwP7SUdt6ci8hJPSc7bAySJvmYQAL4JQ4ReoinBsDzAoodzezSVjyO2PCMbgltgbNK1k4Y46uKicHwGBlxyBTTk5Bq3T62cqF-U8ujQ5zPbsBOwLbvgPZm0',
    alt: "Men's ministry",
  },
  {
    label: 'TESTIMONY 3',
    src: 'https://lh3.googleusercontent.com/aida/ADBb0ug1qnfsIXm2dcOLpAKHWPHNt99ZmOA0GO_zQGSLUe71xfKwWpYkA-Fz5OmNx_cZdESWbovHwGqQfCQb62KgT6OZk2a9GDcmxtCDGqjt56UR3XEdBmOSGAYd8X-BtibpncrRhcWnRsvpWl-LPSBreSRxlcxd_sFAe_L98LLsb3deII_BTpnlTfCOGlZGnCDylTf6AEa59Y7WgT-mhLadd-g8dlns-WpjMliOtKqcK19Lvj7mtwK4H9QmmA5qKVnxq5cNczXpwF2Njw',
    alt: "Women's ministry",
  },
  {
    label: 'TESTIMONY 4',
    src: 'https://lh3.googleusercontent.com/aida/ADBb0ujwBcU-nHdy4N4jXRXI_AwT11UW5xFc4TB4HgIshYr4-IW_SlJf1m0ng6Y4-Ftm_0T7DDKt9vL45RK68vA_BUoLlYcC0e4S1qLyYGaOiVu2dTczXrfweErQBRbBtPQlzS_ZWtdqI-r8cqp6Fnc06gptTMRrdmEJUmQASZ8OrR3Cf9lQmphXeVwnc75Ttp2_QWGTndOAol9YSQerZS2rYsqdeznI5kiv8jzcN3aPYZUMBZ55IwCc7KzHWjO8',
    alt: "Children's ministry",
  },
];

export default function TestimoniesSection() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-[48px] font-extrabold text-primary leading-tight" style={{ letterSpacing: '-0.02em' }}>
            TROPHIES OF FAITH
          </h3>
          <p className="text-on-surface-variant mt-4">
            AND THEY OVERCAME BY THE BLOOD AND THE WORD OF THEIR TESTIMONY
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {testimonies.map((t, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img
                  alt={t.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={t.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h5 className="text-white text-[18px] font-bold">{t.label}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
