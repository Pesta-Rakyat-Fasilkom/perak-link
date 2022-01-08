import React, { useState } from "react"
import DateAdapter from "@mui/lab/AdapterMoment"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { DatePicker, DesktopDatePicker } from "@mui/lab"
import { TextField } from "@elements"
import { Calendar } from "@icons"
import { DatePickerProps } from "./interface"

const CustomDatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  message,
  error,
}) => {
  const [open, setOpen] = useState(false)
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        label={label}
        value={value}
        onChange={onChange}
        inputFormat="DD/MM/YYYY"
        renderInput={(params) => (
          <>
            <div className="w-full hidden lg:block">
              <TextField
                onChange={(e) => {
                  params?.inputProps?.onChange && params.inputProps.onChange(e)
                }}
                value={params.inputProps?.value}
                label={params.label as any}
                placeholder={params.inputProps?.placeholder}
                message={message}
                error={Boolean(error)}
                rightIcon={<Calendar fill="fill-transparent" />}
              />
            </div>
            <div className="w-full block lg:hidden" onClick={() => setOpen(true)}>
              <TextField
                onChange={(e) => {
                  params?.inputProps?.onChange && params.inputProps.onChange(e)
                }}
                value={params.inputProps?.value}
                label={params.label as any}
                placeholder={params.inputProps?.placeholder}
                message={message}
                error={Boolean(error)}
                rightIcon={<Calendar fill="fill-transparent" />}
              />
            </div>
          </>
        )}
      />
    </LocalizationProvider>
  )
}

export default CustomDatePicker
