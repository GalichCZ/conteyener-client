import React, { FC, useCallback, useEffect, useState } from 'react'
import GModal from '@/components/Layout/GModal.tsx'
import DateCalculateForm from '@/features/DateCalculationModal/Components/DateCalculateForm.tsx'
import { useForm } from 'react-hook-form'
import { DateCalculateFormType, FollowBid } from '@/Types'
import dayjs from 'dayjs'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { handleError } from '@/utils/handleError.ts'
import { useCalculateDate } from '@/features/DateCalculationModal/hooks/useCalculateDate.ts'
import { setReDraw } from '@/store'
import { useDispatch } from 'react-redux'
import { ModalProps } from '@/Types/ModalProps.ts'
import { getDateFromDayjs } from '@/utils/getDateFromDayjs.ts'

interface Props extends ModalProps {
  dateType: number
  dateLabel: string
  bid: FollowBid
  date: string
  hidden: boolean
}

const DateCalculateModal: FC<Props> = ({
  open,
  setOpen,
  dateType,
  dateLabel,
  bid,
  date,
  hidden,
}) => {
  const { control, handleSubmit, setValue } = useForm<DateCalculateFormType>()
  const [data, setData] = useState<DateCalculateFormType | null>(null)
  const { error, setError, success, loading } = useCalculateDate(data)
  const dispatch = useDispatch()
  const handleCancel = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const deliveryChannel = bid.delivery_channel

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error])

  useEffect(() => {
    if (success) {
      dispatch(setReDraw())
      handleCancel()
    }
  }, [success])

  useEffect(() => {
    setValue('date_type', dateType)
    setValue('bidId', bid._id)
    if (deliveryChannel) {
      setValue('delivery_channel', deliveryChannel._id)
    }
    if (date) {
      setValue('date', dayjs(date))
    }
  }, [bid, date, dateType, deliveryChannel])

  const onSubmit = (data: DateCalculateFormType) => {
    const dataToSend = { ...data, date: getDateFromDayjs(data.date) }
    setData(dataToSend)
  }

  return (
    <GModal title="Перерасчет дат" open={open} onCancel={handleCancel}>
      {loading && <FillingSkeleton />}
      <DateCalculateForm
        hidden={hidden}
        label={dateLabel}
        onSubmit={handleSubmit(onSubmit)}
        control={control}
      />
    </GModal>
  )
}

export default DateCalculateModal
