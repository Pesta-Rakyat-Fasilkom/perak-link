import React from "react"

import { Header } from "@elements"
import { TabsProps } from "./interface"

export const Tabs: React.FC<TabsProps> = ({ items, value = 0, setValue }) => {
  return (
    <div className="flex text-white space-x-8">
      {items.map((item: any, index: any) => (
        <div
          onClick={() => setValue(index)}
          className="flex flex-col justify-center items-center cursor-pointer select-none group"
          key={item}
        >
          <Header size="xs" className="transition-all whitespace-nowrap">
            {item}
          </Header>
          <div
            className={`
              group-hover:h-1 group-hover:w-full rounded-sm bg-salmon -mr-0.5 transition-all
              ${index === value ? "h-1 w-full" : "h-0 w-0"}
            `}
          ></div>
        </div>
      ))}
    </div>
  )
}
