import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const CellWrap: FC<Props> = ({ children }) => {
  return <div className="w-20 text-center">{children}</div>
}

export default CellWrap
