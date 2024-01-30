import React, { FC, useState } from 'react'
import { RolesLabelEnumMap } from '@/enums/rolesEnum.ts'
import PoleWrapper from '@/features/Users/UI/PoleWrapper.tsx'
import { User } from '@/Types'
import Button from '@/components/UI/Button.tsx'
import { createPortal } from 'react-dom'
import UserModal from '@/features/Users/components/UserModal.tsx'
import RowWrap from '@/components/UI/RowWrap.tsx'

interface Props {
  user: User
}

const UserInfo: FC<Props> = ({ user }) => {
  const [open, setOpen] = useState<boolean>(false)
  const { first_name, role, last_name, email } = user

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      {createPortal(<UserModal setOpen={setOpen} user={user} open={open} />, document.body)}
      <RowWrap className="border-b-[1px] mt-4 pb-4 items-center">
        <PoleWrapper>
          <p>{first_name}</p>
        </PoleWrapper>
        <PoleWrapper>
          <p>{last_name}</p>
        </PoleWrapper>
        <PoleWrapper>
          <p>{email}</p>
        </PoleWrapper>
        <PoleWrapper>
          <p>{RolesLabelEnumMap[role.toUpperCase()]}</p>
        </PoleWrapper>
        <PoleWrapper>
          <Button
            onClick={handleOpen}
            className="shadow-sm border-b-gray-200 border-2"
            text="Редактировать"
          />
        </PoleWrapper>
      </RowWrap>
    </>
  )
}

export default UserInfo
