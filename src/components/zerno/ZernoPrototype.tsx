import { ReactComponent as CircleTitle } from '../../assets/circleTitle.svg'
import prototypeBG1 from '../../assets/prototypeBG1.png'

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
    </>
  )
}

export default ZernoPrototype
