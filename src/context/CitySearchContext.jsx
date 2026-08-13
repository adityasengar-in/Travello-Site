import { useEffect, useMemo, useState } from 'react'
import { CitySearchContext, loadCitySearchIndex } from './citySearchState'

export const CitySearchProvider = ({ children }) => {
  const [citySearchIndex, setCitySearchIndex] = useState([])
  const [isCitySearchLoading, setIsCitySearchLoading] = useState(true)
  const [citySearchError, setCitySearchError] = useState('')

  useEffect(() => {
    let active = true

    loadCitySearchIndex()
      .then((cities) => {
        if (active) {
          setCitySearchIndex(cities)
          setCitySearchError('')
        }
      })
      .catch(() => {
        if (active) {
          setCitySearchError('City suggestions could not be loaded.')
        }
      })
      .finally(() => {
        if (active) {
          setIsCitySearchLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [])

  const value = useMemo(
    () => ({
      citySearchIndex,
      citySearchError,
      isCitySearchLoading,
    }),
    [citySearchError, citySearchIndex, isCitySearchLoading],
  )

  return <CitySearchContext.Provider value={value}>{children}</CitySearchContext.Provider>
}
