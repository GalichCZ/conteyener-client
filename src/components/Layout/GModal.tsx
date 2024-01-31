import React, { FC, ReactNode } from 'react'
import { Modal } from 'antd'

type VoidFunction = () => void

interface Props {
  children: ReactNode
  open: boolean
  onCancel: VoidFunction
  title?: string
  width?: string
  className?: string
}

const GModal: FC<Props> = ({ children, open, title, onCancel, width, className }) => {
  return (
    <Modal
      footer={null}
      className={className}
      open={open}
      title={title}
      onCancel={onCancel}
      width={width}
    >
      {children}
    </Modal>
  )
}

export default GModal
