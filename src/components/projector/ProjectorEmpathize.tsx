import { ReactComponent as ProjectorBlueClyaksa } from '../../assets/ProjectorBlueClyaksa.svg'
import ProjectorWorkingPeople from '../../assets/ProjectorWorkingPeople.png'
import currentStateEvaluation1 from '../../assets/currentStateEvaluation1.png'
import currentStateEvaluation2 from '../../assets/currentStateEvaluation2.png'
import currentStateEvaluation3 from '../../assets/currentStateEvaluation3.png'
import currentStateEvaluation4 from '../../assets/currentStateEvaluation4.png'

const ProjectorEmpathize = () => {
  return (
    <>
      <div className="projector-empatize-block1 mb-80" id="emphathize">
        <div className="projector-start-block3-title">
          User Research <ProjectorBlueClyaksa />
        </div>
        <div className="projector-empatize-block1-row">
          <div className="projector-empatize-block1-bg-left">
            <div className="projector-empatize-block1-card-content">
              <div className="projector-empatize-block1-row-up-title">
                User Interview
              </div>
              <div className="projector-empatize-block1-row-up-content">
                <span className="bold-text"></span>
                After defining the target audience, I've prepared an interview
                guide and conducted an interviews with{' '}
                <span className="bold-text">
                  {' '}
                  5 participants in age 16-30{' '}
                </span>{' '}
                years who is interested in studying online and{' '}
                <span className="bold-text">
                  {' '}
                  fit a description of TA{' '}
                </span>{' '}
                (brief: age, motivations, goals, pain points). Based on it were
                prepared questions for users.
              </div>
            </div>
          </div>
          <div className="projector-empatize-block1-card-right">
            <div className="projector-empatize-block1-card-right-img">
              <img src={ProjectorWorkingPeople} alt="" />
            </div>
          </div>
        </div>
        <div className="projector-empatize-block1-row">
          <div className="projector-empatize-block1-card-left">
            <div className="projector-empatize-block1-card-content">
              <div className="projector-empatize-block1-row-up-title color-black">
                Pain Points
              </div>
              <div className="projector-empatize-block1-row-up-content color-black">
                <span className="bold-text"></span>
                <span className="bold-text">1</span>. Quality of studying
                material{' '}
                <span className="bold-text">doesnt fit description</span> <br />
                <span className="bold-text">2</span>.{' '}
                <span className="bold-text">Absence of reviews</span> from
                students/mentors <br />
                <span className="bold-text">3</span>.{' '}
                <span className="bold-text">Not enough information</span> about
                specific course <br />
                <span className="bold-text">4</span>.{' '}
                <span className="bold-text">Not distinctive</span> search field{' '}
                <br />
                <span className="bold-text">5</span>.{' '}
                <span className="bold-text">Slow loading</span> of the website{' '}
                <br />
                <span className="bold-text">6</span>. No{' '}
                <span className="bold-text">feedback option</span>
              </div>
            </div>
          </div>
          <div className="projector-empatize-block1-bg-right">
            <div className="projector-empatize-block1-card-content">
              <div className="projector-empatize-block1-row-up-title">
                Questions
              </div>
              <div className="projector-empatize-block1-row-up-content">
                <span className="bold-text"></span>
                <span className="bold-text">1. How do you choose</span> where to
                take courses and how you've choose the specific one? <br />{' '}
                <span className="bold-text">2. How you decide</span> which
                online school/university website to visit? <br />{' '}
                <span className="bold-text">3.</span> Tell me about{' '}
                <span className="bold-text">your lastexperience</span> of buying
                courses online <br /> <span className="bold-text">4.</span> Tell
                me about a
                <span className="bold-text">
                  pleasurable/frustrating experience
                </span>{' '}
                you had at the online courses
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projector-emphathize-block3">
        <div className="projector-start-block3-title">
          Current state evaluation <ProjectorBlueClyaksa />
        </div>
        <div className="container projector-emphathize-block2 mb-40">
          <div className="projector-emphathize-block2-card">
            <img src={currentStateEvaluation1} alt="" />
            <div className="empatize-block2-list">
              <li>Pale first screen</li>
              <li>Short description</li>
              <li>Absence of any special visual</li>
              <li>Absence of partner's logos</li>
            </div>
          </div>
          <div className="projector-emphathize-block2-card">
            <img src={currentStateEvaluation2} alt="" />
            <div className="empatize-block2-list">
              <li>Nothing except of list of courses and filtration</li>
              <li>o extra information about approach</li>
              <li>No reviews</li>
            </div>
          </div>
          <div className="projector-emphathize-block2-card">
            <img src={currentStateEvaluation3} alt="" />
            <div className="empatize-block2-list">
              <li>Black colour is poor combined with blue background</li>
              <li>Number is the same as pointed on footer</li>
            </div>
          </div>
          <div className="projector-emphathize-block2-card">
            <img src={currentStateEvaluation4} alt="" />
            <div className="empatize-block2-list">
              <li>Too long footer</li>
              <li>Many holes on design of footer</li>
              <li>Number from the form doubles</li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectorEmpathize
