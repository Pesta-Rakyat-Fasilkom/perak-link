import { getSize } from "@helpers"
import { IconProps } from "./interface"

export const Github: React.FC<IconProps> = ({
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
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.3334 19V17.137C14.3584 16.8275 14.3154 16.5163 14.2074 16.2242C14.0993 15.9321 13.9287 15.6657 13.7067 15.4428C15.8001 15.2156 18.0001 14.4431 18.0001 10.8989C17.9999 9.99256 17.6418 9.12101 17.0001 8.46461C17.304 7.67171 17.2825 6.79528 16.9401 6.01739C16.9401 6.01739 16.1534 5.7902 14.3334 6.97811C12.8054 6.57488 11.1947 6.57488 9.66672 6.97811C7.84672 5.7902 7.06005 6.01739 7.06005 6.01739C6.71764 6.79528 6.69615 7.67171 7.00005 8.46461C6.35347 9.12588 5.99507 10.0053 6.00005 10.9183C6.00005 14.4366 8.20005 15.2091 10.2934 15.4622C10.074 15.6829 9.90489 15.9461 9.79692 16.2347C9.68895 16.5232 9.64459 16.8306 9.66672 17.137V19"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
