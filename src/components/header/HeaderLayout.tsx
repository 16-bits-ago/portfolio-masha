import { Outlet, NavLink } from 'react-router-dom'

const HeaderLayout = () => {
  return (
    <>
      <header className="container App-header">
        <span>Mariia Mykhailovska</span>
        <div>
          <span className="header-link">
            <NavLink
              to="/"
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

          <span className="header-link">
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? 'active-link-border' : ''
              }
            >
              Resume
            </NavLink>
          </span>
        </div>
      </header>

      <Outlet />
    </>
  )
}

export default HeaderLayout
