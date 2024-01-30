import { useState } from 'react'
import { NewBid } from '@/features/CreateBidModal/Types/NewBid.ts'
import { createBid } from '@/features/CreateBidModal/Api/createBid.ts'
import { Error } from '@/Types'
import { AxiosError } from 'axios'
import { createDataValidate } from '@/features/CreateBidModal/validation/createDataValidate.ts'
import { checkArrayDuplicates } from '@/features/UpdateBidModal/utils/checArrayDuplicates.ts'

export const useCreateBid = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const checkIsBidValid = (newBid: NewBid) => {
    const isAllArraysValid = createDataValidate(newBid)
    const isOrderNumberDuplicates = checkArrayDuplicates(
      newBid.order_number.map((item) => item.order_number)
    )
    if (isOrderNumberDuplicates) {
      setError({
        message: `Повторяющийся № заказа: ${isOrderNumberDuplicates}`,
        status: null,
      })
      return false
    }
    if (!isAllArraysValid) {
      setError({ message: 'Заполните все поля', status: null })
      return false
    }

    return true
  }

  const callCreateBid = async (newBid: NewBid) => {
    if (!checkIsBidValid(newBid)) return
    setIsLoading(true)
    try {
      await createBid(newBid)
      setIsSuccess(true)
      setIsLoading(false)
    } catch (error) {
      const err = error as AxiosError
      setError({
        message: (err.response?.data as { message: string }).message,
        status: err.request.status,
      })
      setIsLoading(false)
    }
  }

  return { isLoading, isSuccess, error, setError, callCreateBid }
}
