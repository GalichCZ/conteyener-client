import React, { FC } from 'react'
import { Products } from '@/Types'
import Cell from '@/features/UploadProductCellModal/UI/Cell.tsx'
import { formatNumber } from '@/utils/formatNumber.ts'
import { CloseOutlined } from '@ant-design/icons'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'

interface Props {
  handleDelete: (id: string) => void
  products: Products[] | null
}

const ProductTableBody: FC<Props> = ({ products, handleDelete }) => {
  const roleType = useGetRoleType()

  if (!products) return <h3>Нет продуктов</h3>

  return (
    <tbody>
      {products?.map((product, index) => (
        <tr key={index}>
          <Cell className="w-[40px]">{index + 1}</Cell>
          <Cell>{product.hs_code}</Cell>
          <Cell className="min-w-[120px]">{product.article_ved}</Cell>
          <Cell>{product.article_erp}</Cell>
          <Cell>{product.trade_mark}</Cell>
          <Cell>{product.product_name}</Cell>
          <Cell>{product.model}</Cell>
          <Cell>{product.modification}</Cell>
          <Cell className="w-[70px]">{product.quantity_pieces}</Cell>
          <Cell className="w-[70px]">{product.quantity_places}</Cell>
          {roleType?.isRoleType1 && <Cell>{formatNumber(product.piece_price, 'en-US')}</Cell>}
          {roleType?.isRoleType1 && <Cell>{formatNumber(product.total_price, 'en-US')}</Cell>}
          <Cell>{formatNumber(product.weight_net, 'en-US')}</Cell>
          <Cell>{formatNumber(product.weight_gross, 'en-US')}</Cell>
          <Cell>{formatNumber(product.cbm, 'en-US')}</Cell>
          <Cell>{product.manufacturer}</Cell>
          <Cell>
            <CloseOutlined onClick={() => handleDelete(product._id)} />
          </Cell>
        </tr>
      ))}
    </tbody>
  )
}

export default ProductTableBody
