import { HashLink as Link } from 'react-router-hash-link'

const FooterStudyCase = () => {
  return (
    <>
      <footer className="footer-border-studycase">
        <div className="container footer-studycase">
          <Link className="footer-studycase-link" to="/zernoEcomers#start">
            <span>START</span>
          </Link>
          <Link className="footer-studycase-link" to="/zernoEcomers#emphathize">
            <span>1/ EMPHATHIZE</span>
          </Link>
          <Link className="footer-studycase-link" to="/zernoEcomers#define">
            <span>2/ DEFINE</span>
          </Link>
          <Link className="footer-studycase-link" to="/zernoEcomers#ideate">
            <span>3/ IDEATE</span>
          </Link>
          <Link className="footer-studycase-link" to="/zernoEcomers#prototype">
            <span>4/ PROTOTYPE</span>
          </Link>
          <Link className="footer-studycase-link" to="/zernoEcomers#test">
            <span>5/ TEST</span>
          </Link>
        </div>
      </footer>
    </>
  )
}

export default FooterStudyCase
