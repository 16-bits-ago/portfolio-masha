import { HashLink as Link } from 'react-router-hash-link'

const FooterStudyCase = () => {
  return (
    <>
      <footer className="footer-border-studycase">
        <div className="container footer-studycase">
          <Link to="/zernoEcomers#start">
            <span>START</span>
          </Link>
          <Link to="/zernoEcomers#emphathize">
            <span>1/ EMPHATHIZE</span>
          </Link>
          <Link to="/zernoEcomers#define">
            <span>2/ DEFINE</span>
          </Link>
          <Link to="/zernoEcomers#ideate">
            <span>3/ IDEATE</span>
          </Link>
          <Link to="/zernoEcomers#prototype">
            <span>4/ PROTOTYPE</span>
          </Link>
          <Link to="/zernoEcomers#test">
            <span>5/ TEST</span>
          </Link>
        </div>
      </footer>
    </>
  )
}

export default FooterStudyCase
