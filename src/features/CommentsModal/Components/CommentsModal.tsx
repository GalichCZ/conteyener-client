import React, { FC, useEffect } from 'react'
import GModal from '@/components/Layout/GModal.tsx'
import { ModalProps } from '@/Types/ModalProps.ts'
import { useGetComments } from '@/features/CommentsModal/hooks/useGetComments.ts'
import { FollowBid } from '@/Types'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { handleError } from '@/utils/handleError.ts'
import Comments from '@/features/CommentsModal/Components/Comments.tsx'
import CreateComment from '@/features/CommentsModal/Components/CreateComment.tsx'

interface Props extends ModalProps {
  bid: FollowBid
}

const CommentsModal: FC<Props> = ({ setOpen, open, bid }) => {
  const { loading, comments, error, setError } = useGetComments(bid._id)

  const handleCancel = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error, setError])

  return (
    <GModal title="Комментарии" open={open} onCancel={handleCancel}>
      {loading && <FillingSkeleton />}
      <Comments comments={comments} />
      <CreateComment bidId={bid._id} />
    </GModal>
  )
}

export default CommentsModal
