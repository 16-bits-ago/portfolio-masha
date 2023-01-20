import { ReactComponent as ProjectorBlueClyaksa } from '../../assets/ProjectorBlueClyaksa.svg'
import ProjectorPrototypeBigImg from '../../assets/ProjectorPrototypeBigImg.png'
import ProjectorFinalDesign from '../../assets/ProjectorFinalDesign.png'

const ProjectorPrototype = () => {
  return (
    <>
      <div className="container" id="prototype">
        <div className="projector-start-block3 mb-0">
          <div className="projector-start-block3-title">
            Mid-Fi wireframe <ProjectorBlueClyaksa />
          </div>
          <div className="projector-start-block3-content">
            <span className="bold-text"></span>
            Once my Lo-Fi wireframe ready and all my ideas examined and
            discussed with mentors and curators, I'm moving on to the next{' '}
            <br /> step - building Mid-fidelity wireframe. This stage is
            essential{' '}
            <span className="bold-text">
              to highlight the features and the behavior of elements
            </span>
            .
          </div>
        </div>
      </div>

      <div className="ideate-block2 mb-80">
        <div className="ideate-block2-wrap">
          <img src={ProjectorPrototypeBigImg} alt="" />
        </div>
      </div>

      <div className="projector-start-block3-title">
        Final Design <ProjectorBlueClyaksa />
      </div>

      <div className="ideate-block2 mb-80">
        <div className="projector-prototype-block3-wrap">
          <img src={ProjectorFinalDesign} alt="" />
        </div>
      </div>
    </>
  )
}

export default ProjectorPrototype
