import React, { FC, useEffect } from 'react'
import Button from '@/components/UI/Button.tsx'
import { useUnhideBid } from '@/features/Table/hooks/useUnhideBid.ts'
import { handleError } from '@/utils/handleError.ts'
import { displaySuccess } from '@/utils/displaySuccess.ts'

interface Props {
  bidId: string
}

const UnhideBid: FC<Props> = ({ bidId }) => {
  const { success, loading, setError, error, callUnhideBid } = useUnhideBid()
  const clickHandler = () => {
    callUnhideBid(bidId)
  }

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
    if (success) {
      displaySuccess('Запись успешно восстановлена')
    }
  }, [error, success])

  return (
    <td className="border-2 px-4 border-black h-full text-center relative">
      <Button
        text="Восстановить"
        className="shadow-none"
        disabled={loading}
        type="side"
        onClick={clickHandler}
      />
    </td>
  )
}

export default UnhideBid
