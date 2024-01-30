import { Tooltip } from 'react-tooltip'
import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  tooltipId: string
  open: boolean
}

const TooltipUI: FC<Props> = ({ children, tooltipId, open }) => {
  return (
    <Tooltip
      opacity="1"
      clickable
      className="z-10 grid min-w-[280px]"
      style={{ background: 'none' }}
      id={tooltipId}
      isOpen={open}
    >
      {children}
    </Tooltip>
  )
}

export default TooltipUI
