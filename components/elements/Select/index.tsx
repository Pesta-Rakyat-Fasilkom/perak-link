import React, { useState } from "react"
import { Icon, InputAdornment, MenuItem } from "@mui/material"
import { ChevronDown } from "@icons"
import { CustomSelect } from "./styled"
import { SelectInputProps } from "./interface"

const SelectInput: React.FC<SelectInputProps> = ({
  className,
  icon,
  placeholder,
  options,
  value = "",
  onChange = () => {},
}) => {
  const [open, setOpen] = useState(false)

  const iconComponent = (props: any) => (
    <Icon className={props.className}>
      <ChevronDown />
    </Icon>
  )

  const startAdornment = icon ? (
    <InputAdornment position="start" sx={{ marginLeft: "12px" }}>
      {icon}
    </InputAdornment>
  ) : null

  return (
    <div className={`${className} pr-3 bg-black-700 rounded-[4px]`} onClick={() => setOpen(!open)}>
      <CustomSelect
        variant="standard"
        onChange={(e, _) => onChange(e.target.value as string)}
        value={value !== "" ? value : options?.[0] ?? placeholder}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        IconComponent={iconComponent}
        startAdornment={startAdornment}
        fullWidth
        disableUnderline
        MenuProps={{ disableScrollLock: true }}
      >
        {placeholder && (
          <MenuItem value={placeholder} disabled>
            {placeholder}
          </MenuItem>
        )}

        {options?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </CustomSelect>
    </div>
  )
}

export default SelectInput
