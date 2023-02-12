import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Loader from '../loader/loader'
import FooterMainPages from './footer/FooterMainPages'
import FooterStudyCase from './footer/FooterStudyCase'
import HeaderLayout from './header/HeaderLayout'

const Layout = () => {
  const { pathname } = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  }, [])

  return (
    <>
      <Loader timeout={2000} />
      {isLoaded && (
        <>
          <HeaderLayout />
          <Outlet />
          {pathname === '/about' ||
          pathname === '/home' ||
          pathname === '/home/' ? (
            <FooterMainPages />
          ) : (
            <FooterStudyCase />
          )}
        </>
      )}
    </>
  )
}

export default Layout
