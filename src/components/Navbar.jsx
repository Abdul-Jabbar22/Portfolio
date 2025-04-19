import React from "react"

import { useState, useEffect } from "react"

import { Link, useLocation } from "react-router-dom"
import { User, Settings, Code, Briefcase, Mail, Home, Menu, X, FileText } from "lucide-react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { to: "/", label: "Home", icon: <Home size={16} className="text-green-400" /> },
    { to: "/about", label: "About", icon: <User size={16} className="text-green-400" /> },
    { to: "/skills", label: "Skills", icon: <Settings size={16} className="text-green-400" /> },
    { to: "/experience", label: "Experience", icon: <Briefcase size={16} className="text-green-400" /> },

    { to: "/projects", label: "Projects", icon: <Code size={16} className="text-green-400" /> },
    { to: "/contact", label: "Contact", icon: <Mail size={16} className="text-green-400" /> },
    { to: "/resume", label: "Resume", icon: <FileText size={16} className="text-green-400" /> },
  ]

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-xl ${scrolled ? "bg-black/80" : "bg-black/60"} text-white shadow-lg z-50 transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-xl font-bold text-green-400 flex items-center gap-2 relative group">
          <span className="absolute -inset-1 bg-green-500/20 rounded-lg blur-sm group-hover:bg-green-500/30 transition-all duration-300"></span>
          <Home size={20} className="relative z-10" />
          <span className="relative z-10">Abdul Jabbar</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className={`flex items-center gap-2 hover:text-green-400 transition-all duration-300 relative group py-2 ${
                  location.pathname === link.to ? "text-green-400" : "text-white"
                }`}
              >
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                    location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-400 focus:outline-none relative group"
            aria-label="Toggle menu"
          >
            <span className="absolute -inset-2 bg-green-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">{menuOpen ? <X size={24} /> : <Menu size={24} />}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } backdrop-blur-xl bg-black/90 text-white`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-base">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full text-center">
              <Link
                to={link.to}
                className={`flex items-center justify-center gap-3 transition-all duration-300 py-2 px-4 hover:bg-green-900/20 rounded-lg ${
                  location.pathname === link.to ? "text-green-400 bg-green-900/10" : "text-white hover:text-green-400"
                }`}
              >
                {link.icon} {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
