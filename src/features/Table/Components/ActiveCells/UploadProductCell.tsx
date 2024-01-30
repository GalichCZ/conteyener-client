import React, { FC, useState } from 'react'

import TableCell from '@/features/Table/UI/Cell/TableCell.tsx'
import { FollowBid } from '@/Types'
import { createPortal } from 'react-dom'
import UploadProductModal from '@/features/UploadProductCellModal/Components/UploadProductModal.tsx'
import { useAppSelector } from '@/hooks/hooksRedux.ts'

interface Props {
  bid: FollowBid
}

enum allowedRoles {
  manager_int = 'manager_int',
  head = 'head',
  manager_store = 'manager_store',
  manager_sales = 'manager_sales',
  manager_buyer = 'manager_buyer',
  manager_patriot = 'manager_patriot',
}

const UploadProductCell: FC<Props> = ({ bid }) => {
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState<string>('')
  const user = useAppSelector((state) => state.authentication.user)

  if (user && user.role !== allowedRoles[user.role as keyof typeof allowedRoles]) return <></>

  const onProductClick = (product: string) => {
    setProduct(product)
    openHandler()
  }

  const openHandler = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      {open &&
        createPortal(
          <UploadProductModal open={open} setOpen={setOpen} product={product} bidId={bid._id} />,
          document.body
        )}
      <TableCell.Array
        modelArray={[]}
        onClick={onProductClick}
        dataArray={bid.simple_product_name}
      />
    </>
  )
}

export default UploadProductCell
