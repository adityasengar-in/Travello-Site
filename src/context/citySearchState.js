import { createContext } from 'react'

let citySearchIndexPromise

export const CitySearchContext = createContext(null)

const createCitySearchIndex = (cities) =>
  cities.reduce(
    (cityList, city) => {
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
    },
    { items: [], seen: new Set() },
  ).items

export const loadCitySearchIndex = () => {
  if (!citySearchIndexPromise) {
    citySearchIndexPromise = import('cities.json').then((module) => createCitySearchIndex(module.default ?? module))
  }

  return citySearchIndexPromise
}
