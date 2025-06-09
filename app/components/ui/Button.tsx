'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
	size?: 'sm' | 'md' | 'lg'
	children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant = 'primary', size = 'md', children, ...props },
		ref
	) => {
		const baseStyles = [
			'inline-flex items-center justify-center rounded-md font-medium',
			'transition-colors focus-visible:outline-none focus-visible:ring-2',
			'focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
		]

		const variants = {
			primary: [
				'bg-primary text-primary-foreground hover:bg-primary/90',
				'shadow-sm',
			],
			secondary: [
				'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				'shadow-sm',
			],
			outline: [
				'border border-input bg-background hover:bg-accent',
				'hover:text-accent-foreground',
			],
			ghost: ['hover:bg-accent hover:text-accent-foreground'],
		}

		const sizes = {
			sm: 'h-9 px-3 text-sm',
			md: 'h-10 px-4 py-2',
			lg: 'h-11 px-8 text-lg',
		}

		return (
			<button
				className={cn(baseStyles, variants[variant], sizes[size], className)}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'

export { Button }
