import { useState } from 'react'

const categories = ['All Messages', 'Prophetic', 'Leadership', 'Family', 'Kingdom Finance']

export default function FilterBar() {
  const [active, setActive] = useState('All Messages')

  return (
    <section className="w-full bg-surface-container-high py-2 border-b border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-wrap items-center justify-between gap-6">
        <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                active === cat
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant focus:ring-2 focus:ring-secondary rounded-lg text-base outline-none"
            placeholder="Search sermons..."
            type="text"
          />
        </div>
      </div>
    </section>
  )
}
