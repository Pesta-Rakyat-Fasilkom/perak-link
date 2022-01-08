import React, { useState } from "react"
import { Icon, InputAdornment, MenuItem, Paper } from "@mui/material"
import { ChevronDown } from "@icons"
import { CustomMenuItem, SelectVariant } from "./styled"
import { SelectInputProps } from "./interface"

const SelectVariants: React.FC<SelectInputProps> = ({
  className,
  icon,
  placeholder,
  options,
  value = "",
  onChange = () => {},
  label,
}) => {
  const [open, setOpen] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

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
    <div
      className={`${className} group pl-2 pr-3 bg-[#383838] border-2 rounded-[4px] h-14 pt-1 relative pt-1.5 ${
        open && "border-[#FFFF7B]"
      }`}
      onClick={() => setOpen(!open)}
    >
      <h1 className="absolute text-grey font-bold text-xs translate-x-0.5 translate-y-0.5 h-full">
        {label}
      </h1>
      <div className="pt-1.5">
        <SelectVariant
          variant="standard"
          onChange={(e, _) => onChange(e.target.value as string)}
          value={value !== "" && value !== null ? value : placeholder}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          IconComponent={iconComponent}
          startAdornment={startAdornment}
          fullWidth
          disableUnderline
        >
          <CustomMenuItem open={open} value={placeholder} disabled={true}>
            {placeholder}
          </CustomMenuItem>
          {options?.map((option) => (
            <CustomMenuItem open={open} key={option} value={option}>
              {option}
            </CustomMenuItem>
          ))}
        </SelectVariant>
      </div>
    </div>
  )
}

export default SelectVariants
