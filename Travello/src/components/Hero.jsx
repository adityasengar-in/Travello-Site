const Hero = () => {
  const stripWords = ['EXPERIENCES', 'PLACES', 'MOMENTS']

  return (
    <section id="discover" className="relative min-h-screen overflow-x-hidden bg-white py-[12vw] sm:py-[6vw]">
      <div className="moving-text">
        {[1, 2, 3].map((group) => (
          <div key={group} className="con">
            {stripWords.map((word) => (
              <div key={`${group}-${word}`} className="inline-block">
                <h1>{word}</h1>
                <div className="gola" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex min-h-[80vh] w-full flex-col justify-center gap-8 px-[5vw] py-[12vw] sm:h-[80vh] sm:gap-10 sm:py-[3vw] lg:flex-row lg:items-center lg:justify-between">
        <h1 className="w-full text-[9vw] leading-[1.05] text-[#071200] sm:text-[3.5vw] sm:leading-[4vw] lg:w-[65%]">
          Explore stunning destinations and unforgettable experiences. Discover new cultures, scenic views, and journeys that turn every trip into a lasting memory.
        </h1>

        <div className="w-full lg:w-[25%]">
          <img
            className="w-full rounded-[20px] object-cover sm:w-[90%]"
            src="/assets/plane1.jpg"
            alt="Airplane wing above a scenic landscape"
          />
          <p className="mt-4 text-base leading-relaxed text-black/70 sm:my-[1vw]">
            Travel without the hassle and move with complete confidence. Smart planning tools, smooth bookings, and reliable support make every journey effortless.
          </p>
        </div>
      </div>

      <div className="gooey-blob pointer-events-none absolute left-[8%] top-[30%] h-[82vw] w-[82vw] rounded-full bg-gradient-to-tr from-[#82ff2f] to-[#e5ff00] blur-2xl sm:left-[25%] sm:top-[32%] sm:h-[35vw] sm:w-[35vw]" />
    </section>
  )
}

export default Hero
