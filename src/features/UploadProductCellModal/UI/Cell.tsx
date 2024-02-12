import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const Cell: FC<Props> = ({ children, className }) => {
  return <td className={`border-2 border-black p-2 text-center ${className}`}>{children}</td>
}

export default Cell
