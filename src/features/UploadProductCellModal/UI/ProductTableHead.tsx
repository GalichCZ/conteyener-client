import React from 'react'
import Cell from '@/features/UploadProductCellModal/UI/Cell.tsx'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'

const ProductTableHead = () => {
  const roleType = useGetRoleType()

  return (
    <thead className="text-center font-bold sticky top-0 bg-white">
      <tr>
        <Cell>№ п/п</Cell>
        <Cell>Код ТнВЭД</Cell>
        <Cell>Артикул</Cell>
        <Cell>Торговая марка</Cell>
        <Cell>Наименование товара</Cell>
        <Cell>Модель/Серия(Тип)</Cell>
        <Cell>Модификация</Cell>
        <Cell>Кол-во штук</Cell>
        <Cell>Кол-во мест</Cell>
        {roleType?.isRoleType1 && <Cell>Цена за еденицу</Cell>}
        {roleType?.isRoleType1 && <Cell>Общая сумма</Cell>}
        <Cell>Вес нетто</Cell>
        <Cell>Вес брутто</Cell>
        <Cell>Объем</Cell>
        <Cell>Производитель</Cell>
        <Cell>
          <p></p>
        </Cell>
      </tr>
    </thead>
  )
}

export default ProductTableHead
