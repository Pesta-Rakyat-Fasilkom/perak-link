import React from "react"

interface SVGProps {
  className?: string
  style?: React.CSSProperties
}

export const DoubleChevron: React.FC<SVGProps> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 7L12 10.5L8.5 7"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 13L12 16.5L8.5 13"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
