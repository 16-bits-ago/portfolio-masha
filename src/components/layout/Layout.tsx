import { Outlet } from 'react-router-dom'
import FooterLayout from './footer/FooterLayout'
import HeaderLayout from './header/HeaderLayout'


const Layout = () => {
  return (
    <>
      <HeaderLayout />
        <Outlet />
      <FooterLayout />
    </>
  )
}

export default Layout
