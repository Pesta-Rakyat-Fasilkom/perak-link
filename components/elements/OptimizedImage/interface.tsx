import { Fit } from "./types"

export interface OptimizedImageProps {
  imageUrl: string
  alt: string
  className?: string
  fit: Fit
  isRounded?: boolean | string
}
