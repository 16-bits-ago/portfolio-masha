import { Link } from 'react-router-dom'
import { ReactComponent as RedHeart } from '../../../assets/redHeart.svg'
import resumePDF from '../../../assets/Resume.pdf'

const FooterMainPages = () => {
  return (
    <>
      <footer className="footer-border">
        <div className="container footer">
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

        <div className="container footer-768">
          <div className="footer-768-up">© 2023 All Rights Reserved</div>
          <div className="footer-768-down">
            <a
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">Resume</button>
            </a>
            <a
              href="https://www.linkedin.com/in/masha-mykhailovskaya-58769b1ba/"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">Linkedin</button>
            </a>
            <Link
              className="home-link"
              to="/home"
              onClick={() =>
                window.location.assign('mailto:mykhailovska.mariia@gmail.com')
              }
            >
              <button type="button">Email</button>
            </Link>
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
    </>
  )
}

export default FooterMainPages
