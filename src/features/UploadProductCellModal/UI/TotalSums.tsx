import React, { FC, useMemo } from 'react'
import { Products } from '@/Types'
import { countTotalSum } from '@/features/UploadProductCellModal/utils/countTotalSum.ts'

interface Props {
  products: Products[]
}

const TotalSums: FC<Props> = ({ products }) => {
  const pieces = useMemo(
    () => countTotalSum(products.map(({ quantity_pieces }) => quantity_pieces)),
    [products]
  )
  const places = useMemo(
    () => countTotalSum(products.map(({ quantity_places }) => quantity_places)),
    [products]
  )
  const sum = useMemo(
    () => countTotalSum(products.map(({ total_price }) => total_price)),
    [products]
  )

  return (
    <div className="flex gap-5 mt-5 text-xl">
      <p>Общее кол-во штук: {pieces}</p>
      <p>Общее кол-во мест: {places}</p>
      <p>Общая сумма: {sum}</p>
    </div>
  )
}

export default TotalSums
