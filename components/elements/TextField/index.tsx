import { InputAdornment } from "@mui/material"
import { TextFieldProps } from "./interface"
import { CustomTextField } from "./styled"

export const TextField: React.FC<TextFieldProps> = ({
  className,
  disabled = false,
  label,
  placeholder,
  message,
  leftIcon,
  rightIcon,
  value,
  onChange,
  name,
  error = false,
  ref,
  type,
}) => {
  return (
    <div className={className}>
      <CustomTextField
        ref={ref}
        variant="filled"
        disabled={disabled}
        onChange={onChange}
        value={value}
        error={error}
        label={label}
        placeholder={placeholder}
        helperText={message}
        fullWidth
        type={type}
        name={name}
        InputProps={{
          disableUnderline: true,
          startAdornment: leftIcon ? (
            <InputAdornment position="start">{leftIcon}</InputAdornment>
          ) : undefined,
          endAdornment: rightIcon ? (
            <InputAdornment position="end">{rightIcon}</InputAdornment>
          ) : undefined,
        }}
      />
    </div>
  )
}
