'use client'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigationItems = [
  { name: 'Головна', href: '#home' },
  { name: 'Про мене', href: '#about' },
  { name: 'Проекти', href: '#projects' },
  { name: 'Навички', href: '#skills' },
  { name: 'Контакти', href: '#contact' },
]

export const SimpleNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a
              href='#home'
              className='text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              onClick={handleLinkClick}
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navigationItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors'
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={handleToggle}
              aria-label='Відкрити меню'
              className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-md'
            >
              {isOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800'>
          {navigationItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors'
              onClick={handleLinkClick}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
