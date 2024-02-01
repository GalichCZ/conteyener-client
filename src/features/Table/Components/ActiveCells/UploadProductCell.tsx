import React, { FC, useMemo, useState } from 'react'

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

  const productNames = useMemo(
    () =>
      bid.simple_product_name.map((name) => {
        const hasAdded = bid.product_has_added ? bid.product_has_added[name] : false
        return name.concat(hasAdded ? '✔️' : '')
      }),
    [bid.product_has_added, bid.simple_product_name]
  )

  if (user && user.role !== allowedRoles[user.role as keyof typeof allowedRoles]) return <></>
  const onProductClick = (product: string) => {
    setProduct(product.replace('✔️', ''))
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
      <TableCell.Array modelArray={[]} onClick={onProductClick} dataArray={productNames} />
    </>
  )
}

export default UploadProductCell
