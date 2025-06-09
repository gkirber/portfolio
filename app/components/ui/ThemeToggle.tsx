'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from '../ThemeProvider'
import { Button } from './Button'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className='h-4 w-4' />
      case 'dark':
        return <Moon className='h-4 w-4' />
      case 'system':
        return <Monitor className='h-4 w-4' />
      default:
        return <Sun className='h-4 w-4' />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light theme'
      case 'dark':
        return 'Dark theme'
      case 'system':
        return 'System theme'
      default:
        return 'Toggle theme'
    }
  }

  // Show placeholder during SSR
  if (!mounted) {
    return (
      <Button
        variant='ghost'
        size='sm'
        aria-label='Loading theme...'
        className='h-9 w-9 p-0'
        disabled
      >
        <Sun className='h-4 w-4' />
      </Button>
    )
  }

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={handleToggle}
      aria-label={getLabel()}
      title={getLabel()}
      className='h-9 w-9 p-0'
    >
      {getIcon()}
    </Button>
  )
}
