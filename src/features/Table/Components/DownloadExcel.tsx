import React, { useEffect } from 'react'
import Button from '@/components/UI/Button.tsx'
import { useDownloadExcel } from '@/features/Table/hooks/useDownloadExcel.ts'
import { handleError } from '@/utils/handleError.ts'
import { createPortal } from 'react-dom'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'

const DownloadExcel = ({ setOpen }: { setOpen: (c: boolean) => void }) => {
  const { loading, createDownload, error, setError, success } = useDownloadExcel()

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error, setError])

  useEffect(() => {
    if (success) {
      setOpen(false)
    }
  }, [setOpen, success])

  return (
    <>
      {loading && createPortal(<FillingSkeleton />, document.body)}
      <Button
        onClick={createDownload}
        text="Скачать актуальную таблицу"
        type="primary"
        className="w-[170px]"
      />
    </>
  )
}

export default DownloadExcel
