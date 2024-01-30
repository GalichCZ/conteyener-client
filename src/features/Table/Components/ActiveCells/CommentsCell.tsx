import React, { FC, useState } from 'react'
import TableCell from '@/features/Table/UI/Cell/TableCell.tsx'
import { FollowBid } from '@/Types'
import { useAppSelector } from '@/hooks/hooksRedux.ts'
import { roleType7 } from '@/features/Table/enums/roleTypes.ts'
import { createPortal } from 'react-dom'
import CommentsModal from '@/features/CommentsModal/Components/CommentsModal.tsx'

interface Props {
  bid: FollowBid
}

const CommentsCell: FC<Props> = ({ bid }) => {
  const [open, setOpen] = useState(false)
  const user = useAppSelector((state) => state.authentication.user)

  const handleOpen = () => {
    setOpen(true)
  }

  if (user && user.role !== roleType7[user.role as keyof typeof roleType7]) return <></>

  return (
    <>
      {open &&
        createPortal(<CommentsModal bid={bid} open={open} setOpen={setOpen} />, document.body)}
      <TableCell.Cell onClick={handleOpen}>...</TableCell.Cell>
    </>
  )
}

export default CommentsCell
