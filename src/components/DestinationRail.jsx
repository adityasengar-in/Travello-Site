import { useRef } from 'react'
import DestinationCard from './DestinationCard'

const DestinationRail = ({ eyebrow, isLoading = false, places, title }) => {
  const railRef = useRef(null)

  const scrollRail = (direction) => {
    railRef.current?.scrollBy({
      behavior: 'smooth',
      left: direction * 320,
    })
  }

  return (
    <section className="py-8">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.18em] text-[#00aa6c]">{eyebrow}</p> : null}
          <h2 className="mt-1 text-3xl font-black leading-tight text-[#101913] sm:text-4xl">{title}</h2>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            aria-label={`Scroll ${title} left`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg font-black text-[#101913] shadow-sm transition hover:border-[#00aa6c] hover:text-[#007a53]"
            onClick={() => scrollRail(-1)}
            type="button"
          >
            {'<'}
          </button>
          <button
            aria-label={`Scroll ${title} right`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg font-black text-[#101913] shadow-sm transition hover:border-[#00aa6c] hover:text-[#007a53]"
            onClick={() => scrollRail(1)}
            type="button"
          >
            {'>'}
          </button>
        </div>
      </div>

      <div ref={railRef} className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="min-w-[260px] rounded-lg border border-black/10 bg-white p-4 shadow-sm sm:min-w-[300px]">
                <div className="h-48 rounded-md bg-[#eef3e9]" />
                <div className="mt-4 h-4 w-2/3 rounded-full bg-[#eef3e9]" />
                <div className="mt-3 h-7 w-full rounded-full bg-[#eef3e9]" />
                <div className="mt-3 h-4 w-5/6 rounded-full bg-[#eef3e9]" />
              </div>
            ))
          : places.map((place) => <DestinationCard key={place.name} place={place} />)}
      </div>
    </section>
  )
}

export default DestinationRail
