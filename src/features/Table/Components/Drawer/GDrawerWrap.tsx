import React, { FC, memo } from 'react'
import Button from '@/components/UI/Button.tsx'
import { Drawer } from 'antd'

interface Props {
  children: React.ReactNode
  handleOpen: () => void
  open: boolean
}

const GDrawerWrap: FC<Props> = memo(({ children, handleOpen, open }) => {
  return (
    <>
      <Button
        className="absolute top-2 right-3 text-black bg-white border-2 border-gray-200"
        text="Меню"
        onClick={handleOpen}
      />
      <Drawer onClose={handleOpen} placement="right" title="Меню" open={open}>
        {children}
      </Drawer>
    </>
  )
})

export default GDrawerWrap
