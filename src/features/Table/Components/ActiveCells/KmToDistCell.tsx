import React, { FC, useState } from 'react'
import { FollowBid } from '@/Types'
import TableCell from '../../UI/Cell/TableCell'
import KmToDistModal from '@/features/KmToDist/components/KmToDistModal.tsx'
import { createPortal } from 'react-dom'

interface Props {
  bid: FollowBid
}

const KmToDistCell: FC<Props> = ({ bid }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      {open &&
        createPortal(<KmToDistModal bid={bid} open={open} setOpen={setOpen} />, document.body)}
      <TableCell.Cell onClick={handleOpen}>{bid.km_to_dist}</TableCell.Cell>
    </>
  )
}

export default KmToDistCell
