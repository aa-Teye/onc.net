export default function AboutHero() {
  return (
    <section className="relative h-[618px] flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40"
          alt="Grand cathedral interior with high vaulted ceilings"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrEsHi0gul6rFohMAWkFjp5fJAccgfOXRWXpEp3nv9QjlgK99hl3h8uB-6XznH2U3dD7OHgniE1SwCrbkU_GHJqEHIBhGqFoWsL-vnYy18DeZRu7MJTqgz6Njx7Px48wbY0LSQkMUWNzW0Z--mtqoZcm-spzeAdPtRxV3o7dbcipVE6a8zcWr42faoAhGwNGE-tP4MaIC6XAvVwyBiEIfwFfo9eIMG7fkHJmvr7jdCpoYYa4Rcb3nSosDJ6Z2R2BfA8XJ2B8KlXPpk"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>
      <div className="relative z-10 text-center px-8 max-w-[1000px]">
        <div className="h-1 bg-secondary-container mb-2 mx-auto w-24" />
        <h2
          className="text-[48px] md:text-[72px] font-black text-surface-container-lowest mb-2 uppercase leading-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          PARTNERSHIP
        </h2>
        <p className="text-[18px] text-primary-fixed max-w-2xl mx-auto leading-relaxed">
          Built on the unwavering truth of the Gospel, bridging the wisdom of tradition with the fire of the next generation.
        </p>
      </div>
    </section>
  )
}
