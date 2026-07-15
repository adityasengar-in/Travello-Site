import Landscape from './Landscape'

const Landing = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-[4vw] pt-[24vw] sm:px-[2vw] sm:pt-[7vw]">
      <div className="flex min-h-[64vh] w-full flex-col justify-end gap-8 border-b border-black/25 pb-[8vw] sm:h-[80vh] sm:gap-10 sm:pb-[5vw] lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full lg:w-[25vw]">
          <h3 className="text-[7vw] leading-[0.95] text-[#071200] sm:text-[2vw] sm:leading-[2vw]">
            Travel the world and collect stories better than souvenirs, made of wrong turns, good food, and great company.
          </h3>
        </div>

        <div className="text-right">
          <h1 className="text-[17vw] font-black uppercase leading-[0.82] tracking-normal text-[#071200] sm:text-[18vw] lg:text-[10vw] lg:leading-[8vw]">
            INSPIRE
            <br />
            THAT
            <br />
            NOMAD
          </h1>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[-20vw] top-[70vh] h-[70vw] w-[90vw] sm:right-0 sm:top-[79vh] sm:h-[30vw] sm:w-[46vw]">
        <div className="absolute right-[-2vw] h-full w-[70vw] rotate-[-6deg] rounded-l-full bg-[#3bff3e] blur-2xl sm:w-[35vw]" />
        <div className="hero-blob-one absolute h-[70vw] w-[70vw] rounded-full bg-[#91ff2b] blur-2xl sm:h-[30vw] sm:w-[30vw]" />
        <div className="hero-blob-two absolute h-[70vw] w-[70vw] rounded-full bg-gradient-to-b from-[#d0ff00] to-[#2fff00] blur-2xl sm:h-[30vw] sm:w-[30vw]" />
      </div>

      <Landscape />
    </section>
  )
}

export default Landing
