export interface SelectInputProps {
  className?: string
  label?: string
  icon?: any
  placeholder?: string
  options?: string[]

  value?: string
  onChange?: (value: string) => void
}
