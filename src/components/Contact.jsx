import React from "react"


import { useState } from "react"
import { Mail, Send, Loader2 } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <Mail size={28} className="text-green-400" />
          <h2 className="text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              Contact Me
            </span>
          </h2>
        </div>

        <div className="backdrop-blur-sm bg-black/30 border border-green-500/20 rounded-xl p-8 shadow-[0_0_15px_rgba(0,255,0,0.1)]">
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                <Send size={24} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full p-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full p-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white h-32"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white font-medium rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
