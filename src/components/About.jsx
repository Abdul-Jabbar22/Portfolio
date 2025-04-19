import { Terminal } from "lucide-react"
import React from "react"
import Resume from "./Resume"

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <Terminal size={28} className="text-green-400" />
          <h2 className="text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">About Me</span>
          </h2>
        </div>

        <div className="backdrop-blur-sm bg-black/30 border border-green-500/20 rounded-xl p-6 shadow-[0_0_15px_rgba(0,255,0,0.1)]">
          <div className="flex items-center mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-xs text-gray-400">about.jsx</div>
          </div>

          <p className="text-gray-300 leading-relaxed font-light">
            <span className="text-green-400 font-mono">const</span>{" "}
            <span className="text-purple-400 font-mono">aboutMe</span>{" "}
            <span className="text-green-400 font-mono">=</span> <span className="text-orange-300 font-mono">()</span>{" "}
            <span className="text-green-400 font-mono">=&gt;</span>{" "}
            <span className="text-orange-300 font-mono">{"{"}</span>
          </p>

          <p className="text-gray-300 leading-relaxed pl-6 my-4">
            I'm Abdul Jabbar, a passionate frontend and MERN stack developer based in Sahiwal, Pakistan. I love building
            clean, scalable, and user-friendly web applications using technologies like React, Node.js, and MongoDB.
            With hands-on experience in real-world projects and internships, I continuously aim to grow my skills and
            contribute to impactful digital solutions. I enjoy problem-solving, learning new tools, and collaborating in
            team environments that encourage innovation.
          </p>

          <p className="text-gray-300 leading-relaxed font-light">
            <span className="text-orange-300 font-mono">{"}"}</span>
          </p>
          <Resume/>
        </div>
      </div>
    </section>
  )
}

export default About
