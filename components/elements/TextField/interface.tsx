import { ChangeEventHandler } from "react"

export interface TextFieldProps {
  className?: string
  variant?: "desktop" | "mobile"

  disabled?: boolean

  label?: string
  placeholder?: string
  message?: string
  name?: string

  leftIcon?: any
  rightIcon?: any

  value?: string | number
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
  error?: boolean
  ref?: any
  type?: string
}
