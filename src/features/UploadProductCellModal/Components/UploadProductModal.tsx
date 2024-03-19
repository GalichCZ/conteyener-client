import React, { FC, useEffect, useState } from 'react'
import GModal from '@/components/Layout/GModal.tsx'
import { useGetProducts } from '@/features/UploadProductCellModal/hooks/useGetProducts.ts'
import ProductTableHead from '@/features/UploadProductCellModal/UI/ProductTableHead.tsx'
import ProductTableBody from '@/features/UploadProductCellModal/UI/ProductTableBody.tsx'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { handleError } from '@/utils/handleError.ts'
import { useDeleteProduct } from '@/features/UploadProductCellModal/hooks/useDeleteProduct.ts'
import { useDispatch } from 'react-redux'
import { setReDraw } from '@/store'
import UploadButton from '@/features/UploadProductCellModal/Components/UploadButton.tsx'
import { ModalProps } from '@/Types/ModalProps.ts'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'
import HandMadeWrite from '@/features/UploadProductCellModal/Components/HandMadeWrite.tsx'
import TotalSums from '@/features/UploadProductCellModal/UI/TotalSums.tsx'

interface Props extends ModalProps {
  product: string
  bidId: string
}

const UploadProductModal: FC<Props> = ({ open, product, setOpen, bidId }) => {
  const { products, setError, error, isLoading } = useGetProducts(bidId, product)
  const [productId, setProductId] = useState<string>('')
  const {
    error: deleteError,
    success,
    setError: setDeleteError,
    loading: deleteLoading,
  } = useDeleteProduct(productId, bidId)
  const dispatch = useDispatch()
  const roleTypes = useGetRoleType()

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error, setError])

  useEffect(() => {
    if (deleteError) {
      handleError(deleteError)
      setDeleteError(null)
    }
  }, [deleteError, setDeleteError])

  useEffect(() => {
    if (success) {
      setProductId('')
      dispatch(setReDraw())
    }
  }, [dispatch, success])

  const handleCancel = () => {
    setOpen(false)
  }

  const handleDelete = (id: string) => {
    if (!roleTypes?.isRoleType8) return
    setProductId(id)
  }

  return (
    <GModal
      title={product}
      width="90%"
      className="min-w-[1400px]"
      open={open}
      onCancel={handleCancel}
    >
      {isLoading && <FillingSkeleton />}
      {deleteLoading && <FillingSkeleton />}
      <div className="max-h-[400px] overflow-y-auto mt-3">
        <table>
          <ProductTableHead />
          <ProductTableBody handleDelete={handleDelete} products={products} />
        </table>
      </div>
      {products && <TotalSums products={products} />}
      {roleTypes?.isRoleType8 && (
        <>
          <HandMadeWrite id={bidId} simpleName={product} />
          <UploadButton bidId={bidId} simpleProductName={product} />
        </>
      )}
    </GModal>
  )
}

export default UploadProductModal
