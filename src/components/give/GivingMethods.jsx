import { useState } from 'react'

const BANK_DETAILS = `Bank: Republic Bank
Account Name: Ebenezer Okronipa Ministries
Account No: 0076344843027
Branch: Legon`

export default function GivingMethods() {
  const [copiedBank, setCopiedBank] = useState(false)
  const [copiedMomo, setCopiedMomo] = useState(false)

  function copyBank() {
    navigator.clipboard.writeText(BANK_DETAILS)
    setCopiedBank(true)
    setTimeout(() => setCopiedBank(false), 2000)
  }

  function copyMomo() {
    navigator.clipboard.writeText('MTN MoMo Pay: 204122 | Numbers: 0596322520 / 0546363957 | Name: Overcomers Nation Church')
    setCopiedMomo(true)
    setTimeout(() => setCopiedMomo(false), 2000)
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
                Quick and secure giving via card or mobile money through our online portal. Available 24/7.
              </p>
            </div>
            <button className="bg-secondary text-on-secondary py-4 text-sm font-bold rounded transition-all active:scale-95 hover:bg-on-secondary-fixed">
              Coming Soon
            </button>
          </div>

          {/* Mobile Money */}
          <div className="bg-surface-container-lowest p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 rounded-lg border-b-4 border-transparent hover:border-secondary">
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">smartphone</span>
              </div>
              <h3 className="text-[32px] font-bold text-primary mb-4 leading-tight">Mobile Money</h3>
              <p className="text-base text-on-surface-variant mb-6 leading-relaxed">
                Send via MTN MoMo to Overcomers Nation Church.
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Name</span>
                <span className="text-sm font-bold text-primary">Overcomers Nation Church</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">MoMoPay</span>
                <span className="text-sm font-bold text-primary">204122</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Number</span>
                <span className="text-sm font-bold text-primary">0596 322 520</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Alt Number</span>
                <span className="text-sm font-bold text-primary">0546 363 957</span>
              </div>
            </div>
            <button
              onClick={copyMomo}
              className="border-2 border-primary text-primary py-4 text-sm font-bold rounded hover:bg-primary hover:text-on-primary transition-all active:scale-95"
            >
              {copiedMomo ? 'Copied!' : 'Copy MoMo Details'}
            </button>
          </div>

          {/* Bank Transfer */}
          <div className="bg-surface-container-lowest p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 rounded-lg border-b-4 border-transparent hover:border-secondary">
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">account_balance</span>
              </div>
              <h3 className="text-[32px] font-bold text-primary mb-4 leading-tight">Bank Transfer</h3>
              <p className="text-base text-on-surface-variant mb-6 leading-relaxed">
                Direct bank transfer for local and international partners.
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Bank</span>
                <span className="text-sm font-bold text-primary">Republic Bank</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Acc Name</span>
                <span className="text-sm font-bold text-primary">Ebenezer Okronipa Ministries</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Acc No</span>
                <span className="text-sm font-bold text-primary">0076344843027</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant py-2">
                <span className="text-on-surface-variant text-sm">Branch</span>
                <span className="text-sm font-bold text-primary">Legon</span>
              </div>
            </div>
            <button
              onClick={copyBank}
              className="border-2 border-primary text-primary py-4 text-sm font-bold rounded hover:bg-primary hover:text-on-primary transition-all active:scale-95"
            >
              {copiedBank ? 'Copied!' : 'Copy Bank Details'}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
