import { ModalProps } from '@/Types/ModalProps.ts'
import { FollowBid } from '@/Types'
import React, { FC, useCallback, useEffect } from 'react'
import GModal from '@/components/Layout/GModal.tsx'
import FormLayout from '@/components/Layout/FormLayout.tsx'
import GInputs from '@/components/GInput/GInputs.ts'
import { ColumnsKeysEnum } from '@/enums/columnsEnum.ts'
import { useForm } from 'react-hook-form'
import GButton from '@/components/GInput/components/GButton.tsx'
import { useUpdateKm } from '@/features/KmToDist/hook/useUpdateKm.ts'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { handleError } from '@/utils/handleError.ts'
import { useDispatch } from 'react-redux'
import { setReDraw } from '@/store'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'

interface Props extends ModalProps {
  bid: FollowBid
}

export type Km = Pick<FollowBid, 'km_to_dist'>

const KmToDistModal: FC<Props> = ({ open, setOpen, bid }) => {
  const { loading, setError, success, error, changeKm } = useUpdateKm()
  const { control, handleSubmit, setValue } = useForm<Km>()
  const dispatch = useDispatch()
  const roleTypes = useGetRoleType()

  const handleCancel = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const onSubmit = (data: Km) => {
    changeKm(data.km_to_dist, bid._id)
  }

  useEffect(() => {
    if (open) setValue('km_to_dist', bid.km_to_dist)
  }, [bid.km_to_dist, open])

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error])

  useEffect(() => {
    if (success) {
      handleCancel()
      dispatch(setReDraw())
    }
  }, [success])

  return (
    <GModal title="Километров осталось" open={open} onCancel={handleCancel}>
      {loading && <FillingSkeleton />}
      <FormLayout className="shadow-none" onFinish={handleSubmit(onSubmit)}>
        <GInputs.Number
          disabled={!roleTypes?.isRoleType8}
          min={0}
          max={Number.MAX_SAFE_INTEGER}
          name={ColumnsKeysEnum.KM_TO_DIST.toLowerCase()}
          label="Километров осталось"
          control={control}
        />
        {roleTypes?.isRoleType8 && <GButton text="Подтвердить" />}
      </FormLayout>
    </GModal>
  )
}

export default KmToDistModal
