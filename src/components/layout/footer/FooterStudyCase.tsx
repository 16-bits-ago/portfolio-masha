import { useLocation } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const FooterStudyCase = () => {
  const { pathname } = useLocation()
  return (
    <>
      <footer className="footer-border-studycase">
        {pathname === '/projectorLayout' && (
          <div className="container footer-studycase">
            <Link className="footer-studycase2-link" to="/projectorLayout#start">
              <span>START</span>
            </Link>
            <Link
              className="footer-studycase2-link"
              to="/projectorLayout#emphathize"
            >
              <span>1/ EMPHATHIZE</span>
            </Link>
            <Link
              className="footer-studycase2-link"
              to="/projectorLayout#define"
            >
              <span>2/ DEFINE</span>
            </Link>
            <Link
              className="footer-studycase2-link"
              to="/projectorLayout#ideate"
            >
              <span>3/ IDEATE</span>
            </Link>
            <Link
              className="footer-studycase2-link"
              to="/projectorLayout#prototype"
            >
              <span>4/ PROTOTYPE</span>
            </Link>
            <Link className="footer-studycase2-link" to="/projectorLayout#test">
              <span>5/ TEST</span>
            </Link>
          </div>
        )}
        {pathname === '/zernoEcomers' && (
          <div className="container footer-studycase">
            <Link className="footer-studycase1-link" to="/zernoEcomers#start">
              <span>START</span>
            </Link>
            <Link
              className="footer-studycase1-link"
              to="/zernoEcomers#emphathize"
            >
              <span>1/ EMPHATHIZE</span>
            </Link>
            <Link className="footer-studycase1-link" to="/zernoEcomers#define">
              <span>2/ DEFINE</span>
            </Link>
            <Link className="footer-studycase1-link" to="/zernoEcomers#ideate">
              <span>3/ IDEATE</span>
            </Link>
            <Link
              className="footer-studycase1-link"
              to="/zernoEcomers#prototype"
            >
              <span>4/ PROTOTYPE</span>
            </Link>
            <Link className="footer-studycase1-link" to="/zernoEcomers#test">
              <span>5/ TEST</span>
            </Link>
          </div>
        )}
      </footer>
    </>
  )
}

export default FooterStudyCase
