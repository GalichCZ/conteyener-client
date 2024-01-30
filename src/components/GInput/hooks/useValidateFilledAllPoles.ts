import { InputRecord } from '../types/InputRecord.ts'
import { useCallback, useEffect, useState } from 'react'

interface Params {
  isSubmitted: boolean | undefined
  inputList: InputRecord[]
}

export const useValidateFilledAllPoles = ({ isSubmitted, inputList }: Params) => {
  const [isAllFilled, setIsAllFilled] = useState<boolean>(true)

  const hasEmptyValues = useCallback(
    () => Object.values(inputList).some((value) => Object.values(value)[0] === ''),
    [inputList]
  )

  useEffect(() => {
    if (inputList.length === 0) {
      setIsAllFilled(true)
      return
    }

    setIsAllFilled(!hasEmptyValues())
  }, [hasEmptyValues, inputList, isAllFilled, isSubmitted])

  return isAllFilled
}
