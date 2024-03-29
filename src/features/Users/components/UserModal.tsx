import React, { FC, useCallback, useEffect, useState } from 'react'
import { User } from '@/Types'
import FormLayout from '@/components/Layout/FormLayout.tsx'
import { useForm } from 'react-hook-form'
import GInputs from '@/components/GInput/GInputs.ts'
import GButton from '@/components/GInput/components/GButton.tsx'
import Button from '@/components/UI/Button.tsx'
import { UserRoleUpdate } from '@/features/Users/Types/userRoleUpdate.ts'
import { useUpdateUserRole } from '@/features/Users/hooks/useUpdateUserRole.ts'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { handleError } from '@/utils/handleError.ts'
import { useDispatch } from 'react-redux'
import { setReDraw } from '@/store/slices/reDrawSlice.ts'
import GModal from '@/components/Layout/GModal.tsx'
import { getKeyAndValues } from '@/features/Users/utils/getKeyAndValues.ts'

interface Props {
  open: boolean
  user: User
  setOpen: (value: boolean) => void
}

interface FormValues {
  role: string
}

const UserModal: FC<Props> = ({ open, user, setOpen }) => {
  const values = getKeyAndValues()
  const dispatch = useDispatch()

  const { first_name, last_name, email, role } = user
  const { control, handleSubmit, setValue } = useForm<FormValues>()
  const [roleUpdate, setRoleUpdate] = useState<UserRoleUpdate | null>(null)

  const { isLoading, error, setError, success, setSuccess } = useUpdateUserRole(roleUpdate)

  const handleOpen = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const onSubmit = (data: FormValues) => {
    setRoleUpdate({ role: data.role, email })
  }

  useEffect(() => {
    setValue('role', role)
  }, [role, setValue])

  useEffect(() => {
    if (success) {
      dispatch(setReDraw())
      setRoleUpdate(null)
      setSuccess(false)
      handleOpen()
    }
  }, [success])

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error])

  return (
    <GModal onCancel={handleOpen} open={open}>
      {isLoading && <FillingSkeleton />}
      <FormLayout className="shadow-none" onFinish={handleSubmit(onSubmit)}>
        <div className="grid gap-y-4">
          <p>Имя: {first_name}</p>
          <p>Фамилия: {last_name}</p>
          <p>Email: {email}</p>
          <GInputs.Select
            values={values}
            tooltips={[]}
            name="role"
            label="Роль:"
            control={control}
          />
          <div className="flex justify-between h-9">
            <GButton text="Сохранить" />
            <Button
              disabled={true}
              text="Удалить"
              className="border-2 border-red-700 bg-red-600 h-full text-white py-0"
            />
          </div>
        </div>
      </FormLayout>
    </GModal>
  )
}

export default UserModal
