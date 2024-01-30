import { Upload } from 'antd'
import React, { FC } from 'react'
import Button from '@/components/UI/Button.tsx'
import { useDispatch } from 'react-redux'
import { useUpload } from '@/hooks/useUpload.ts'

interface Props {
  bidId: string
  simpleProductName: string
}

const UploadButton: FC<Props> = ({ bidId, simpleProductName }) => {
  const dispatch = useDispatch()
  const { uploadFile } = useUpload(
    `${import.meta.env.VITE_API_URL}/product/${bidId}/${simpleProductName}`,
    dispatch
  )

  return (
    <Upload {...uploadFile()}>
      <Button type="primary" className="mt-4 text-lg" text="Загрузить" />
    </Upload>
  )
}

export default UploadButton
