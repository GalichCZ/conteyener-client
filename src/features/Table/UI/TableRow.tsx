import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const TableRow: FC<Props> = ({ children, className }) => {
  return <tr className={`table-row-extern min-h-[50px] h-[50px] ${className}`}>{children}</tr>
}

export default TableRow
