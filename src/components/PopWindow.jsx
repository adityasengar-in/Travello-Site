const PopWindow = () => {
  const itinerary = [
    {
      day: 'Day 1',
      title: 'Arrive and settle in',
      detail: 'Airport pickup, neighborhood food map, sunset viewpoint, and one flexible dinner hold.',
      budget: '$110',
    },
    {
      day: 'Day 2',
      title: 'Guided local immersion',
      detail: 'Morning heritage walk, cafe break, artisan studio visit, and an evening market loop.',
      budget: '$86',
    },
    {
      day: 'Day 3',
      title: 'Slow nature escape',
      detail: 'Private transfer, scenic stopovers, short hike, picnic lunch, and back by golden hour.',
      budget: '$128',
    },
  ]

  const plannerTools = ['Compare neighborhoods', 'Track saved places', 'Split trip costs', 'Export a day plan']

  return (
    <section id="plan" className="bg-[#f4f8ef] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00aa6c]">Trip board</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-[#101913] sm:text-5xl">
            Plan the whole trip without losing the good ideas.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#526057]">
            Keep saved places, route timing, budgets, and booking notes in one calm workspace. It feels inspired by traveler reviews, but structured for action.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {plannerTools.map((tool) => (
              <div key={tool} className="rounded-lg border border-black/10 bg-white p-4">
                <span className="mb-4 block h-2 w-10 rounded-full bg-[#00aa6c]" />
                <p className="font-black text-[#101913]">{tool}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col justify-between gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold text-[#69756d]">Sample itinerary</p>
              <h3 className="text-2xl font-black text-[#101913]">Three days in Goa</h3>
            </div>
            <button className="w-full rounded-full bg-[#101913] px-5 py-3 text-sm font-black text-white transition hover:bg-[#00aa6c] sm:w-auto" type="button">
              Start with this
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {itinerary.map((item) => (
              <article key={item.day} className="grid gap-4 rounded-lg border border-black/10 bg-[#fbfaf4] p-4 sm:grid-cols-[92px_1fr_auto] sm:items-start">
                <p className="rounded-full bg-[#e5f6ed] px-3 py-2 text-center text-sm font-black text-[#007a53]">{item.day}</p>
                <div>
                  <h4 className="text-xl font-black text-[#101913]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#526057]">{item.detail}</p>
                </div>
                <p className="text-lg font-black text-[#101913]">{item.budget}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-3 border-t border-black/10 pt-5 sm:grid-cols-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#69756d]">Total</p>
              <p className="mt-1 text-2xl font-black text-[#101913]">$324</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#69756d]">Saved</p>
              <p className="mt-1 text-2xl font-black text-[#101913]">14 places</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#69756d]">Pace</p>
              <p className="mt-1 text-2xl font-black text-[#101913]">Relaxed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopWindow
