import { useState } from 'react'

export default function GivingMethods() {
  const [copied, setCopied] = useState(false)

  function copyBankDetails() {
    navigator.clipboard.writeText('Bank: Ecobank Ghana | Acc Name: Overcomers Nation')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="bg-primary py-[120px]">
      <div className="px-8 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-extrabold text-on-primary mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Choose Your Method
          </h2>
          <p className="text-[18px] text-primary-fixed-dim leading-relaxed">
            Secure, transparent, and convenient ways to support the ministry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Online Giving */}
          <div className="bg-surface-container-lowest p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 rounded-lg border-b-4 border-transparent hover:border-secondary">
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">payments</span>
              </div>
              <h3 className="text-[32px] font-bold text-primary mb-4 leading-tight">Online Giving</h3>
              <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                Quick and secure giving via credit or debit card through our encrypted portal.
              </p>
            </div>
            <button className="bg-secondary text-on-secondary py-4 text-sm font-bold rounded transition-all active:scale-95 hover:bg-on-secondary-fixed">
              Give Online Now
            </button>
          </div>

          {/* Mobile Money */}
          <div className="bg-surface-container-lowest p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 rounded-lg border-b-4 border-transparent hover:border-secondary">
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">smartphone</span>
              </div>
              <h3 className="text-[32px] font-bold text-primary mb-4 leading-tight">Mobile Money</h3>
              <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                Give conveniently via MTN MoMo or Telecel Cash. Contact the church office for the mobile number.
              </p>
            </div>
            <div className="bg-surface-container p-4 rounded mb-6 border border-outline-variant flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-xl">info</span>
              <span className="text-sm text-on-surface-variant">Number available at the front desk or church office</span>
            </div>
            <a
              href="/contact"
              className="bg-primary text-on-primary py-4 text-sm font-bold rounded transition-all active:scale-95 text-center block hover:bg-primary/90"
            >
              Contact Church Office
            </a>
          </div>

          {/* Bank Transfer */}
          <div className="bg-surface-container-lowest p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 rounded-lg border-b-4 border-transparent hover:border-secondary">
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">account_balance</span>
              </div>
              <h3 className="text-[32px] font-bold text-primary mb-4 leading-tight">Bank Transfer</h3>
              <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                Direct wire transfers for local and international partners. Ideal for recurring large gifts.
              </p>
            </div>
            <div className="space-y-2 mb-8">
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant">Bank:</span>
                <span className="text-sm font-bold">Ecobank Ghana</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant">Acc Name:</span>
                <span className="text-sm font-bold">Overcomers Nation</span>
              </div>
            </div>
            <button
              onClick={copyBankDetails}
              className="border-2 border-primary text-primary py-4 text-sm font-bold rounded hover:bg-primary hover:text-on-primary transition-all active:scale-95"
            >
              {copied ? 'Copied!' : 'Copy Details'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
