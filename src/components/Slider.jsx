const Slider = () => {
  const reviews = [
    {
      text: 'Travello made the shortlist obvious. We booked two stays and skipped three tourist traps because the review summaries were actually useful.',
      name: 'Aarav Mehta',
      route: 'Goa family trip',
      score: '5.0',
    },
    {
      text: 'The itinerary view helped us keep food, museums, and downtime balanced. It felt like planning with a calm local friend.',
      name: 'Naina Kapoor',
      route: 'Jaipur weekend',
      score: '4.9',
    },
    {
      text: 'I liked that every suggestion came with a reason, price signal, and travel time. Pretty design, but not empty decoration.',
      name: 'Rohan Sen',
      route: 'Kerala solo route',
      score: '4.8',
    },
  ]

  return (
    <section id="reviews" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00aa6c]">Traveler proof</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#101913] sm:text-5xl">
              Reviews that help you decide, not scroll forever.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#526057]">
            The interface keeps ratings, neighborhood notes, cancellation hints, and local tips close to each decision, so travelers can move from browsing to booking with less noise.
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-lg border border-black/10 bg-[#fbfaf4] p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="rounded-full bg-[#101913] px-3 py-1 text-sm font-black text-white">{review.score}</p>
                <p className="text-sm font-bold text-[#69756d]">{review.route}</p>
              </div>
              <p className="mt-8 text-lg leading-8 text-[#101913]">"{review.text}"</p>
              <footer className="mt-8 border-t border-black/10 pt-4 text-sm font-black text-[#526057]">{review.name}</footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
