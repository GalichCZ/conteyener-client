import React, { FC, useState } from 'react'
import TableCell from '@/features/Table/UI/Cell/TableCell.tsx'
import { FollowBid } from '@/Types'
import { createPortal } from 'react-dom'
import DeclarationModal from '@/features/DeclarationModal/components/DeclarationModal.tsx'
import { useAppSelector } from '@/hooks/hooksRedux.ts'
import { roleType2 } from '@/features/Table/enums/roleTypes.ts'

interface Props {
  bid: FollowBid
}

const DeclarationCell: FC<Props> = ({ bid }) => {
  const [open, setOpen] = useState(false)
  const [declaration, setDeclaration] = useState<string>('')

  const user = useAppSelector((state) => state.authentication.user)

  if (!user || user.role !== roleType2[user.role as keyof typeof roleType2]) return <></>

  const handleOpen = (declaration: string) => {
    setOpen(true)
    setDeclaration(declaration)
  }

  return (
    <>
      {open &&
        createPortal(
          <DeclarationModal open={open} setOpen={setOpen} declaration={declaration} />,
          document.body
        )}
      <TableCell.ArrayTooltip
        onClick={handleOpen}
        cutLength={15}
        dataArray={bid.declaration_number}
      />
    </>
  )
}

export default DeclarationCell
