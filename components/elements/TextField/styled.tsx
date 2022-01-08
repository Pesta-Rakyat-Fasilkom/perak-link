import { styled, TextField as Input } from "@mui/material"

export const CustomTextField = styled(Input)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    fontFamily: "DM Sans",
    color: "#FFFFFF",
    backgroundColor: "#383838",
    border: "2px solid #FFFFFF",
    borderRadius: 4,
    transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
    "&.Mui-focused": {
      color: "#FFFFFF",
      border: "2px solid #FFFF7B",
    },
    "&.Mui-error": {
      border: "2px solid #842626",
    },
    "&.Mui-disabled": {
      border: "2px solid #CCCCCC",
    },
  },
  "& label": {
    marginTop: "2px",
    fontFamily: "DM Sans",
    color: "#999999",
    fontWeight: 600,
    "&.Mui-focused": {
      color: "#999999",
    },
    "&.Mui-error": {
      color: "#842626",
    },
    "&.Mui-disabled": {
      color: "#999999",
    },
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    fontFamily: "DM Sans",
    color: "#FFFFFF",
    fontSize: "12px",
    "&.Mui-error": {
      color: "#842626",
    },
    "&.Mui-disabled": {
      color: "#999999",
    },
  },
}))
