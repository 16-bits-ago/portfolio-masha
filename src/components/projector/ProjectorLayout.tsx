import ProjectorDefine from "./ProjectorDefine"
import ProjectorIdeate from "./ProjectorIdeate"
import ProjectorPrototype from "./ProjectorPrototype"
import ProjectorStart from "./ProjectorStart"
import ProjectorEmphathize from "./ProjectorEmpathize"
import Loader from "../loader/loader"

const ProjectorLayout = () => {
  return (
    <>
      <Loader timeout={2000} />
      <ProjectorStart />
      <ProjectorEmphathize />
      <ProjectorDefine />
      <ProjectorIdeate />
      <ProjectorPrototype />
    </>
  )
}

export default ProjectorLayout
