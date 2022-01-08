import { getSize } from "@helpers"
import { IconProps } from "./interface"

export const Youtube: React.FC<IconProps> = ({
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
        d="M14 12.5L10.5 14.5V10.5L14 12.5Z"
        fill="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13.2075V11.7924C2 8.89705 2 7.44939 2.90549 6.51792C3.81099 5.58645 5.23656 5.54613 8.08769 5.46549C9.43873 5.42728 10.8188 5.3999 12 5.3999C13.1812 5.3999 14.5613 5.42728 15.9123 5.46549C18.7634 5.54613 20.189 5.58645 21.0945 6.51792C22 7.44939 22 8.89705 22 11.7924V13.2075C22 16.1028 22 17.5505 21.0945 18.4819C20.189 19.4134 18.7635 19.4537 15.9124 19.5344C14.5613 19.5726 13.1812 19.6 12 19.6C10.8188 19.6 9.43867 19.5726 8.0876 19.5344C5.23651 19.4537 3.81097 19.4134 2.90548 18.4819C2 17.5505 2 16.1028 2 13.2075Z"
        strokeWidth="1.5"
      />
    </svg>
  )
}
