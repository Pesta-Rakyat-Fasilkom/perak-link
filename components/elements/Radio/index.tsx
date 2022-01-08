import React from "react"
import { RadioProps } from "./interface"

export const Radio: React.FC<RadioProps> = ({
  children,
  name,
  value,
  handleChange,
  isSelected,
}) => {
  const handleChangeId = (e: any) => {
    const { id } = e.currentTarget
    handleChange(id)
  }
  return (
    <div className="flex">
      <input
        type="radio"
        className="opacity-0 w-0"
        onChange={handleChangeId}
        id={value}
        name={name}
        value={value}
      ></input>
      <label htmlFor={value} className="cursor-pointer">
        <div className="flex font-sans items-center justify-center space-x-2 select-none group">
          <div
            className={`w-5 h-5 bg-black-700 cursor-pointer ${
              isSelected ? "bg-salmon border-salmon" : "border-transparent outline-transparent"
            }  border-2 border-transparent outline-transparent transition-colors rounded-sm ease-in-out group-hover:bg-salmon`}
          >
            <div
              className={`border-2 border-black-900 ${
                isSelected ? "opacity-100" : "opacity-0"
              } w-full h-full transition-all ease-in-out rounded-sm`}
            ></div>
          </div>
          <p className="text-lg">{children}</p>
        </div>
      </label>
    </div>
  )
}

export default Radio
