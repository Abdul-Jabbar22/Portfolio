import { Routes, Route } from "react-router-dom"
import React from "react"
import Layout from "./components/Layout"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import CursorTrail from "./components/CursorTrail"

const App = () => {
  return (
    <>

    <CursorTrail />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
