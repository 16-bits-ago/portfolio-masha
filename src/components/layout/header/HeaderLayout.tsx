import { NavLink } from 'react-router-dom'
import resume from '../../../assets/Resume.pdf'

const HeaderLayout = () => {
  return (
    <>
      <header className="header-border">
        <div className="container App-header">
          <span>Mariia Mykhailovska</span>
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
              download="CV_Mariia_Mykhailovska.pdf"
            >
              <span style={{paddingRight: 5}}>Resume</span>
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
