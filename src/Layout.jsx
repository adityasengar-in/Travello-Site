import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
const Layout = () => {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior

    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo({ left: 0, top: 0 })
    document.documentElement.style.scrollBehavior = previousScrollBehavior
  }, [pathname, search])

  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout
