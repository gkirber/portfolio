'use client'

import { useState } from 'react'
import { ThemeToggle } from './ui/ThemeToggle'

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'About me', href: '#about' },
  { name: 'My work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="flex items-center text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              onClick={handleLinkClick}
            >
              <span className="text-blue-600">{'<'}</span>
              <span>Iurii</span>
              <span className="text-gray-400 mx-1">/</span>
              <span>Rebryk</span>
              <span className="text-blue-600">{'>'}</span>
              <span className="text-green-500 ml-1 animate-pulse">_</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side - Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={handleToggle}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
