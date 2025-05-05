import { Briefcase, Calendar } from 'lucide-react'
import React from "react"

const experiences = [
  {
    company: "Self-Learning ",
    position: "Web Developer (Self-Initiated Projects)",
    period: "Jan 2025 to Continue",
    description:
      "Over 6 months of self-driven experience where I developed multiple full-stack web applications using the MERN stack. This includes real-world projects such as a Job Portal with JWT authentication, Role-Based Access Control, Event Management System, and a Portfolio website. Focused on writing scalable code, implementing best practices, and using modern frontend/backend tools.",
    skills: [
      "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JWT",
      "Tailwind CSS", "REST APIs", "Full-Stack Development", "Project Deployment", "Git", "Vercel", "Netlify"
    ],
  },
  {
    company: "Txend",
    position: "Internship – Paid",
    period: "Nov 2024 to Jan 2025",
    description:
      "3-month internship where I gained hands-on experience in React.js development and manual software testing (SQA). Contributed to a production-grade React.js project and participated in writing test cases using Jest and tracking progress with Jira.",
    skills: [
       "React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Jest",
      "Jira", "Software Testing", "QA"
    ],
  },
  {
    company: "Future Dev Solutions",
    position: "Web Developer Internship",
    period: "Sep 2024 to Oct 2024",
    description:
      "Worked on dynamic web applications using Next.js and React.js, focusing on performance optimization and responsive UI components.",
    skills: ["Next.js", "React.js"],
  },
  {
    company: "TheWestral.com",
    position: "Order Manager",
    period: "Sep 2023 to Sep 2024",
    description: "Managed orders and operations in an e-commerce environment, ensuring timely fulfillment and smooth workflow.",
    skills: ["E-commerce", "Operations", "Management"],
  },
]

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase size={28} className="text-green-400" />
          <h2 className="text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              Experience
            </span>
          </h2>
        </div>

        <div className="relative border-l-2 border-green-500/30 pl-8 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-[41px] -top-1 w-8 h-8 bg-black rounded-full border-2 border-green-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              <div className="backdrop-blur-sm bg-black/30 border border-green-500/20 rounded-xl p-6 shadow-[0_0_15px_rgba(0,255,0,0.05)] hover:border-green-500/40 transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.position} <span className="text-green-400">@ {exp.company}</span>
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-green-900/30 text-green-400 border border-green-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
