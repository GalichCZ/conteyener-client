import React, { FC, useEffect } from 'react'
import GModal from '@/components/Layout/GModal.tsx'
import { useGetSingleStore } from '@/features/StoreInfoModal/hooks/useGetSingleStore.ts'
import { handleError } from '@/utils/handleError.ts'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { ModalProps } from '@/Types/ModalProps.ts'

interface Props extends ModalProps {
  storeId: string
}

const StoreInfoModal: FC<Props> = ({ open, setOpen, storeId }) => {
  const { error, setError, store, loading } = useGetSingleStore(storeId)

  const handleCancel = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error])

  return (
    <GModal title="Информация о складе" open={open} onCancel={handleCancel}>
      {loading && <FillingSkeleton />}
      {!store ? (
        <b>Склад не найден</b>
      ) : (
        <div className="gap-y-4 flex flex-col mt-5 text-[17px]">
          <p>Название: {store.name}</p>
          <p>Адрес: {store.address}</p>
          <p>Получатель: {store.receiver}</p>
          <p>Контакт: {store.contact}</p>
          <p>Пометка: {store.note}</p>
        </div>
      )}
    </GModal>
  )
}

export default StoreInfoModal
