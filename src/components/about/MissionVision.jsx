export default function MissionVision() {
  return (
    <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Mission */}
        <div className="md:col-span-7 bg-surface-container-low p-8 border-l-4 border-secondary flex flex-col justify-center">
          <span className="text-sm font-bold text-secondary mb-2">THE MISSION</span>
          <h3
            className="text-[48px] font-extrabold text-primary mb-8 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Empowering the Overcomer in You
          </h3>
          <p className="text-[18px] text-on-surface-variant leading-relaxed">
            To raise a generation of believers who walk in the fullness of their divine authority, equipped with
            spiritual precision and modern vitality to impact every sphere of society for the Kingdom of God.
          </p>
        </div>

        {/* Image 1 */}
        <div className="md:col-span-5 h-[400px]">
          <img
            className="w-full h-full object-cover rounded-xl shadow-xl"
            alt="Hands joined together in unity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY9zuK5_1a6Zc2PjZdiv1uKEM9YVtvlp_tuLeavGdAErp_XXVNraJUSXjvjsutoUbfv2OG63oyN2QMHcWCQil1B7QxTy0s3yzf7sYtIgu5K_gNV9PWg_s5CCp7swADdxxDzab_HZpQIO2_5DpsSKF-80hmNQOO6UHgaT8nSUM4AHY8TH0MkUjNdXAY-bXUWPUP94WLK8S18VeAxYfafvWNBM3Y2w1_N5WPnVOtwWhyst-IERMHeAYzKLGmY4mxyYxnzg6qs1kcud7I"
          />
        </div>

        {/* Image 2 */}
        <div className="md:col-span-5 h-[400px] order-last md:order-none">
          <img
            className="w-full h-full object-cover rounded-xl shadow-xl"
            alt="Visionary looking over city skyline"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1jMGNn5J_0A81BxNAlB9DvG0Vxu39SJZ1xVHNzVqGU_XSGAUyJlsqfu61060GLOOfMBn0vOSGhBuOldVylF7iAZV6TzEUVysegf6HDjjfpHC5O1jd-FEd7YACi92mpPWcWWMZ5z7KzslK1VFBigdxqKmAfzOeMkzahabHCgBjggPUVkl7invKujPzm-kAUgvalf93FOjIpavJV0Oxi1zgZ8R_8NMLKQdobtAeb6fEvpBjNFvVmUo2pqxCB9TrHOGhvoIZQ08MscfU"
          />
        </div>

        {/* Vision */}
        <div className="md:col-span-7 bg-primary text-on-primary p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '200px', fontVariationSettings: '"FILL" 1' }}
            >
              church
            </span>
          </div>
          <span className="text-sm font-bold text-secondary-fixed mb-2">THE VISION</span>
          <h3
            className="text-[48px] font-extrabold text-surface-container-lowest mb-8 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            A Global Nation of Sovereignty
          </h3>
          <p className="text-[18px] text-primary-fixed leading-relaxed">
            To become a global beacon of light, transforming cities and nations through the manifest presence of God,
            establishing centers of excellence where faith meets innovation.
          </p>
        </div>
      </div>
    </section>
  )
}
