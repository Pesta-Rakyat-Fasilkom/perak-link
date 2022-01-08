import React from "react"

export const Checkbox: React.FC = ({ children }) => {
  const [selected, setSelected] = React.useState(false)

  // TODO: Update to support forms
  return (
    <div className="flex font-sans items-center justify-center space-x-2 select-none group">
      <div
        onClick={() => setSelected(!selected)}
        className={`w-5 h-5 bg-black-700 cursor-pointer ${
          selected && "bg-salmon"
        } transition-all rounded-sm group-hover:bg-salmon`}
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          className={`${selected ? "opacity-100" : "opacity-0"} transition-all`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.5C0 0.947716 0.447715 0.5 1 0.5H19C19.5523 0.5 20 0.947715 20 1.5V19.5C20 20.0523 19.5523 20.5 19 20.5H1C0.447716 20.5 0 20.0523 0 19.5V1.5Z"
            fill="none"
          />
          <path
            d="M15.8008 4.55888L7.3294 13.0223L4.20779 9.90071L3.85548 9.54841L3.50193 9.89946L2.3186 11.0745L1.96254 11.428L2.31735 11.7828L6.97568 16.4412L7.32923 16.7947L7.68279 16.4412L17.6828 6.44115L18.0363 6.0876L17.6828 5.73404L16.5078 4.55904L16.1544 4.20566L15.8008 4.55888Z"
            fill="black"
            stroke="black"
          />
        </svg>
      </div>
      <p className="text-lg cursor-pointer" onClick={() => setSelected(!selected)}>
        {children}
      </p>
    </div>
  )
}
