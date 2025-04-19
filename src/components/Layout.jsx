import { Outlet } from "react-router-dom"
import React from "react"

import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-green-900/20">
        <p>© {new Date().getFullYear()} Abdul Jabbar. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
