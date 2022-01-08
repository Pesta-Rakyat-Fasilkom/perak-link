import { ReactNode } from "react"

export interface ModalProps {
  className?: string

  title: string
  message?: string

  show?: boolean
  onClose?: () => void

  primary?: string
  primaryClicked?: () => void
  secondary?: string
  secondaryClicked?: () => void

  canClose?: boolean

  children?: ReactNode
}
