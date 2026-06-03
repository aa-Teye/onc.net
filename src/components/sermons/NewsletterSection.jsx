export default function NewsletterSection() {
  return (
    <section className="w-full py-[120px] bg-surface flex flex-col items-center">
      <div className="max-w-4xl px-8 text-center w-full">
        <h3 className="text-[48px] font-extrabold text-primary mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Never Miss a Word
        </h3>
        <p className="text-[18px] text-on-surface-variant mb-8 leading-relaxed">
          Subscribe to our weekly media digest and receive the latest messages, series notes, and prophetic
          insights directly in your inbox.
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <input
            className="flex-1 px-6 py-4 border-b-2 border-primary focus:border-secondary bg-surface-container text-base rounded-lg outline-none"
            placeholder="Email Address"
            type="email"
          />
          <button className="bg-secondary text-on-secondary px-10 py-4 rounded-lg text-sm font-bold uppercase active:scale-95 transition-transform hover:border-b-2 hover:border-primary">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
