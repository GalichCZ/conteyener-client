import React, { FC, ReactNode } from 'react'
import { Modal } from 'antd'

type VoidFunction = () => void

interface Props {
  children: ReactNode
  open: boolean
  onCancel: VoidFunction
  title?: string
  width?: string
}

const GModal: FC<Props> = ({ children, open, title, onCancel, width }) => {
  return (
    <Modal footer={null} open={open} title={title} onCancel={onCancel} width={width}>
      {children}
    </Modal>
  )
}

export default GModal
