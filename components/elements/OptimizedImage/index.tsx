import React from "react"
import Image from "next/image"
import { OptimizedImageProps } from "./interface"

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  imageUrl,
  alt,
  className,
  fit,
  isRounded,
}) => {
  if (isRounded) {
    isRounded = typeof isRounded === "boolean" ? "rounded-full" : isRounded
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imageUrl}
        alt={alt}
        layout="fill"
        objectFit={fit}
        className={isRounded as string}
      />
    </div>
  )
}
