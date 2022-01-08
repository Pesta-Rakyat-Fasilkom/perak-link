import React from "react"
import { getSize } from "@helpers"
import { HeaderProps } from "./interface"

export const getFont: any = {
  retro: "font-retro",
}

export const Header: React.FC<HeaderProps> = ({
  size = "md",
  children,
  className,
  font = "retro",
}) => {
  return <h1 className={`${getFont[font]} ${className} ${getSize("text", size)}`}>{children}</h1>
}
