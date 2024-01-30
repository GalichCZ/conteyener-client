import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const PoleWrapper: FC<Props> = ({ children }) => {
  return <div className="w-[220px]">{children}</div>
}

export default PoleWrapper
