import React, { FC, useCallback, useEffect, useState } from 'react'
import GModal from '@/components/Layout/GModal.tsx'
import StockPlaceForm from '@/features/StockPlaces/components/StockPlaceForm.tsx'
import { useForm } from 'react-hook-form'
import { StockPlace } from '@/Types'
import { usePostStockPlace } from '@/features/StockPlaces/hooks/usePostStockPlace.ts'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { handleError } from '@/utils/handleError.ts'
import { setReDraw } from '@/store/slices/reDrawSlice.ts'
import { useAppDispatch } from '@/hooks/hooksRedux.ts'
import { yupResolver } from '@hookform/resolvers/yup'
import { StockPlaceSchema } from '@/features/StockPlaces/validation/StockPlaceSchema.js'
import { ModalProps } from '@/Types/ModalProps.ts'

const CreateStockPlaceModal: FC<ModalProps> = ({ open, setOpen }) => {
  const { control, handleSubmit, setValue } = useForm<StockPlace>({
    resolver: yupResolver(StockPlaceSchema),
  })
  const [stockPlace, setStockPlace] = useState<StockPlace | null>(null)
  const { error, setError, success, isLoading } = usePostStockPlace(stockPlace)
  const dispatch = useAppDispatch()

  const onSubmit = (data: StockPlace) => {
    setStockPlace(data)
  }

  const handleOpen = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  useEffect(() => {
    if (error) {
      handleError(error)
      setStockPlace(null)
      setError(null)
    }
  }, [error])

  useEffect(() => {
    if (success) {
      handleOpen()
      setStockPlace(null)
      dispatch(setReDraw())
    }
  }, [success])

  return (
    <GModal title="Создание" open={open} onCancel={handleOpen}>
      {isLoading && <FillingSkeleton />}
      <StockPlaceForm
        setValue={setValue}
        onSubmit={handleSubmit(onSubmit)}
        control={control}
        stockPlace={null}
      />
    </GModal>
  )
}

export default CreateStockPlaceModal
