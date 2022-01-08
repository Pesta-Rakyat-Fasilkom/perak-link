import { ReactNode } from "react"

export interface DropdownProps {
  text?: string
  children: ReactNode
  isAttached?: boolean
}

export interface DropdownItemProps {
  icon?: ReactNode
  label: string
  isAttached?: boolean
}

export interface DropdownButtonItemProps extends DropdownItemProps {
  onClick: () => void
}

export interface DropdownLinkItemProps extends DropdownItemProps {
  link: string
}
