import React from 'react'
import { Link } from 'react-router-dom'
import { Orbit, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Prototype', href: '/prototype' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  return (
    <footer className="bg-white border-t border-blue-100 mt-20 shadow-lg">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 shadow-md">
                <Orbit className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-gradient">
                EduOrbit
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              One EdTech App for Every Age. AI-powered adaptive learning that grows with you from childhood to college and beyond.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group border border-blue-100"
                  >
                    <Icon className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-sky-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sky-600" />
                <span className="text-gray-600">hello@eduorbit.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-sky-600" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-sky-600" />
                <span className="text-gray-600">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 EduOrbit. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-500 hover:text-sky-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-500 hover:text-sky-600 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer