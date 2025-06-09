'use client'

import Image, { ImageProps } from 'next/image'
import { useIsClient } from '../hooks/useIsClient'

interface ClientImageProps extends Omit<ImageProps, 'alt'> {
  fallback?: React.ReactNode
  alt: string
}

const ClientImage = ({ fallback, alt, ...imageProps }: ClientImageProps) => {
  const isClient = useIsClient()

  if (!isClient) {
    return (
      fallback || (
        <div
          style={{ width: imageProps.width, height: imageProps.height }}
          role='img'
          aria-label={alt}
        />
      )
    )
  }

  return <Image alt={alt} {...imageProps} suppressHydrationWarning />
}

export default ClientImage
