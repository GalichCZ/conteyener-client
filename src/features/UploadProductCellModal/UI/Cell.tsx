import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
}

const Cell: FC<Props> = ({ children }) => {
  return <td className="border-2 border-black p-2">{children}</td>
}

export default Cell
