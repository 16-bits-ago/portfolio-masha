import { ReactComponent as CircleTitle } from '../../assets/circleTitle.svg'
import prototypeBG1 from '../../assets/prototypeBG1.png'
import FigmaEmbeded from '../layout/figma embeded kit/figmaEmbeded'
import projectorFrame from '../../assets/projectorHighRes.png'

const ZernoPrototype = () => {
  return (
    <>
      <div className="container mb-80" id="prototype">
        <div className="frame-block-title">
          <CircleTitle />
          <h1>4 / PROTOTYPE</h1>
          <CircleTitle />
        </div>
        <div className="emphathize-block1-margin40">
          <div className="emphathize-block1-left">
            <span>4 / PROTOTYPE</span>
            <h3>Hi-Fi Prototype</h3>
          </div>
          <div className="emphathize-block1-right">
            <span className="bold-text"></span>
            Once{' '}
            <span className="bold-text">
              I've noted down and fixed all the identified mistakes
            </span>{' '}
            from Mid-Fi usability testing, was created Hi-Fi prototype. My final
            work in <span className="bold-text">warm colors</span>, which I
            personally associate with a{' '}
            <span className="bold-text">great sunny day</span> of Ukrainian
            summer.
          </div>
        </div>
      </div>
      <div className="ideate-block2 mb-0">
        <div className="ideate-block2-wrap">
          <img src={prototypeBG1} alt="" />
        </div>
      </div>
      <div className="mb-80"></div>

      <div className="container mb-80">
        <FigmaEmbeded />
      </div>

      <div className="empatize-block3" id="test">
        <div className="container">
          <span>
            Results from 15 minutes long each usability Hi-Fi wireframe testing
            showed that none of the interviewees got lost when passing the given
            tasks. <span className="span-orange">3/5 users</span> noted that the
            site is trustworthy, <span className="span-orange">4/5 users</span>{' '}
            noted that site navigation is intuitive and convenient
          </span>
        </div>
      </div>

      <div className=" container emphathize-block1-margin40">
        <div className="emphathize-block1-left mb-80">
          <span>/ REFLECTIONS</span>
          <h3>Outcome</h3>
        </div>
      </div>
      <div className="container empatize-line"></div>
      <div className="container prototype-outcome">
        <div className="bold-text">Result:</div>
        <div className="prototype-outcome-row-content">
          After a long and interesting journey of studying the user, patterns of
          his behavior, interests and needs, studying competitors, the crazy
          brainstorming to find the right solutions, I finally came to a
          wonderful project that I am proud of -{' '}
          <span className="bold-text">E-Commerce website “ZERNO”</span>
        </div>
      </div>
      <div className="container empatize-line"></div>
      <div className="container prototype-outcome">
        <div className="bold-text">Takeaways:</div>
        <div className="prototype-outcome-row-content">
          <span>
            Before this project,{' '}
            <span className="bold-text">
              I did not understand what a user interview could be useful for
            </span>
            , and only after I conducted 3 interviews myself,
            <span className="bold-text">it became clear</span>. Nothing can
            demonstrate the presence of a website flaw more clearly than its
            target audience.{' '}
            <span className="bold-text">
              Real communication and observation is always more valuable
            </span>{' '}
            than any of the most beautiful assumptions.
          </span>
          <br />
          <br />
          <span>
            During my work on this project, I learned to first deeply
            <span className="bold-text">
              understand, and only then do it
            </span>{' '}
            beautifully. Know more about your user and client ={' '}
            <span className="bold-text">better insights</span> ={' '}
            <span className="bold-text">useful solutions</span>.
          </span>
          <br />
          <br />
          <span>
            After my work on this project I'll be more strong and confident as
            I've learned a new thing about me -{' '}
            <span className="bold-text">communication with people</span>, seeing
            and{' '}
            <span className="bold-text">
              exploring their different visions and opinion is motivate me to do
              my best
            </span>
            .
          </span>
        </div>
      </div>
      <div className="container empatize-line"></div>
      <div className="container prototype-outcome mb-80">
        <div className="bold-text">Reflections:</div>
        <div className="prototype-outcome-row-content">
          It was fun to try something new and work with real client. It is a
          huge, meticulous and complex work, and it's cool! There were moments
          when I forgot about the time, because{' '}
          <span className="bold-text">
            I was passionate about my work, and I like what I did. I want more!
          </span>
        </div>
      </div>

      <div className="home-card-block">
        <div className="home-cards-text">
          <div className="card-content-text">
            <div className="card-content-text-block">
              <h1>Landing Page</h1>
              <div className="card-content-tag-block">
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
        </div>
        <div className="home-cards">
          <div className="card-img-border">
            <img className="card-img-size" src={projectorFrame} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ZernoPrototype
