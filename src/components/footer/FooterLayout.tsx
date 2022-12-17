import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as RedHeart } from '../../assets/🦆 emoji _red heart_.svg'

const FooterLayout = () => {
  return (
    <>
      <footer className="container">
        <div className="footer">
          <div className="footer-left">
            <span>
              Shoot me an email! <RedHeart />
            </span>
            <span className="footer-left-orange">
              mykhailovska.mariia@gmail.com
            </span>
          </div>
          <div className="footer-right">
            <a
              href="https://www.linkedin.com/in/masha-mykhailovskaya-58769b1ba/"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">LinkedIn</button>
            </a>
            <a
              href="https://www.instagram.com/mykhailovskayam/"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">Instagram</button>
            </a>
          </div>
        </div>
      </footer>

      <Outlet />
    </>
  )
}

export default FooterLayout
