'use client'

import { Navigation } from './Navigation'

interface ClientLayoutProps {
  children: React.ReactNode
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
