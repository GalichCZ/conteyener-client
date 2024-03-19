import React, { useEffect, useState } from 'react'
import DeliverChannelsHead from '@/features/DeliveryChannel/UI/DeliverChannelsHead.tsx'
import DeliveryChannelInfo from '@/features/DeliveryChannel/components/DeliveryChannelInfo.tsx'
import { useGetDeliveryChannels } from '@/hooks/useGetDeliveryChannels.ts'
import { handleError } from '@/utils/handleError.ts'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import CreateDeliveryChannelButton from '@/features/DeliveryChannel/components/CreateDeliveryChannelButton.tsx'
import { createPortal } from 'react-dom'
import DeliveryChannelCreateModal from '@/features/DeliveryChannel/components/DeliveryChannelCreateModal.tsx'
import TechPageBlock from '@/components/UI/TechPageBlock.tsx'
import TechBlockFooter from '@/components/UI/TechBlockFooter.tsx'

const DeliveryChannels = () => {
  const { deliveryChannels, isLoading, error, setError } = useGetDeliveryChannels()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error, setError])

  return (
    <>
      {createPortal(<DeliveryChannelCreateModal open={open} setOpen={setOpen} />, document.body)}
      <TechPageBlock>
        {!deliveryChannels || deliveryChannels.length === 0 ? (
          <p className="text-center mt-10">Каналы поставки отсутствуют</p>
        ) : (
          <>
            <DeliverChannelsHead />
            {isLoading && <FillingSkeleton />}
            {deliveryChannels.map((deliveryChannel) => (
              <DeliveryChannelInfo key={deliveryChannel._id} deliveryChannel={deliveryChannel} />
            ))}
            <TechBlockFooter>
              <CreateDeliveryChannelButton onClick={handleOpen} />
            </TechBlockFooter>
          </>
        )}
      </TechPageBlock>
    </>
  )
}

export default DeliveryChannels
