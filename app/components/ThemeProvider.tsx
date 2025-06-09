'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderContextType = {
	theme: Theme
	setTheme: (theme: Theme) => void
	resolvedTheme: 'dark' | 'light'
}

const ThemeProviderContext = createContext<
	ThemeProviderContextType | undefined
>(undefined)

export const useTheme = () => {
	const context = useContext(ThemeProviderContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}

interface ThemeProviderProps {
	children: React.ReactNode
	defaultTheme?: Theme
}

export const ThemeProvider = ({
	children,
	defaultTheme = 'system',
}: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)
	const [mounted, setMounted] = useState(false)
	const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('light')

	useEffect(() => {
		setMounted(true)
		const savedTheme = localStorage.getItem('theme') as Theme
		if (savedTheme) {
			setTheme(savedTheme)
		}
	}, [])

	useEffect(() => {
		if (!mounted) return

		const root = window.document.documentElement

		// Видаляємо попередні атрибути теми
		root.removeAttribute('data-theme')
		root.classList.remove('light', 'dark')

		let currentTheme: 'dark' | 'light'

		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
				.matches
				? 'dark'
				: 'light'
			currentTheme = systemTheme
		} else {
			currentTheme = theme
		}

		// Встановлюємо data-theme атрибут для CSS змінних
		root.setAttribute('data-theme', currentTheme)
		// Зберігаємо клас для сумісності
		root.classList.add(currentTheme)

		setResolvedTheme(currentTheme)
		localStorage.setItem('theme', theme)
	}, [theme, mounted])

	// Слухаємо зміни системної теми
	useEffect(() => {
		if (!mounted || theme !== 'system') return

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const handleChange = () => {
			const root = window.document.documentElement
			const systemTheme = mediaQuery.matches ? 'dark' : 'light'

			root.removeAttribute('data-theme')
			root.classList.remove('light', 'dark')
			root.setAttribute('data-theme', systemTheme)
			root.classList.add(systemTheme)

			setResolvedTheme(systemTheme)
		}

		mediaQuery.addEventListener('change', handleChange)
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [theme, mounted])

	const value = {
		theme,
		setTheme,
		resolvedTheme,
	}

	if (!mounted) {
		return <>{children}</>
	}

	return (
		<ThemeProviderContext.Provider value={value}>
			{children}
		</ThemeProviderContext.Provider>
	)
}
