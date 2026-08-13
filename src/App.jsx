import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './Pages/Homepage'
import Discover from './Pages/Discover'
import Plan from './Pages/Plan'
import { CitySearchProvider } from './context/CitySearchContext'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Homepage />} />
      <Route path='discover' element={<Discover />} />
      <Route path='plan' element={<Plan />} />
    </Route>
  )
)
const App = () => {
  return (
    <CitySearchProvider>
      <RouterProvider router={router} />
    </CitySearchProvider>
  )
}

export default App
