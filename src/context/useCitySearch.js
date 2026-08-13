import { useContext } from 'react'
import { CitySearchContext } from './citySearchState'

export const useCitySearch = () => {
  const context = useContext(CitySearchContext)

  if (!context) {
    throw new Error('useCitySearch must be used inside CitySearchProvider')
  }

  return context
}
