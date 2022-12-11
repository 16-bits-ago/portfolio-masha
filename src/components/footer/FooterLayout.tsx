import { Outlet, NavLink } from 'react-router-dom'
import { ReactComponent as ReactLogo } from '../../assets/mashaLogo.svg'
const FooterLayout = () => {
  return (
    <>
      <footer className="container">
        <div className="footer">
          <div className="footer-left">
            <ReactLogo style={{ paddingRight: 150 }} />

            <div className="footer-left-menu">
              <span className="span-orange-background footer-left-menu-title">
                MENU
              </span>
              <span className="header-link">
                <NavLink to="/">Home</NavLink>
              </span>

              <span className="header-link">
                <NavLink to="/about">About</NavLink>
              </span>

              <span className="header-link">
                <NavLink to="/resume">Resume</NavLink>
              </span>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-menu ">
              <span className="span-orange-background footer-right-menu-title">
                SOCIAL
              </span>
              <span className="header-link">
                Linkedin
              </span>
            </div>
          </div>
        </div>
      </footer>

      <Outlet />
    </>
  )
}

export default FooterLayout
