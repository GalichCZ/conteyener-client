import { DeliveryChannel } from '@/Types'
import { getDeliveryChannels } from '../GlobalApi/getDeliveryChannels.ts'
import { useGetDataFromServer } from '@/hooks/useGetDataFromServer.ts'

export const useGetDeliveryChannels = () => {
  const {
    data: deliveryChannels,
    isLoading,
    error,
    setError,
  } = useGetDataFromServer<DeliveryChannel[]>({ callGetData: getDeliveryChannels })

  return { deliveryChannels, isLoading, error, setError }
}
