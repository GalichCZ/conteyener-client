import React, { FC, useMemo, useState } from 'react'
import TableCell from '@/features/Table/UI/Cell/TableCell.tsx'
import { formatDate } from '@/utils/convertDate.ts'
import { createPortal } from 'react-dom'
import DateCalculateModal from '@/features/DateCalculationModal/Components/DateCalculateModal.tsx'
import { FollowBid } from '@/Types'
import { Colors } from '@/assets/colors.ts'

interface Props {
  date: string
  dateType: number
  dateLabel: string
  bid: FollowBid
  isUpdated: boolean
}

const DatesUpdateCell: FC<Props> = ({ dateType, date, dateLabel, bid, isUpdated }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  //TODO: make map of colors depends on conditions
  const isExpiredDate = useMemo(() => {
    return new Date() > new Date(date) && !isUpdated ? { color: Colors.EXPIRED } : { color: '' }
  }, [date, isUpdated])

  const style = useMemo(() => (isUpdated ? '' : 'text-gray-500'), [isUpdated])

  return (
    <>
      {open &&
        createPortal(
          <DateCalculateModal
            dateLabel={dateLabel}
            open={open}
            setOpen={setOpen}
            bid={bid}
            date={date}
            dateType={dateType}
          />,
          document.body
        )}
      <TableCell.Cell style={isExpiredDate} className={style} onClick={handleOpen}>
        {formatDate(date)}
      </TableCell.Cell>
    </>
  )
}

export default DatesUpdateCell
