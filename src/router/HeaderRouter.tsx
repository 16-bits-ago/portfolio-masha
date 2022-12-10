import { Routes, Route } from "react-router-dom"
import About from "../components/About"
import Resume from "../components/Resume"
import Home from "../components/Home"
import HeaderLayout from "../components/header/HeaderLayout"
import NoPage from "../components/NoPage"

function HeaderRouter() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}

export default HeaderRouter
