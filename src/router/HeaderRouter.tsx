import { Routes, Route } from "react-router-dom"
import About from "../components/About"
import Home from "../components/Home"
import Layout from "../components/layout/Layout"
import ZernoEcomers from "../components/zerno/ZernoEcomersLayout"
import ProjectorLayout from "../components/projector/ProjectorLayout"

function HeaderRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="home" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="zernoEcomers" element={<ZernoEcomers />} />
        <Route path="projectorLayout" element={<ProjectorLayout />} />
        <Route path="resume" element={<ProjectorLayout />} />
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default HeaderRouter
