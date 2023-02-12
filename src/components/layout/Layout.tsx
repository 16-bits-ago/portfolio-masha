import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Loader from '../loader/loader'
import FooterMainPages from './footer/FooterMainPages'
import FooterStudyCase from './footer/FooterStudyCase'
import HeaderLayout from './header/HeaderLayout'

const Layout = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = React.useState(true)
  setTimeout(() => {
    setOpen(false)
  }, 3000)

  return (
    <>
      {open ? (
        <Loader/>
      ) : (
        <>
          <HeaderLayout />
          <Outlet />
          {pathname === '/about' ||
          pathname === '/portfolio-masha' ||
          pathname === '/portfolio-masha/' ? (
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
