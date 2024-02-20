import React, { FC } from 'react'
import Row from '@/features/Table/Components/Row.tsx'
import { FollowBid } from '@/Types'

interface Props {
  bids: FollowBid[] | undefined
  hidden: boolean
}

const TableBody: FC<Props> = ({ bids, hidden }) => {
  return (
    <tbody className="bg-white table-body-extern">
      {bids
        ? bids.map((bid, index) => <Row hidden={hidden} number={index} key={index} bid={bid} />)
        : null}
    </tbody>
  )
}

export default TableBody
