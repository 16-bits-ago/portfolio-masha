import ProjectorDefine from "./ProjectorDefine"
import ProjectorIdeate from "./ProjectorIdeate"
import ProjectorPrototype from "./ProjectorPrototype"
import ProjectorStart from "./ProjectorStart"
import ProjectorEmphathize from "./ProjectorEmpathize"

const ProjectorLayout = () => {
  return (
    <>
      <ProjectorStart />
      <ProjectorEmphathize />
      <ProjectorDefine />
      <ProjectorIdeate />
      <ProjectorPrototype />
    </>
  )
}

export default ProjectorLayout
