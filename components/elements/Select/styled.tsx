import { Select, styled, SelectProps, MenuItem, MenuProps } from "@mui/material"

export const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    position: "relative",
    padding: "12px",
    fontFamily: "DM Sans",
    color: "#FFFFFF",
    fontSize: 16,
    borderRadius: 4,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      borderColor: "#FFFF7B",
    },
    "&.Mui-focused": {
      color: "#FFFFFF",
    },
  },
  "& .MuiInputBase-input": {
    paddingLeft: 4,
  },
}))

export const SelectVariant = styled(Select)<SelectProps>(({ theme }) => ({
  "& .MuiSelect-select": {
    position: "relative",
    padding: "12px",
    fontFamily: "DM Sans",
    color: "#FFFFFF",
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "",
    textAlign: "start",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      borderColor: "#FFFF7B",
    },
    "&.Mui-focused": {
      color: "#FFFFFF",
      backgroundColor: "#222222",
      borderColor: "#FFFF7B",
    },
  },
  "& .MuiInputBase-input": {
    paddingLeft: 1.5,
  },
  "& .MuiSelect-icon": {
    transform: "translateY(-0.4rem)",
  },
  "& .MuiMenu-list": {
    color: "white",
  },
}))

export const CustomMenuItem = styled(MenuItem)<MenuProps>(({ theme }) => ({
  "& .MuiMenuItem-root": {
    backgroundColor: "#383838",
  },
}))
