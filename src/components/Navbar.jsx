import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold border-b-2 border-white pb-0.5'
      : 'text-brand-200 hover:text-white transition-colors duration-150'

  return (
    <header className="bg-brand-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">FoxTow</span>
            <span className="hidden sm:block text-brand-300 text-sm font-medium">/ LA OPG</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/progress" className={linkClass}>Work Progress</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
          </nav>

          <button
            className="md:hidden text-brand-200 hover:text-white p-1 rounded"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 border-t border-brand-600 pt-4">
            <NavLink to="/" end className={linkClass} onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/progress" className={linkClass} onClick={() => setMobileOpen(false)}>Work Progress</NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setMobileOpen(false)}>About</NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}
