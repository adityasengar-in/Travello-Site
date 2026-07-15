const Navbar = () => {
  return (
    <nav className="absolute left-0 top-0 z-30 flex w-full items-start justify-between px-[5vw] py-[5vw] sm:items-center sm:px-[4vw] sm:py-[2vw]">
      <a href="/" className="text-[2rem] font-semibold leading-none text-[#123200] sm:text-[2.5vw]">
        Travello
      </a>

      <div className="hidden items-center gap-[1vw] text-sm font-medium sm:flex sm:text-base">
        <a className="nav-pill px-[15px] py-[15px]" href="#discover">
          <span>Discover</span>
        </a>
        <a className="nav-pill px-[15px] py-[15px]" href="#plan">
          <span>Plan</span>
        </a>
        <a className="nav-pill hidden px-[15px] py-[15px] sm:block" href="#signin">
          <span>Sign in</span>
        </a>
      </div>

      <details className="mobile-nav relative sm:hidden">
        <summary className="nav-pill flex h-11 w-14 cursor-pointer list-none items-center justify-center">
          <span className="flex w-5 flex-col gap-1">
            <span className="h-[2px] w-full bg-current" />
            <span className="h-[2px] w-full bg-current" />
            <span className="h-[2px] w-full bg-current" />
          </span>
        </summary>

        <div className="absolute right-0 mt-3 flex min-w-40 flex-col gap-2 rounded-[18px] border border-[#123200]/20 bg-white/95 p-2 text-sm font-medium shadow-lg backdrop-blur">
          <a className="rounded-full px-4 py-3 text-[#004702]" href="#discover">
            Discover
          </a>
          <a className="rounded-full px-4 py-3 text-[#004702]" href="#plan">
            Plan
          </a>
          <a className="rounded-full px-4 py-3 text-[#004702]" href="#signin">
            Sign in
          </a>
        </div>
      </details>
    </nav>
  )
}

export default Navbar
