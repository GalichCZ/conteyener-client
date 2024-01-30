import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Input } from 'antd'
import Button from '@/components/UI/Button.tsx'
import { useCreateComment } from '@/features/CommentsModal/hooks/useCreateComment.ts'
import dayjs from 'dayjs'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { useDispatch } from 'react-redux'
import { setReDraw } from '@/store'
import { handleError } from '@/utils/handleError.ts'

interface Props {
  bidId: string
}

const CreateComment: FC<Props> = ({ bidId }) => {
  const [comText, setComText] = useState<string>('')
  const { loading, success, callCreateComment, error, setError } = useCreateComment()
  const dispatch = useDispatch()

  const areaHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComText(e.target.value)
  }

  const submitHandle = () => {
    callCreateComment({
      comment_text: comText,
      comment_date: dayjs().toString(),
      comment_item: bidId,
    })
  }

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error, setError])

  useEffect(() => {
    if (success) {
      dispatch(setReDraw())
    }
  }, [dispatch, success])

  return (
    <div className="mt-3 flex flex-col gap-4">
      {loading && <FillingSkeleton />}
      <Input.TextArea onChange={areaHandle} />
      <Button className="self-start" onClick={submitHandle} type="primary" text="Отправить" />
    </div>
  )
}

export default CreateComment
