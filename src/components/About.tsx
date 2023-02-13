import React from 'react'
import avatar from '../assets/avatar.png'
import resume from '../assets/Resume.pdf'

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="about-wrapper">
          <div className="about-block-left">
            <div className="about-block-left-title">
              <div>
                <h1 className="margin-0">
                  Hi! <span className="span-orange">I'm Mariia,</span>
                </h1>
                <span className='about-block-left-junior'>Junior UX/UI Designer</span>
              </div>
              <a
                className="about-download-link-768"
                href={resume}
                download="CV_Mariia_Mykhailovska.pdf"
              >
                <button>DOWNLOAD MY RESUME</button>
              </a>
            </div>
            <div>
              <img className="about-avatar" src={avatar} alt="" />
              <div className="about-download-link">
                <a href={resume} download="CV_Mariia_Mykhailovska.pdf">
                  <button>DOWNLOAD MY RESUME</button>
                </a>
              </div>
            </div>
          </div>
          <div className="about-block-right">
            <div className="about-block-left-title about-height-768 mb-36">
              <h1 className="margin-0">
                Hello, <span className="span-orange">colleagues!</span>
              </h1>
              <span>It's nice to e-meet you here.</span>
            </div>
            <div className="mb-36 ">
              <p className="m-0">
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
            </div>
            <div className="mb-30 ">
              <p className="m-0">
                <span className="span-orange-background">
                  Constantly learning,
                </span>{' '}
                sometimes I can find a solution faster, than you{' '}
                <br className="br-home" /> manage to blink 😉
              </p>
            </div>
            <div className="mb-30 ">
              <p className="m-0">
                For me, as for a{' '}
                <span className="bold-text">marketing oriented person,</span> it
                was always a{' '}
                <span className="span-orange-background">
                  big pleasure to help people
                </span>{' '}
                and make their life better and easier with my work.
              </p>
            </div>
            <div className="mb-40 ">
              <p className="m-0">
                As an a visual designer{' '}
                <span className="span-orange-background">
                  with marketing, and research experience,
                </span>{' '}
                <br className="br-home" />
                <span className="bold-text">
                  I am currently looking for opportunities to grow
                </span>{' '}
                as a UX/UI Designer.
              </p>
            </div>
            <div className="about-hard-skills">
              <span className="bold-text">Hard Skills:</span>
              <p className="m-0">
                Wireframing <span className="span-orange">/</span> Usability
                studies <span className="span-orange">/</span> Presentation{' '}
                <span className="span-orange">/</span> Prototyping{' '}
                <span className="span-orange">/</span>
                Design Thinking <span className="span-orange">/</span> UI Design{' '}
                <span className="span-orange">/</span> UX Research{' '}
                <span className="span-orange">/</span> Drawing skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About
