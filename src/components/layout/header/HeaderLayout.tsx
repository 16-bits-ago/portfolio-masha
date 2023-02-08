import { NavLink, useLocation } from 'react-router-dom'
import resume from '../../../assets/Resume.pdf'

const HeaderLayout = () => {
  const { pathname } = useLocation()

  return (
    <>
      <header id="start"
        className={
          pathname === '/about' || pathname === '/portfolio-masha'
            ? 'header-border-sticky'
            : 'header-border'
        }
      >
        <div className="container App-header">
          <span>
            <NavLink
                to="/portfolio-masha"
                className="home-link"
              >
                Mariia Mykhailovska
              </NavLink>
          </span>
          <div className="header-right-wrap">
            <span className="header-link">
              <NavLink
                to="/portfolio-masha"
                className={({ isActive }) =>
                  isActive ? 'active-link-border' : ''
                }
              >
                Home
              </NavLink>
            </span>

            <span className="header-link">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'active-link-border' : ''
                }
              >
                About
              </NavLink>
            </span>

            <a
              className="btn download"
              href={resume}
              target="_blank"
              rel="noreferrer"
              /* download="CV_Mariia_Mykhailovska.pdf" */
            >
              <span style={{ paddingRight: 5 }}>Resume</span>
              <div className="cloud">
                <div className="arrow"></div>
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderLayout
