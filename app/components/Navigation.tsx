'use client'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/Button'
import { ThemeToggle } from './ui/ThemeToggle'

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
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
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a
              href='#home'
              className='text-xl font-bold text-foreground hover:text-primary transition-colors'
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
                  className='text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors'
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Theme Toggle */}
          <div className='hidden md:block'>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-2'>
            <ThemeToggle />
            <Button
              variant='ghost'
              size='sm'
              onClick={handleToggle}
              aria-label='Open menu'
              className='h-9 w-9 p-0'
            >
              {isOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>
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
        <div className='px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border'>
          {navigationItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors'
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
