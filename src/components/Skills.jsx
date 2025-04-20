import React, { useState } from "react"
import { Cpu } from "lucide-react"

const skills = [
  // Frontend
  { name: "HTML", category: "frontend", level: 90, icon: "/skills/html.png" },
  { name: "CSS", category: "frontend", level: 85, icon: "/skills/css.png" },
  { name: "JavaScript", category: "frontend", level: 85, icon: "/skills/javascript.png" },
  { name: "React", category: "frontend", level: 80, icon: "/skills/react.png" },
  { name: "Redux", category: "frontend", level: 75, icon: "/skills/redux.png" },
  { name: "Tailwind CSS", category: "frontend", level: 85, icon: "/skills/tailwind_css.png" },
  { name: "Bootstrap", category: "frontend", level: 80, icon: "/skills/bootstrap.png" },
  { name: "TypeScript", category: "frontend", level: 75, icon: "/skills/typescript.png" },
  { name: "Next.js", category: "frontend", level: 70, icon: "/skills/next_js.png" },
  { name: "Vite", category: "frontend", level: 70, icon: "/skills/vite.png" },

  // Backend
  { name: "Node.js", category: "backend", level: 70, icon: "/skills/node_js.png" },
  { name: "Express.js", category: "backend", level: 70, icon: "/skills/express.png" },
  { name: "PHP", category: "backend", level: 60, icon: "/skills/php.png" },
  { name: "REST API", category: "backend", level: 75, icon: "/skills/rest.png" },

  // Database
  { name: "MongoDB", category: "database", level: 75, icon: "/skills/mongodb.png" },
  { name: "MySQL", category: "database", level: 70, icon: "/skills/mysql.png" },
  { name: "Firebase", category: "database", level: 65, icon: "/skills/firebase.png" },

  // Tools
  { name: "VS Code", category: "tools", level: 90, icon: "/skills/visual_studio_code.png" },
  { name: "Git", category: "tools", level: 85, icon: "/skills/git.png" },
  { name: "GitHub", category: "tools", level: 85, icon: "/skills/github.png" },
  { name: "WordPress", category: "tools", level: 75, icon: "/skills/wordpress.png" },
  { name: "Jest", category: "tools", level: 60, icon: "/skills/jest.png" },
  { name: "Jira", category: "tools", level: 65, icon: "/skills/jira.png" },
  { name: "postman", category: "tools", level: 65, icon: "/skills/postman.png" },
  { name: "ShadCN/UI", category: "tools", level: 70, icon: "/skills/shadcn_ui.png" },
  { name: "npm", category: "tools", level: 80, icon: "/skills/npm.png" },
]

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Cpu size={28} className="text-green-400" />
          <h2 className="text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              Skills
            </span>
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-lg bg-green-900/20 backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-green-500 text-black shadow-lg"
                    : "text-green-400 hover:bg-green-800/30"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-black/30 border border-green-500/20 rounded-lg p-5 hover:border-green-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-black/50 border border-green-500/30 p-2 group-hover:border-green-500/60 transition-all duration-300 overflow-hidden">
                  <img
                    src={skill.icon || `/placeholder.svg?height=40&width=40`}
                    alt={skill.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium">{skill.name}</h3>
                  <span className="text-xs text-gray-400">{skill.category}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-green-400/70">Proficiency</span>
                <span className="text-green-400 text-sm">{skill.level}%</span>
              </div>

              <div className="w-full bg-green-900/20 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-300 h-2.5 rounded-full group-hover:animate-pulse"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
