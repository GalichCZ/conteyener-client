import React from 'react'
import { Skeleton } from 'antd'

const InputSkeleton = () => {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton.Input active={true} size="small" />
      <Skeleton.Input active={true} />
    </div>
  )
}

export default InputSkeleton
