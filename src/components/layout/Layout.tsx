import { Outlet, useLocation } from 'react-router-dom'
import FooterMainPages from './footer/FooterMainPages'
import FooterStudyCase from './footer/FooterStudyCase'
import HeaderLayout from './header/HeaderLayout'

const Layout = () => {
  const { pathname } = useLocation()
  return (
    <>
      <HeaderLayout />
      <Outlet />
      {(pathname === '/about' || pathname === '/portfolio-masha') ? 
        <FooterMainPages /> : <FooterStudyCase/>
      }
    </>
  )
}

export default Layout
