import { getSize } from "@helpers"
import { IconProps } from "./interface"

export const ChevronDown: React.FC<IconProps> = ({
  stroke = "stroke-white",
  fill = "fill-white",
  className,
  size = "sm",
}) => (
  <svg
    className={`${stroke} ${fill} ${getSize("spacing", size)} ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.34292 7.75734L4.92871 9.17155L11.9998 16.2426L19.0708 9.17158L17.6566 7.75737L11.9998 13.4142L6.34292 7.75734Z"
      fill="white"
    />
  </svg>
)
