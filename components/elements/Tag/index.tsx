import React from "react"
import Tooltip from "@mui/material/Tooltip"
import { TagProps } from "./interface"

export const Tag: React.FC<TagProps> = ({ children, tooltip }) => {
  return tooltip ? (
    <Tooltip title={tooltip} followCursor>
      <a>
        <div className="bg-darkgrey font-sans px-2 py-1 rounded-sm max-w-max select-none cursor-help">
          <p className="text-grey text-sm">{children}</p>
        </div>
      </a>
    </Tooltip>
  ) : (
    <div className="bg-darkgrey font-sans px-2 py-1 rounded-sm max-w-max select-none">
      <p className="text-grey text-sm">{children}</p>
    </div>
  )
}

export default Tag
