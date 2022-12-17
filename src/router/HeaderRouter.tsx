import { Routes, Route } from "react-router-dom"
import About from "../components/About"
import Resume from "../components/Resume"
import Home from "../components/Home"
import NoPage from "../components/NoPage"
import Layout from "../components/layout/Layout"

function HeaderRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="portfolio-masha" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}

export default HeaderRouter
