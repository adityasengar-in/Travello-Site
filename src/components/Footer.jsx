const Footer = () => {
  const links = ['About', 'Support', 'Privacy', 'Careers']
  const destinations = ['Goa', 'Kerala', 'Jaipur', 'Varanasi']

  return (
    <footer id="signin" className="bg-[#101913] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1fr_0.7fr_0.7fr]">
          <div>
            <a href="/" className="flex items-center gap-2 text-2xl font-black">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00aa6c] text-sm">T</span>
              Travello
            </a>
            <p className="mt-4 max-w-md text-base leading-7 text-white/70">
              A modern travel planning interface for comparing places, saving ideas, and turning recommendations into usable itineraries.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/55">Company</h3>
            <div className="mt-4 grid gap-3">
              {links.map((link) => (
                <a key={link} className="text-white/80 transition hover:text-white" >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/55">Top destinations</h3>
            <div className="mt-4 grid gap-3">
              {destinations.map((destination) => (
                <a key={destination} className="text-white/80 transition hover:text-white" href="/discover">
                  {destination}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-6 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>Copyright © Travello</p>
          <p>Made for practical, review-led trip planning.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
