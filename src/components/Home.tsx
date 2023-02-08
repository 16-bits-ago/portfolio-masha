import * as React from 'react'
import { ReactComponent as ReactLogo } from '../assets/mashaLogo.svg'
import { ReactComponent as ArrowDown } from '../assets/arrowDown.svg'
import zernoFrame from '../assets/zernoHighRes.png'
import projectorFrame from '../assets/projectorHighRes.png'
import { Link } from 'react-router-dom'
import resumePDF from '../assets/Resume.pdf'
import {HashLink} from 'react-router-hash-link'

const Home = () => {
  return (
    <React.Fragment>
      <div className="container mt-80">
        <div className="home-intro-block mt-30">
          <div className="home-intro-logo">
            <ReactLogo />
          </div>
          <h1 className="m-0">
            Hi! <span className="span-orange">I'm Mariia,</span>
          </h1>
          <div className="home-intro-logo-text m-0">
            <p>
              UX/UI designer with a background in Advertising.{' '}
              <br />
              <span className="span-orange-background">
                I love research,
              </span>{' '}
              improve{' '}
              <span className="span-orange-background">
                and make a beautiful
              </span>{' '}
              things. <br />
              Let's collaborate and make{' '}
              <span className="span-orange-background">awesome works</span>{' '}
              together!
            </p>
          </div>
        </div>
        <div className="home-intro-block-footer">
          <div className="home-intro-block-footer-left">
            <span>
              <a
                className="home-link"
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
            </span>
            <span>
              <a
                className="home-link"
                href={resumePDF}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </span>
            <span>
              <Link
                className="home-link"
                to="/portfolio-masha"
                onClick={() =>
                  window.location.assign('mailto:mykhailovska.mariia@gmail.com')
                }
              >
                Email
              </Link>
            </span>
          </div>
          <div>
            <ArrowDown className="arrow-img" />
          </div>
          <span className="home-intro-block-footer-right ">
            Cyprus. Limassol
          </span>
        </div>
      </div>
      <div className="home-card-block">
        <div className="home-cards">
          <div className="card-img-border">
            <img className="card-img-size" src={zernoFrame} alt="" />
          </div>
        </div>

        <HashLink to="/zernoEcomers#start" className="home-cards-text ">
          <div className="card-content-text ">
            <div className="card-content-text-block ">
              <h1 className="m-0">E-Commerce</h1>
              <div className="card-content-tag-block mt-40">
                <span className="card-content-tag">UX research</span>
                <span className="card-content-tag2">Redesign</span>
                <span className="card-content-tag3">User Interface</span>
              </div>
              <p>
                Scrutiny careful research, deep analysis and creating beautiful
                minimalistic website for an online store of Ukrainian clothes.
              </p>
              <span className="tap-button-block">TAP TO EXPLORE</span>
            </div>
          </div>
        </HashLink>
      </div>

      <div className="home-card-block">
        <HashLink to="/projectorLayout#start" className="home-cards-text2">
          <div className="card-content-text">
            <div className="card-content-text-block">
              <h1 className='m-0'>Landing Page</h1>
              <div className="card-content-tag-block mt-40">
                <span className="card-content-tag">User Interface</span>
                <span className="card-content-tag2">Stylish</span>
                <span className="card-content-tag3">User Experience</span>
              </div>
              <p>
                Crafting redesign of page of faculty for an online university
                with its own taste and unique style.
              </p>
              <span className="tap-button-block">TAP TO EXPLORE</span>
            </div>
          </div>
        </HashLink>
        <div className="home-cards">
          <div className="card-img-border">
            <img className="card-img-size" src={projectorFrame} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
