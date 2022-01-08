import { Menu, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { ChevronDown } from "../Icons/ChevronDown"
import { DropdownProps } from "./interface"

export const Dropdown: React.FC<DropdownProps> = ({ text, children, isAttached }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="font-bold flex gap-2 text-white font-retro">
              {text}
              <ChevronDown
                stroke="stroke-white"
                className={`${open ? "rotate-180" : "rotate-0"} transition-200-ease-in-out`}
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className={isAttached ? "w-full" : "dropdown-menu"}>
              <div className={`flex flex-col lg:gap-4 gap-2 ${isAttached ? "pt-5" : ""}`}>
                {children}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
