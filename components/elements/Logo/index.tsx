import React from "react"
import { OptimizedImage } from "../OptimizedImage"

export const Logo = () => (
  <OptimizedImage
    imageUrl="/assets/logo.png"
    alt="PERAK 2022"
    fit="contain"
    className="md:w-12 md:h-12 w-12 h-12"
  />
)
