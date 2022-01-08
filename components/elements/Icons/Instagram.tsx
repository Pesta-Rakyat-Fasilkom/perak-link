import { getSize } from "@helpers"
import { IconProps } from "./interface"

export const Instagram: React.FC<IconProps> = ({
  stroke = "stroke-white",
  fill = "fill-white",
  className,
  size = "sm",
}) => {
  return (
    <svg
      className={`${stroke} ${fill} ${getSize("spacing", size)} ${className}`}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.5C14.2091 16.5 16 14.7091 16 12.5C16 10.2909 14.2091 8.5 12 8.5C9.79086 8.5 8 10.2909 8 12.5C8 14.7091 9.79086 16.5 12 16.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16.5V8.5C3 5.73858 5.23858 3.5 8 3.5H16C18.7614 3.5 21 5.73858 21 8.5V16.5C21 19.2614 18.7614 21.5 16 21.5H8C5.23858 21.5 3 19.2614 3 16.5Z"
        strokeWidth="1.5"
      />
      <path
        d="M17.5 7.01L17.51 6.99889"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
