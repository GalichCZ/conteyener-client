import React, { FC, useEffect } from 'react'
import HandMadeWriteForm from '@/features/UploadProductCellModal/Components/HandMadeWriteForm.tsx'
import { useForm } from 'react-hook-form'
import { Collapse, CollapseProps } from 'antd'
import { PostProduct } from '@/features/UploadProductCellModal/Types/PostProduct.ts'
import { usePostProduct } from '@/features/UploadProductCellModal/hooks/usePostProduct.ts'
import { displaySuccess } from '@/utils/displaySuccess.ts'
import { handleError } from '@/utils/handleError.ts'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { useDispatch } from 'react-redux'
import { setReDraw } from '@/store'

interface Props {
  id: string
  simpleName: string
}

const HandMadeWrite: FC<Props> = ({ id, simpleName }) => {
  const { control, handleSubmit, reset } = useForm<PostProduct>()
  const { callPostProduct, success, setError, error, setSuccess, loading } = usePostProduct()
  const dispatch = useDispatch()

  const onSubmit = (data: PostProduct) => {
    callPostProduct(id, simpleName, data)
  }

  useEffect(() => {
    if (success) {
      displaySuccess('Продукт добавлен')
      setSuccess(false)
      dispatch(setReDraw())
      reset()
      return
    }
    if (error) {
      handleError(error)
      console.log(error)
      setError(null)
      return
    }
  }, [error, setError, setSuccess, success])

  const collapse: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Создать вручную',
      children: <HandMadeWriteForm onSubmit={handleSubmit(onSubmit)} control={control} />,
    },
  ]

  return (
    <div>
      {loading && <FillingSkeleton />}
      <Collapse items={collapse} />
    </div>
  )
}

export default HandMadeWrite
