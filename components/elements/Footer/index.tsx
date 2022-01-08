import React from "react"
import Link from "next/link"
import Tooltip from "@mui/material/Tooltip"
import { v4 as uuid } from "uuid"
import { Logo } from "@elements"
import { socialMedia } from "./constants"

export const Footer: React.FC = () => {
  return (
    <div className="font-sans select-none bg-black-600">
      <div className="flex items-center justify-between w-full h-24 px-6 mx-auto bg-black-600 md:px-12 max-w-7xl">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-3 gap-2">
          <Link href="/" passHref>
            <a>
              <Logo />
            </a>
          </Link>
          <p className="text-white font-retro sm:text-md md:text-lg lg:text-xl">PERAK 2022</p>
        </div>
        <div className="space-y-1 text-xs text-white font-retro md:text-sm">
          <p className="uppercase">Ikuti Perak Di</p>
          <div className="flex justify-between">
            {socialMedia.map(({ title, placement, link, icon }) => (
              <Tooltip key={uuid()} title={title} arrow placement={placement}>
                <a href={link} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
