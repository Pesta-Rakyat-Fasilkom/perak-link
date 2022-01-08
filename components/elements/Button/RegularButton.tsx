import React from "react"
import { ButtonProps } from "./interface"

export const RegularButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  variant = "variant1",
  className,
}) => {
  const variants: any = {
    variant1: `bg-black-700 text-lemon hover:bg-lemon hover:text-black`,
    variant2: `bg-transparent border-2 border-lemon text-lemon hover:bg-lemon hover:text-black`,
    variant3: `bg-lemon text-black hover:bg-black-700 hover:text-lemon`,
    variant4: `bg-grey text-darkgrey cursor-default`,
  }

  return (
    <button
      onClick={onClick}
      className={`font-semibold font-sans px-4 h-10 rounded-sm transform-gpu transition-all ${variants[variant]} box-border ${className}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default RegularButton
