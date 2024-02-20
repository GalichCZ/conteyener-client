import React, { FC, useCallback, useEffect } from 'react'
import GModal from '@/components/Layout/GModal.tsx'
import DeclarationTable from '@/features/DeclarationModal/components/DeclarationTable.tsx'
import DeclarationStatusForm from '@/features/DeclarationModal/components/DeclarationStatusForm.tsx'
import { useForm } from 'react-hook-form'
import { Declaration } from '@/Types'
import { yupResolver } from '@hookform/resolvers/yup'
import { DeclarationSchema } from '@/features/DeclarationModal/validation/declaration.schema.js'
import { ModalProps } from '@/Types/ModalProps.ts'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'
import { usePostDeclarationStatus } from '@/features/DeclarationModal/hooks/usePostDeclarationStatus.ts'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { handleError } from '@/utils/handleError.ts'
import { displaySuccess } from '@/utils/displaySuccess.ts'

interface Props extends ModalProps {
  declaration: string
}

const DeclarationModal: FC<Props> = ({ open, setOpen, declaration }) => {
  const { control, handleSubmit } = useForm<Declaration>({
    resolver: yupResolver(DeclarationSchema),
  })
  const { success, setError, error, postDeclarationStatus, loading } = usePostDeclarationStatus()
  const roleTypes = useGetRoleType()

  const onSubmitHandle = (data: Declaration) => {
    data.declaration_number = declaration
    postDeclarationStatus(data)
  }

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
    if (success) {
      displaySuccess('Статус декларации успешно обновлен')
    }
  }, [error, success])

  const onCancelHandle = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <GModal title="Статус декларации" open={open} onCancel={onCancelHandle}>
      {loading && <FillingSkeleton />}
      {roleTypes?.isRoleType8 && (
        <DeclarationStatusForm onClick={handleSubmit(onSubmitHandle)} control={control} />
      )}
      <DeclarationTable declarationNumber={declaration} />
    </GModal>
  )
}

export default DeclarationModal
