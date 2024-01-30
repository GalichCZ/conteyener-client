import React, { FC } from 'react'
import Button from '@/components/UI/Button.tsx'

interface Props {
  onClick: () => void
  className?: string
}

const CreateDeliveryChannelButton: FC<Props> = ({ onClick, className }) => {
  return (
    <Button
      type="primary"
      text="Создать канал поставки"
      className={`${className}`}
      onClick={onClick}
    />
  )
}

export default CreateDeliveryChannelButton
