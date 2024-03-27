import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Input } from 'antd'
import Button from '@/components/UI/Button.tsx'
import { Comment as IComment } from '@/Types'
import { formatDate } from '@/utils/convertDate.ts'
import { usePatchComment } from '@/features/CommentsModal/hooks/usePatchComment.ts'
import { handleError } from '@/utils/handleError.ts'
import { displaySuccess } from '@/utils/displaySuccess.ts'

interface Props {
  comment: IComment
}

const Comment: FC<Props> = ({ comment }) => {
  const [com, setCom] = useState<string>(comment.comment_text)
  const [isChanged, setIsChanged] = useState(true)
  const { callPatchComment, error, setError, success } = usePatchComment()

  const areaHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCom(e.target.value)
  }

  const submitHandle = () => {
    callPatchComment({ commentText: com, bidId: comment.comment_item, commentId: comment._id })
  }

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
    if (success) {
      displaySuccess('Комментарий успешно обновлен')
    }
  }, [error, success])

  useEffect(() => {
    setIsChanged(com === comment.comment_text)
  }, [com, comment.comment_text])

  return (
    <div className="flex relative mt-10 gap-4">
      <span className="absolute -top-1 left-0 -translate-y-full">
        {comment.comment_creator?.first_name} {comment.comment_creator?.last_name}
      </span>

      <Input.TextArea defaultValue={comment.comment_text} onChange={areaHandle} />

      <span className="absolute right-0 bottom-0 translate-y-1">
        {formatDate(comment.comment_date)}
      </span>

      <Button
        className="h-8"
        onClick={submitHandle}
        type="side"
        disabled={isChanged}
        text="Редактировать"
      />
    </div>
  )
}

export default Comment
