import React, { useEffect } from 'react'
import Button from '@/components/UI/Button.tsx'
import { useDownloadExcel } from '@/features/Table/hooks/useDownloadExcel.ts'
import { handleError } from '@/utils/handleError.ts'
import { createPortal } from 'react-dom'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { useAppSelector } from '@/hooks/hooksRedux.ts'

const DownloadExcel = ({ setOpen }: { setOpen: (c: boolean) => void }) => {
  const { loading, createDownload, error, setError, success, createDownloadProducts } =
    useDownloadExcel()

  const { user } = useAppSelector(({ authentication }) => authentication)

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error])

  useEffect(() => {
    if (success) {
      setOpen(false)
    }
  }, [success])

  return (
    <>
      {loading && createPortal(<FillingSkeleton />, document.body)}
      <Button
        onClick={createDownload}
        text="Скачать актуальную таблицу"
        type="primary"
        className="w-[170px]"
      />
      {user?.email === 'a.dubovskaya@onlypatriot.com' && (
        <Button
          text="Скачать инфо о товарах"
          onClick={createDownloadProducts}
          type="primary"
          className="w-[170px]"
        />
      )}
    </>
  )
}

export default DownloadExcel
