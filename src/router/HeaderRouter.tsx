import { Routes, Route } from "react-router-dom"
import About from "../components/About"
import Home from "../components/Home"
import NoPage from "../components/NoPage"
import Layout from "../components/layout/Layout"
import ZernoEcomers from "../components/zerno/ZernoEcomersLayout"

function HeaderRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="portfolio-masha" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="zernoEcomers" element={<ZernoEcomers />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}

export default HeaderRouter
