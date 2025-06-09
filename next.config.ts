import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		optimizePackageImports: ['next/image'],
	},
	images: {
		remotePatterns: [],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	// Налаштування для уникнення hydration проблем
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
}

export default nextConfig
