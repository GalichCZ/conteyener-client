import React, { FC } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

interface Props {
  decrementPage: () => void
  incrementPage: () => void
  page: number
  totalPages: number
}

const PageHandler: FC<Props> = ({ decrementPage, incrementPage, totalPages, page }) => {
  return (
    <div className="flex absolute bottom-4">
      <div
        onClick={decrementPage}
        className="cursor-pointer bg-white rounded-2xl w-[32px] flex justify-center scale-90"
      >
        <LeftOutlined />
      </div>
      <span className="mx-2 text-2xl">
        {page} | {totalPages}
      </span>
      <div
        onClick={incrementPage}
        className="cursor-pointer bg-white rounded-2xl w-[32px] flex justify-center scale-90"
      >
        <RightOutlined />
      </div>
    </div>
  )
}

export default PageHandler
