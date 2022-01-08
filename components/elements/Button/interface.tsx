import { ButtonVariants, Providers } from "./types"

export interface LoginButtonProps {
  provider: Providers
}

export interface ButtonProps {
  onClick?: any
  variant?: ButtonVariants
  type?: "button" | "submit" | "reset" | undefined
  className?: string
}
