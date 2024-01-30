import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
  colSpan?: number
}

const Cell: FC<Props> = ({ children, colSpan }) => {
  return (
    <td colSpan={colSpan} className="border-2 border-black p-2">
      {children}
    </td>
  )
}

export default Cell
