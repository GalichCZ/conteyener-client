import React, { FC } from 'react'
import Row from '@/features/Table/Components/Row.tsx'
import { FollowBid } from '@/Types'

interface Props {
  bids: FollowBid[] | undefined
}

const TableBody: FC<Props> = ({ bids }) => {
  return (
    <tbody className="bg-white table-body-extern">
      {bids ? bids.map((bid, index) => <Row key={index} bid={bid} />) : null}
    </tbody>
  )
}

export default TableBody
