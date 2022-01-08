import React from "react"
import { ParagraphProps } from "./interface"

export const Paragraph: React.FC<ParagraphProps> = ({ className, children, type, size = "md" }) => {
  return (
    <p
      className={`
        font-sans
        ${className}
        ${type === "italic" && "italic"}
        ${type === "bold" && "font-bold"}
        ${size === "lg" && "text-p-lg"}
        ${size === "md" && "text-p-md"}
        ${size === "sm" && "text-p-sm"}
    `}
    >
      {children}
    </p>
  )
}

export default Paragraph
