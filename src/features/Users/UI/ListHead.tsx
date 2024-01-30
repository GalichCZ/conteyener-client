import React from 'react'
import PoleWrapper from '@/features/Users/UI/PoleWrapper.tsx'
import RowWrap from '@/components/UI/RowWrap.tsx'

const ListHead = () => {
  return (
    <RowWrap className="sticky top-0 bg-white mb-4 z-[2] border-b-2 py-4">
      <PoleWrapper>
        <b>Имя:</b>
      </PoleWrapper>
      <PoleWrapper>
        <b>Фамилия:</b>
      </PoleWrapper>
      <PoleWrapper>
        <b>Email:</b>
      </PoleWrapper>
      <PoleWrapper>
        <b>Роль:</b>
      </PoleWrapper>
      <PoleWrapper>
        <b></b>
      </PoleWrapper>
    </RowWrap>
  )
}

export default ListHead
