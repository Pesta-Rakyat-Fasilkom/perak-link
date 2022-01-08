import { getSize } from "@helpers"
import { IconProps } from "./interface"

export const Twitter: React.FC<IconProps> = ({
  stroke = "stroke-white",
  fill,
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
        d="M23 3.51006C23 3.51006 20.9821 4.70217 19.86 5.04006C19.2577 4.34757 18.4573 3.85675 17.567 3.63398C16.6767 3.41122 15.7395 3.46725 14.8821 3.79451C14.0247 4.12177 13.2884 4.70446 12.773 5.46377C12.2575 6.22309 11.9877 7.12239 12 8.04006V9.04006C10.2426 9.08562 8.50127 8.69587 6.93101 7.9055C5.36074 7.11513 4.01032 5.94869 3 4.51006C3 4.51006 -1 13.5101 8 17.5101C5.94053 18.908 3.48716 19.609 1 19.5101C10 24.5101 21 19.5101 21 8.01006C20.9991 7.73151 20.9723 7.45365 20.92 7.18006C21.9406 6.17355 23 3.51006 23 3.51006Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
