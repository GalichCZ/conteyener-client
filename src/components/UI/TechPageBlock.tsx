import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const TechPageBlock: FC<Props> = ({ children }) => {
  return (
    <div className="mt-20 relative overflow-auto shadow-2xl rounded-xl bg-white h-fit max-h-[70%] w-[90%]">
      {children}
    </div>
  )
}

export default TechPageBlock
