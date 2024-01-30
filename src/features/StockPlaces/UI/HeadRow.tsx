import React from 'react'
import RowWrap from '@/components/UI/RowWrap.tsx'
import CellWrap from '@/features/StockPlaces/UI/CellWrap.tsx'

const HeadRow = () => {
  return (
    <RowWrap className="sticky top-0 bg-white">
      <CellWrap>
        <b>Наименование:</b>
      </CellWrap>
      <CellWrap>
        <b>Адрес:</b>
      </CellWrap>
      <CellWrap>
        <b>Контакт:</b>
      </CellWrap>
      <CellWrap>
        <b>Пометка:</b>
      </CellWrap>
      <CellWrap>
        <b></b>
      </CellWrap>
      <CellWrap>
        <b></b>
      </CellWrap>
    </RowWrap>
  )
}

export default HeadRow
