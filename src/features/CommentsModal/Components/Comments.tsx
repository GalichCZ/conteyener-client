import React, { FC } from 'react'
import { Comment as IComment } from '@/Types'
import Comment from './Comment.tsx'

interface Props {
  comments: IComment[] | null
}

const Comments: FC<Props> = ({ comments }) => {
  if (!comments || comments.length < 1) {
    return <b>Комментарии отсутствуют</b>
  }

  return (
    <div className="mt-8 border-b-2 pb-4 border-b-gray-400">
      {comments.map((com) => (
        <Comment comment={com} key={com._id} />
      ))}
    </div>
  )
}

export default Comments
