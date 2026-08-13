import { useEffect, useMemo, useRef, useState } from 'react'
import Landscape from './Landscape'

let citySearchIndexPromise

const createCitySearchIndex = (cities) =>
  cities.reduce((cityList, city) => {
    if (!city.name || !city.country) {
      return cityList
    }

    const cityName = city.name.trim()
    const countryCode = city.country.trim().toUpperCase()
    const key = `${cityName}-${countryCode}`.toLowerCase()

    if (cityList.seen.has(key)) {
      return cityList
    }

    cityList.seen.add(key)
    cityList.items.push({
      city: cityName,
      countryCode,
      searchValue: `${cityName} ${countryCode}`.toLowerCase(),
    })

    return cityList
  }, { items: [], seen: new Set() }).items

const loadCitySearchIndex = () => {
  if (!citySearchIndexPromise) {
    citySearchIndexPromise = import('cities.json').then((module) => createCitySearchIndex(module.default ?? module))
  }

  return citySearchIndexPromise
}

const Landing = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [citySearchIndex, setCitySearchIndex] = useState([])
  const searchInputRef = useRef(null)

  const quickStats = [
    { label: 'Reviewed stays', value: '420+' },
    { label: 'Local guides', value: '68' },
    { label: 'Avg. rating', value: '4.8' },
  ]

  const suggestions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (normalizedQuery.length < 2) {
      return []
    }

    return citySearchIndex.filter((city) => city.searchValue.includes(normalizedQuery)).slice(0, 8)
  }, [citySearchIndex, query])

  useEffect(() => {
    if (!searchOpen) {
      return undefined
    }

    const timeout = window.setTimeout(() => searchInputRef.current?.focus(), 180)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSearchOpen(false)
      }
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(timeout)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
    }
  }, [searchOpen])

  useEffect(() => {
    if (!searchOpen || citySearchIndex.length > 0) {
      return undefined
    }

    let active = true

    loadCitySearchIndex()
      .then((cities) => {
        if (active) {
          setCitySearchIndex(cities)
        }
      })

    return () => {
      active = false
    }
  }, [citySearchIndex.length, searchOpen])

  return (
    <section className="relative overflow-hidden bg-[#fbfaf4] px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-[#00aa6c]/25 bg-white px-4 py-2 text-sm font-bold text-[#007a53] shadow-sm">
            Smart travel planning for curious travelers
          </p>
          <h1 className="mt-6 text-4xl font-black leading-[1.02] text-[#101913] sm:text-7xl sm:leading-[0.98] lg:text-8xl">
            Find places worth your time.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#526057] sm:text-xl">
            Compare trusted stays, local experiences, food stops, and practical routes before you book. Travello turns inspiration into a trip you can actually use.
          </p>

          <button
            className="mt-8 flex w-full max-w-2xl items-center justify-between gap-4 rounded-full border border-black/10 bg-white p-2 pl-5 text-left shadow-[0_18px_50px_rgba(16,25,19,0.10)] transition hover:border-[#00aa6c]/40 hover:shadow-[0_22px_60px_rgba(16,25,19,0.14)] sm:p-3 sm:pl-7"
            onClick={() => setSearchOpen(true)}
            type="button"
          >
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.18em] text-[#69756d]">Where to?</span>
              <span className="mt-1 block text-base font-black text-[#101913] sm:text-lg">{query || 'Search any city...'}</span>
            </span>
            <span className="shrink-0 rounded-full bg-[#00aa6c] px-5 py-3 text-sm font-black text-white sm:px-7 sm:py-4">
              Search
            </span>
          </button>

          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[#101913]/25 px-4 backdrop-blur-lg transition duration-300 ${
              searchOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
            }`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSearchOpen(false)
              }
            }}
          >
            <div
              className={`w-full max-w-3xl transition duration-300 ${
                searchOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
              }`}
            >
              <div className="rounded-[28px] border border-white/50 bg-white/90 p-3 shadow-[0_30px_90px_rgba(16,25,19,0.24)] backdrop-blur-xl">
                <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white p-2 pl-5 shadow-sm sm:p-3 sm:pl-7">
                  <label className="min-w-0 flex-1" htmlFor="landing-search">
                    <span className="block text-xs font-black uppercase tracking-[0.18em] text-[#69756d]">Search Travello</span>
                    <input
                      ref={searchInputRef}
                      className="mt-1 w-full bg-transparent text-2xl font-black text-[#101913] outline-none placeholder:text-[#8b968e] sm:text-4xl"
                      id="landing-search"
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search city or country code..."
                      type="text"
                      value={query}
                    />
                  </label>
                  <button
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f2f7ef] text-lg font-black text-[#101913] transition hover:bg-[#dff0d7]"
                    onClick={() => setSearchOpen(false)}
                    type="button"
                  >
                    x
                  </button>
                </div>

                <div className="mt-3 overflow-hidden rounded-[22px] border border-black/10 bg-white">
                  {searchOpen && citySearchIndex.length === 0 ? (
                    <div className="px-5 py-6 text-sm font-bold text-[#69756d]">Loading city suggestions...</div>
                  ) : suggestions.length > 0 ? (
                    suggestions.map((place) => (
                      <button
                        key={`${place.city}-${place.countryCode}`}
                        className="flex w-full items-center justify-between gap-4 border-b border-black/10 px-5 py-4 text-left transition last:border-b-0 hover:bg-[#f4f8ef] sm:px-6"
                        onClick={() => {
                          setQuery(`${place.city}, ${place.countryCode}`)
                          setSearchOpen(false)
                        }}
                        type="button"
                      >
                        <span className="text-xl font-black text-[#101913]">{place.city}</span>
                        <span className="rounded-full bg-[#f2f7ef] px-3 py-1 text-sm font-black text-[#007a53]">{place.countryCode}</span>
                      </button>
                    ))
                  ) : query.trim().length > 1 ? (
                    <div className="px-5 py-6 text-sm font-bold text-[#69756d]">No matching cities yet.</div>
                  ) : (
                    <div className="px-5 py-6 text-sm font-bold text-[#69756d]">Type at least 2 letters to see city suggestions.</div>
                  )}
                </div>

                <div className="mt-3 flex justify-end">
                  <button className="rounded-full bg-[#00aa6c] px-7 py-4 text-base font-black text-white transition hover:bg-[#008f5a]" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="border-l border-black/15 pl-4">
                <p className="text-2xl font-black text-[#101913]">{stat.value}</p>
                <p className="text-sm font-semibold text-[#69756d]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Landscape />
        </div>
      </div>
    </section>
  )
}

export default Landing
