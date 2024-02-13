import React, { FC, useState } from 'react'
import TableCell from '@/features/Table/UI/Cell/TableCell.tsx'
import { FollowBid } from '@/Types'
import { formatDate } from '@/utils/convertDate.ts'
import { createPortal } from 'react-dom'
import EtdUpdateModal from '@/features/EtdUpdateModal/Components/EtdUpdateModal.tsx'
import { DatesTypesEnum } from '@/enums/datesTypesEnum.ts'

interface Props {
  bid: FollowBid
  hidden: boolean
}

const EtdUpdateCell: FC<Props> = ({ bid, hidden }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  return (
    <>
      {open &&
        createPortal(
          <EtdUpdateModal
            hidden={hidden}
            bidId={bid._id}
            etd={bid.etd}
            dateType={DatesTypesEnum.ETD}
            deliveryChannel={bid.delivery_channel}
            open={open}
            setOpen={setOpen}
          />,
          document.body
        )}
      <TableCell.Cell onClick={handleOpen}>{formatDate(bid.etd)}</TableCell.Cell>
    </>
  )
}

export default EtdUpdateCell
