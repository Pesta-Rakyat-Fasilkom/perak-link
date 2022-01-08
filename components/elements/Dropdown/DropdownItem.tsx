import React from "react"
import Link from "next/link"
import { DropdownButtonItemProps, DropdownItemProps, DropdownLinkItemProps } from "./interface"

const DropdownItemContent: React.FC<DropdownItemProps> = ({ icon, label, isAttached }) => {
  const textColSpan = icon ? "col-span-2" : "col-span-3"
  const textFlexJustify = isAttached ? "justify-start" : icon ? "justify-center" : "justify-end"

  return (
    <>
      <div className={`flex items-center ${icon ? "col-span-1" : ""}`}>{icon}</div>
      <div className={`${textColSpan} ${textFlexJustify} flex items-center text-white font-bold`}>
        {label}
      </div>
    </>
  )
}

export const DropdownLinkItem: React.FC<DropdownLinkItemProps> = ({ link, ...props }) => (
  <Link href={link} passHref>
    <a className={props.isAttached ? "flex gap-5" : "dropdown-item"}>
      <DropdownItemContent {...props} />
    </a>
  </Link>
)

export const DropdownButtonItem: React.FC<DropdownButtonItemProps> = ({ onClick, ...props }) => (
  <button onClick={onClick} className={props.isAttached ? "flex gap-5" : "dropdown-item"}>
    <DropdownItemContent {...props} />
  </button>
)
