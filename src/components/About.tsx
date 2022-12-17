import React from 'react'
import avatar from '../assets/avatar.png'

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="about-wrapper">
          <div className="about-block-left">
            <div className="about-block-left-title">
              <h1 className="margin-0">
                Hi! <span className="span-orange">I'm Mariia,</span>
              </h1>
              <span>Junior UX/UI Designer</span>
            </div>
            <img style={{width: 270}} src={avatar} alt="" />
            <a href="">
              <button>DOWNOLAD MY RESUME</button>
            </a>
          </div>
          <div className="about-block-right">
            <div className="about-block-left-title">
              <h1 className="margin-0">
                Hello, <span className="span-orange">colleagues!</span>
              </h1>
              <span>It's nice to e-meet you here.</span>
            </div>
            <p>
              I'm a creative, curious girl with{' '}
              <span className="span-orange-background">
                good communication skills,
              </span>{' '}
              which always was helpful in my carreer as also my{' '}
              <span className="bold-text">
                developed sense of style and time, and unshakable stress
                resistance.
              </span>{' '}
              I loove studying and explore new things.
            </p>
            <p>
              <span className="span-orange-background">
                Constantly learning,
              </span>{' '}
              sometimes I can find a solution faster, than you <br /> manage to blink
              😉
            </p>
            <p>
              For me, as for a{' '}
              <span className="bold-text">marketing oriented person,</span> it
              was always a{' '}
              <span className="span-orange-background">
                big pleasure to help people
              </span>{' '}
              and make their life better and easier with my work.
            </p>
            <div className="about-block-right-mini-titles">
              <span className="bold-text">Originally from Ukraine</span>
              <span className="bold-text">Currently at Cyprus</span>
              <span className="bold-text">Constantly inspired</span>
            </div>
            <p>
              As an a visual designer{' '}
              <span className="span-orange-background">
                with marketing, and research experience,
              </span>{' '}
              <br />
              <span className="bold-text">
                I am currently looking for opportunities to grow
              </span>{' '}
              as a UX/UI Designer.
            </p>
            <span className="bold-text">Hard Skills:</span>
            <p>
              Wireframing / Usability studies / Presentation / Prototyping /
              Design Thinking / UI Design / UX Research / Drawing skills
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About
