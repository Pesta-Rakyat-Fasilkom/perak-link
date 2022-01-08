import { getSize } from "@helpers"
import { IconProps } from "./interface"

export const CalendarAlt: React.FC<IconProps> = ({
  stroke = "stroke-white",
  fill = "fill-white",
  className,
  size = "sm",
}) => {
  return (
    <svg
      className={`${stroke} ${fill} ${getSize("spacing", size)} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 17C7.89543 17 7 16.1046 7 15C7 13.8954 7.89543 13 9 13C10.1046 13 11 13.8954 11 15C11 16.1046 10.1046 17 9 17Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3H18ZM19 18V7H5V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18Z"
      />
    </svg>
  )
}
