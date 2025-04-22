import React from "react"


import { useState } from "react"
import { Code, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "Furniture Store",
    tech: "PHP, MySQL",
    description: "An e-commerce platform for furniture sales with backend admin control.",
    image: "fyp.jpeg",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Job Portal ",
    tech: "MERN Stack ",
    description: "A Job website where Employer can pot job and Job-seeker can Apply for Jobs.",
    image: "job.png",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Book Store",
    tech: "MERN Stack",
    description: "A full-stack web app for browsing, adding, and buying books online.",
    image: "mern.png",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "E-Commerce Store",
    tech: "React.js",
    description: "A front-end only product browsing experience built with React.",
    image: "ecommerce.png",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Porfolio Website",
    tech: "React.js",
    description: "A front-end only product browsing experience built with React.",
    image: "portfolio.png",
    links: {
      demo: "#",
      github: "#",
    },
  },
]

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <Code size={28} className="text-green-400" />
          <h2 className="text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Projects</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative backdrop-blur-sm bg-black/40 rounded-xl overflow-hidden border border-green-500/10 hover:border-green-500/30 transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-10"></div>

              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              <div className="relative z-20 p-6 pt-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-green-400 mb-1">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.links.github}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      aria-label="View GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-green-300/80 mb-3">Tech Stack: {project.tech}</p>
                <p className="text-gray-300 text-sm">{project.description}</p>

                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform transition-transform duration-500 ${
                    hoveredIndex === i ? "translate-y-0" : "translate-y-full"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
