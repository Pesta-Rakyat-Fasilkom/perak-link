import { getSize } from "@helpers"
import { IconProps } from "./interface"

export const Calendar: React.FC<IconProps> = ({
  stroke = "stroke-white",
  fill = "fill-white",
  className,
  size = "sm",
}) => {
  return (
    <svg
      className={`${stroke} ${fill} ${getSize("spacing", size)} ${className}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 2V6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
