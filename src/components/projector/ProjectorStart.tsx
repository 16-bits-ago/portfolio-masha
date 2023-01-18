import projectorBG1 from '../../assets/projectorBG1.png'
import { ReactComponent as ProjectorBaby } from '../../assets/ProjectorBaby.svg'
import { ReactComponent as ProjectorScroll } from '../../assets/ProjectorScroll.svg'
import { ReactComponent as ProjectorLightbulb } from '../../assets/ProjectorLightbulb.svg'
import { ReactComponent as ProjectorCheckSquare } from '../../assets/ProjectorCheckSquare.svg'
import { ReactComponent as ProjectorChatTeardropText } from '../../assets/ProjectorChatTeardropText.svg'
import { ReactComponent as ProjectorBGStar } from '../../assets/ProjectorBGStar.svg'
import { ReactComponent as ProjectorBlueClyaksa } from '../../assets/ProjectorBlueClyaksa.svg'

const ProjectorStart = () => {
  return (
    <>
      <div className="ideate-block2 mb-0">
        <div className="ideate-block2-wrap projector-start-block1">
          <img src={projectorBG1} alt="" />
        </div>
      </div>
      <div className="projector-start-block2-bg">
        <div className="container">
          <div className="zerno-start-block1">
            <div className="zerno-start-block1-left">
              <div>
                <div className="zerno-start-block1-left-content-row">
                  <span className="bold-text">My role:</span>
                  <span>Solo UX/UI designer</span>
                </div>
                <div className="zerno-start-block1-left-content-row">
                  <span className="bold-text">Duration:</span>
                  <span>4 weeks (August 2022)</span>
                </div>
                <div className="zerno-start-block1-left-content-row">
                  <span className="bold-text">Tools:</span>
                  <span>Figma, Google Drive</span>
                </div>
              </div>
              <button className="bg-blue color-white">
                <span className="bold-text">FINAL WORK</span>
              </button>
            </div>
            <div className="zerno-start-block1-right">
              <span className="bold-text">Problem Statements:</span>
              <div>
                <span className="span-blue-background color-white">
                  01. No CTA's on the page, except “Buy course”
                </span>
                <p>
                  Old faculty page design doesn't consist with any information
                  except the list of available courses and doesn't advertise
                  university approach.
                </p>
              </div>
              <div>
                <span className="span-blue-background color-white">
                  02. Old page of Faculty doesn't have reviews from the students
                </span>
                <p>
                  The absence of reviews from the students and mentors on the
                  page increases the likelihood of leaving the page a large
                  number of potential students.
                </p>
              </div>
            </div>
          </div>
          <div className="projector-start-block2-progress">
            <div className="projector-start-block2-progress-title">
              Design Process <ProjectorBlueClyaksa />
            </div>
            <div className="projector-start-block2-progress-wrap">
              <div className="projector-start-block2-progress-card">
                <ProjectorBaby />
                <div className="projector-start-block2-progress-card-down">
                  <ProjectorBGStar />
                  <span>1. EMPATHIZE</span>
                </div>
              </div>
              <div className="projector-start-block2-progress-card">
                <ProjectorScroll />
                <div className="projector-start-block2-progress-card-down">
                  <ProjectorBGStar />
                  <span>2. DEFINE</span>
                </div>
              </div>
              <div className="projector-start-block2-progress-card">
                <ProjectorLightbulb />
                <div className="projector-start-block2-progress-card-down">
                  <ProjectorBGStar />
                  <span>3. IDEATE</span>
                </div>
              </div>
              <div className="projector-start-block2-progress-card">
                <ProjectorCheckSquare />
                <div className="projector-start-block2-progress-card-down">
                  <ProjectorBGStar />
                  <span>4. PROTOTYPE</span>
                </div>
              </div>
              <div className="projector-start-block2-progress-card">
                <ProjectorChatTeardropText />
                <div className="projector-start-block2-progress-card-down">
                  <ProjectorBGStar />
                  <span>5. TEST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="projector-start-block3">
          <div className="projector-start-block3-title">
            Background <ProjectorBlueClyaksa />
          </div>
          <div className="projector-start-block3-content">
            <span className="bold-text"></span>
            One beautiful autumn day my best friend advised me to consider
            starting learning in the UX/UI field, as she just graduated from{' '}
            <br /> one
            <span className="bold-text"> awesome online university </span> and 1
            month after finishing it, she got her first job. I listened to it
            then and 6 months later I make this <br /> project as{' '}
            <span className="bold-text"> a 1-st course work </span> within the
            same online university course. My friend should be proud of me as I
            did it and my mentors <br /> praised me very much.
          </div>
        </div>
      </div>

      <div className="projector-start-block4 mb-80">
        <div className="container projector-start-block4-wrap">
          <div className="projector-start-block4-title">Goal</div>
          <div className="projector-start-block4-content">
            <span className="bold-text"></span>
            To create <span className="bold-text">
              {' '}
              useful, minimalistic{' '}
            </span>{' '}
            website which meets all the requirements of the client, matches with
            an <span className="bold-text"> own style </span> of an old design.
            To <span className="bold-text"> get more conversions </span> with
            help of new design and{' '}
            <span className="bold-text"> drive more sales.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectorStart
