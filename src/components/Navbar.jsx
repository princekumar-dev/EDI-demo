import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Orbit } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Prototype', href: '/prototype' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-blue-100 shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <Orbit className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-gradient">
              EduOrbit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 hover:text-sky-600 ${
                  isActive(item.href)
                    ? 'text-sky-600 border-b-2 border-sky-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/get-started" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-white rounded-xl p-4 shadow-lg border border-blue-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-all duration-300 hover:text-sky-600 px-3 py-2 rounded-lg hover:bg-blue-50 ${
                    isActive(item.href) ? 'text-sky-600 bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/get-started" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar