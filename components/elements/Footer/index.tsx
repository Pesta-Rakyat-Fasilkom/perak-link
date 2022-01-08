import React from "react"
import Link from "next/link"
import Tooltip from "@mui/material/Tooltip"
import { v4 as uuid } from "uuid"
import { Logo } from "@elements"
import { socialMedia } from "./constants"
import { Button } from "../Button"

export const Footer: React.FC = () => {
  return (
    <div className="font-sans select-none bg-black-600">
      <div className="flex items-center justify-center space-y-3 md:space-y-0 md:justify-between flex-col md:flex-row w-full h-36 md:h-24 px-6 mx-auto bg-black-600 md:px-12 max-w-7xl">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-3 gap-2">
          <Link href="/" passHref>
            <a className=" hidden lg:block">
              <Logo />
            </a>
          </Link>
          <div className="text-center md:text-left">
            <p className="text-lemon text-shadow-salmon font-retro sm:text-md md:text-lg lg:text-xl">
              PERAK LINK
            </p>
            <p className="flex space-x-1 items-center text-white">
              <span>Created with </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-salmon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
              </span>
              <span>by IT Dev PERAK 2022</span>
            </p>
          </div>
        </div>
        <a href="https://perak.cs.ui.ac.id" rel="noreferrer" target="_blank">
          <Button variant="variant2">Kunjungi PERAK 2022</Button>
        </a>
      </div>
    </div>
  )
}

export default Footer
