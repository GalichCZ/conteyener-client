import React, { FC, useState } from 'react'

import TableCell from '@/features/Table/UI/Cell/TableCell.tsx'
import { Docs, FollowBid } from '@/Types'
import { createPortal } from 'react-dom'
import UpdateDocsModal from '@/features/UpdateDocsModal/Components/UpdateDocsModal.tsx'
import { useAppSelector } from '@/hooks/hooksRedux.ts'
import { roleType6 } from '@/features/Table/enums/roleTypes.ts'

interface Props {
  bid: FollowBid
}

const UpdateDocsCell: FC<Props> = ({ bid }) => {
  const [open, setOpen] = useState(false)
  const [docs, setDocs] = useState<Docs>({} as Docs)

  const user = useAppSelector((state) => state.authentication.user)

  if (user && user.role !== roleType6[user.role as keyof typeof roleType6]) return <></>

  const filledDocs = (docs: Docs) => {
    let filled = 0
    Object.values(docs).forEach((value) => {
      if (value === true) {
        filled++
      }
    })
    return filled
  }

  const docsArray = bid.is_docs.map((docs) => {
    return `${filledDocs(docs)}/9`
  })

  const handleOpen = () => {
    setOpen(true)
  }

  const onDocClick = (_docsCount: string, docs: Docs) => {
    handleOpen()
    setDocs(docs)
  }

  return (
    <>
      {open &&
        createPortal(
          <UpdateDocsModal bidId={bid._id} docs={docs} open={open} setOpen={setOpen} />,
          document.body
        )}
      <TableCell.Array onClick={onDocClick} modelArray={bid.is_docs} dataArray={docsArray} />
    </>
  )
}

export default UpdateDocsCell
