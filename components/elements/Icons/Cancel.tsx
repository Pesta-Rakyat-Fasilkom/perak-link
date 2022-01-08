import { getSize } from "@helpers"
import { IconProps } from "./interface"

export const Cancel: React.FC<IconProps> = ({
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
      <path
        d="M6.75729 17.2426L11.9999 12M17.2426 6.75736L11.9999 12M11.9999 12L6.75729 6.75736M11.9999 12L17.2426 17.2426"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
