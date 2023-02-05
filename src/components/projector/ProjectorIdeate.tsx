import { ReactComponent as ProjectorBlueClyaksa } from '../../assets/ProjectorBlueClyaksa.svg'
import ProjectorWorkingPeopleIdeate from '../../assets/ProjectorWorkingPeopleIdeate.png'

const ProjectorIdeate = () => {
  return (
    <>
      <div className="projector-empatize-block1 mb-80" id="ideate">
        <div className="projector-start-block3-title">
          Looking for the right solutions <ProjectorBlueClyaksa />
        </div>
        <div className="projector-empatize-block1-row">
          <div className="projector-empatize-block1-bg-left">
            <div className="projector-empatize-block1-card-content projector-empatize-block1-card-content-min">
              <div className="projector-empatize-block1-row-up-title">
                Insights +HMW
              </div>
              <div className="projector-empatize-block1-row-up-content">
                <span className="bold-text"></span>I have entered the stage of
                <span className="bold-text">
                  summarizing all the pain points and needs
                </span>{' '}
                detected during my research to identify exact problems of the
                users and finally find{' '}
                <span className="bold-text">the good solutions</span>. As a
                result was created a list from 3 general{' '}
                <span className="bold-text">how might we questions.</span>
              </div>
            </div>
          </div>
          <div className="projector-empatize-block1-card-right">
            <div className="projector-empatize-block1-card-right-img">
              <img src={ProjectorWorkingPeopleIdeate} alt="" />
            </div>
          </div>
        </div>
        <div className="projector-empatize-block1-row">
          <div className="projector-empatize-block1-card-left">
            <div className="projector-empatize-block1-card-content projector-ideate-block1-height">
              <div className="projector-empatize-block1-row-up-title color-black">
                Brainstorming <br />
                <br />
              </div>
              <div className="projector-empatize-block1-row-up-content color-black">
                <span className="bold-text"></span>
                To be sure that the decisions which are made at the end will be
                useful and meaningful, as a next step I'm actively looking for
                an answers on HMW questions. <br />
                <br />
                <span className="bold-text">
                  1. How might we make users feel confident about educational
                  material?
                </span>{' '}
                <br />
                <span className="bold-text">
                  2. How might we create a navigation menu more convenient, so
                  the user could easily find all needed information?
                </span>{' '}
                <br />
                <span className="bold-text">
                  3. How might we make users feel they will get a knowledge from
                  the courses?
                </span>
              </div>
            </div>
          </div>
          <div className="projector-empatize-block1-bg-right">
            <div className="projector-empatize-block1-card-content">
              <div className="projector-empatize-block1-row-up-title">
                Content-plan
              </div>
              <div className="projector-empatize-block1-row-up-content">
                <span className="bold-text"></span>
                Based on the answers that I received after brainstorming stage,
                was created the first drafts of the content-plan of my future
                design. <br />
                <br />
                <div className='projector-empatize-block1-card-content-block4'>
                  <div className='projector-empatize-block1-card-content-block4-list'>
                    <span className="bold-text">1. Hero header</span> <br />
                    <span className="bold-text">2. Our partners</span> <br />
                    <span className="bold-text">3. Advantages</span> <br />
                    <span className="bold-text">4. Our approach</span> <br />
                    <span className="bold-text">5. Reviews from mentors</span>
                  </div>
                  <div className='projector-empatize-block1-card-content-block4-list'>
                    <span className="bold-text">6.List of the courses</span> <br />
                    <span className="bold-text">7. Proposition of consultation</span> <br />
                    <span className="bold-text">8. News of faculty</span> <br />
                    <span className="bold-text">9. Footer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="projector-start-block3">
          <div className="projector-start-block3-title">
            Frankenshtein + Lo-Fi wireframe <ProjectorBlueClyaksa />
          </div>
          <div className="projector-start-block3-content">
            <span className="bold-text"></span>
            As soon <span className="bold-text">as content-plan was ready</span>
            , I began{' '}
            <span className="bold-text">reference research stage</span>,
            actively studied the websites of online schools and online <br className='br-home'/>
            universities,{' '}
            <span className="bold-text">
              noticed some features and patterns
            </span>
            . I took{' '}
            <span className="bold-text">screenshots of blocks of sites</span>{' '}
            that correspond to those that I already <br className='br-home'/> added to my content
            plan, stitched them together and{' '}
            <span className="bold-text">built a Frankenstein</span> based on
            these pieces, then created{' '}
            <span className="bold-text">Lo-Fi wireframe</span>.
          </div>
        </div>
      </div>

      <div className="projector-start-block4 mb-80">
        <div className="container">
          <div className="projector-start-block4-content">
            <span className="bold-text"></span>
            Step of building frankenshtein is useful because{' '}
            <span className="bold-text">
              that helps to not get confused
            </span>{' '}
            with different elements and helps to clearly{' '}
            <span className="bold-text">structure the work</span>. It gives an
            understanding of how this or that element will look like. Based on
            the frankenshtein it's much less frustrating{' '}
            <span className="bold-text">
              to build first sketches or Lo-fi wireframes
            </span>
            .
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectorIdeate
