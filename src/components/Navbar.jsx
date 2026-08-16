import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Discover', href: '/discover' },
    { label: 'Plan', href: '/plan' },
  ]

  return (
    <nav className="fixed left-1/2 top-4 z-40 w-[calc(100%-2rem)] max-w-[980px] -translate-x-1/2 rounded-full backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 items-center justify-between px-4 py-2 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-3xl font-bold tracking-normal text-[#101913]">
          Travello
        </Link>

        <div className="hidden items-center rounded-full border border-black/10 bg-white p-1 text-sm font-semibold text-[#2d3a31] shadow-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) => `nav-pill px-4 py-2 ${isActive ? 'bg-[#f2f7ef] text-[#007a53]' : ''}`}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a className="text-sm font-semibold text-[#2d3a31]">
            Sign in
          </a>
          <Link className="inline-flex min-w-28 items-center justify-center rounded-full bg-[#132318] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#02ae52]" to="/plan">
            Plan a trip
          </Link>
        </div>

        <details
          className="mobile-nav relative md:hidden"
          onToggle={(event) => setMobileMenuOpen(event.currentTarget.open)}
          open={mobileMenuOpen}
        >
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-black/15 bg-white text-[#101913] shadow-sm">
            <span className="flex w-5 flex-col gap-1">
              <span className="h-[2px] w-full bg-current" />
              <span className="h-[2px] w-full bg-current" />
              <span className="h-[2px] w-full bg-current" />
            </span>
          </summary>

          <div className="absolute right-0 mt-3 flex min-w-48 flex-col gap-1 rounded-lg border border-black/10 bg-white p-2 text-sm font-semibold shadow-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                className="rounded-md px-4 py-3 text-[#101913] hover:bg-[#f2f7ef]"
                onClick={() => setMobileMenuOpen(false)}
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="rounded-md px-4 py-3 text-[#101913] hover:bg-[#f2f7ef]"
              href="#signin"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign in
            </a>
          </div>
        </details>
      </div>
    </nav>
  )
}

export default Navbar
