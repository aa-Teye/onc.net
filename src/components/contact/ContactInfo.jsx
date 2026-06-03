export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="bg-surface-container-low p-8 rounded-xl border border-primary/10 shadow-sm">
        <h3
          className="text-[48px] font-extrabold text-primary mb-6 leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Join Our Community
        </h3>

        {/* Service Times */}
        <div className="mb-6 p-2 border-l-4 border-secondary bg-surface-bright">
          <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined">schedule</span> SERVICE TIMES
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[18px]">Sunday Worship</span>
              <span className="text-sm font-bold text-secondary">8:00 AM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[18px]">Wednesday Midweek</span>
              <span className="text-sm font-bold text-secondary">6:30 PM</span>
            </div>
          </div>
        </div>

        {/* Direct Contact */}
        <div className="space-y-6 mt-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary-container p-3 rounded-full">
              <span className="material-symbols-outlined text-primary-fixed">call</span>
            </div>
            <div>
              <p className="text-sm font-bold text-outline">Phone Number</p>
              <p className="text-[32px] font-bold text-primary leading-tight">054 636 3957</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary-container p-3 rounded-full">
              <span className="material-symbols-outlined text-primary-fixed">location_on</span>
            </div>
            <div>
              <p className="text-sm font-bold text-outline">Our Location</p>
              <p className="text-[18px]">Accra, Ghana - Main Sanctuary</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-surface-container-high border border-outline-variant relative group">
        <img
          className="w-full h-full object-cover"
          alt="Map of Accra, Ghana"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7LnQPub1sqE4jKgLNxRRjoOcynLo-jTuKEHO5-lRwwbZVKW-V0avsHXkZ9PbsGZi164KyU2tfySm5-R4fCbB_bAaKaSorHbg_1_dS7GHyLfembdY89FVR6jeRmZ7aXgpG4xEdCUxkp7ycO4jmPTXdDWOGQn7USYP1cGsQfvbjGSkBb7JxomIwfsQrkW1892LUiSx23tPK3KrMGfBawO2oomTxTFeIF-3rngKNaYLb63HZM4UyPxpKZyjL6R-W8u-nyXQZeKtUY7Js"
        />
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors pointer-events-none" />
      </div>
    </div>
  )
}
