const Slider = () => {
  const reviews = [
    {
      text: 'The trip felt simple from the first search to the final booking.',
      name: 'Aarav Mehta',
    },
    {
      text: 'Clean ideas, calm planning, and enough detail to actually trust the route.',
      name: 'Naina Kapoor',
    },
    {
      text: 'It made choosing places feel less noisy and much more personal.',
      name: 'Rohan Sen',
    },
    {
      text: 'A beautiful way to collect options before turning them into a real plan.',
      name: 'Mira Shah',
    },
  ]
  const reviewLoop = [...reviews, ...reviews]

  return (
    <section className="min-h-[33vh] overflow-hidden bg-white px-[4vw] py-[12vw] sm:px-[2vw] sm:py-[4vw]">
      <div className="border-y border-[#123200]/20 py-[8vw] sm:py-[3vw]">
        <div className="reviews-track flex w-max">
          {reviewLoop.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="flex w-[82vw] shrink-0 flex-col justify-between border-r border-[#123200]/20 px-[5vw] sm:w-[48vw] sm:px-[2vw] lg:w-[32vw]"
            >
              <p className="text-base italic leading-relaxed text-[#123200]/80 sm:text-[1.1vw]">
                "{review.text}"
              </p>
              <footer className="mt-8 text-sm font-semibold text-[#071200]/70 sm:mt-[2vw]">
                {review.name}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
