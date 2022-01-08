export interface DatePickerProps {
  label: string
  value: string
  message?: string
  error?: any
  onChange: (value: any) => void
}
