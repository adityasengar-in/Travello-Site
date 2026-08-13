import { useRef } from 'react'

const DiscoverMoodRail = ({ moods, onSelectMood, selectedMood }) => {
  const railRef = useRef(null)

  const scrollRail = (direction) => {
    railRef.current?.scrollBy({
      behavior: 'smooth',
      left: direction * 300,
    })
  }

  return (
    <section className="border-b border-black/10 pb-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#00aa6c]">Explore by feeling</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-[#101913] sm:text-5xl">Choose by mood</h1>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            aria-label="Scroll moods left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg font-black text-[#101913] shadow-sm transition hover:border-[#00aa6c] hover:text-[#007a53]"
            onClick={() => scrollRail(-1)}
            type="button"
          >
            {'<'}
          </button>
          <button
            aria-label="Scroll moods right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg font-black text-[#101913] shadow-sm transition hover:border-[#00aa6c] hover:text-[#007a53]"
            onClick={() => scrollRail(1)}
            type="button"
          >
            {'>'}
          </button>
        </div>
      </div>

      <div ref={railRef} className="mt-6 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {moods.map((mood) => {
          const isSelected = mood.id === selectedMood

          return (
            <button
              key={mood.id}
              className={`relative min-h-56 min-w-[230px] overflow-hidden rounded-lg border text-left shadow-sm transition sm:min-w-[270px] ${
                isSelected ? 'border-[#00aa6c] ring-4 ring-[#00aa6c]/20' : 'border-black/10 hover:border-[#00aa6c]/50'
              }`}
              onClick={() => onSelectMood(mood.id)}
              type="button"
            >
              <img className="absolute inset-0 h-full w-full object-cover" src={mood.image} alt="" />
              <span className="absolute inset-0 bg-gradient-to-t from-[#101913]/80 via-[#101913]/20 to-transparent" />
              <span className="relative flex h-full min-h-56 flex-col justify-end p-5 text-white">
                <span className="text-2xl font-black leading-tight">{mood.title}</span>
                <span className="mt-2 text-sm font-bold text-white/85">{mood.subtitle}</span>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default DiscoverMoodRail
