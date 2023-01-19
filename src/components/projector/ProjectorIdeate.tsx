import { ReactComponent as ProjectorBlueClyaksa } from '../../assets/ProjectorBlueClyaksa.svg'
import { ReactComponent as ProjectorWorkingPeople } from '../../assets/ProjectorPeopleWorkingIdeate.svg'

const ProjectorIdeate = () => {
  return (
    <>
      <div className="projector-empatize-block1 mb-80">
        <div className="projector-start-block3-title">
          Looking for the right solutions <ProjectorBlueClyaksa />
        </div>
        <div className="projector-empatize-block1-row">
          <div className="projector-empatize-block1-bg-left">
            <div className="container projector-empatize-block1-card-content">
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
              <ProjectorWorkingPeople />
            </div>
          </div>
        </div>
        <div className="projector-empatize-block1-row">
          <div className="projector-empatize-block1-card-left">
            <div className="container projector-empatize-block1-card-content projector-ideate-block1-height">
              <div className="projector-empatize-block1-row-up-title color-black">
                Brainstorming <br /><br />
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
            <div className="container projector-empatize-block1-card-content">
              <div className="projector-empatize-block1-row-up-title">
                Content-plan
              </div>
              <div className="projector-empatize-block1-row-up-content">
                <span className="bold-text"></span>
                Based on the answers that I received after brainstorming stage,
                was created the first drafts of the content-plan of my future
                design. <br />
                <br />
                <span className="bold-text">1. Hero header</span> <br />
                <span className="bold-text">2. Our partners</span> <br />
                <span className="bold-text">3. Advantages</span> <br />
                <span className="bold-text">4. Our approach</span> <br />
                <span className="bold-text">5. Reviews from mentors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectorIdeate
