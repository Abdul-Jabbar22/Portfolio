import { FileText, Download } from 'lucide-react'
import React from 'react'

const Resume = () => {
  return (
    <section className="py-16 px-6 bg-black text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <FileText size={28} className="text-green-400" />
          <h2 className="text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              My Resume
            </span>
          </h2>
        </div>

        <a
          // href="/abdul_jabbar_resume.pdf"
          download
          className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg bg-black border border-green-500 text-green-500 shadow-md transition-all duration-500 ease-in-out hover:bg-green-500 hover:text-black"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="flex items-center gap-2">
            <Download className="animate-bounce" />
            Download Resume
          </span>
        </a>
      </div>
    </section>
  )
}

export default Resume
