import React, { FC, useEffect } from 'react'
import DeclarationTableHead from '@/features/DeclarationModal/UI/DeclarationTableHead.tsx'
import DeclarationTableBody from '@/features/DeclarationModal/UI/DeclarationTableBody.tsx'
import { useGetDeclarationStatuses } from '@/features/DeclarationModal/hooks/useGetDeclarationStatuses.ts'
import { handleError } from '@/utils/handleError.ts'

interface Props {
  declarationNumber: string
}

const DeclarationTable: FC<Props> = ({ declarationNumber }) => {
  const { error, setError, statuses, isLoading } = useGetDeclarationStatuses(declarationNumber)

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error, setError])

  return (
    <table>
      <DeclarationTableHead />
      {isLoading ? (
        <tr>
          <td colSpan={4}>Загрузка...</td>
        </tr>
      ) : (
        <DeclarationTableBody declarations={statuses} />
      )}
    </table>
  )
}

export default DeclarationTable
