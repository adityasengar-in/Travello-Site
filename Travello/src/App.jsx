import React from 'react'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router'
import Layout from './Layout'
import Homepage from './Pages/Homepage'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Homepage />} />
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router}/>
}

export default App