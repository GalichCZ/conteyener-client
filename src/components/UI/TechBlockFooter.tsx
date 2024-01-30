import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const TechBlockFooter: FC<Props> = ({ children }) => {
  return <div className="sticky p-4 bottom-0 bg-white w-full">{children}</div>
}

export default TechBlockFooter
