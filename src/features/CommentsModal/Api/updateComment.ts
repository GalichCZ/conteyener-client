import axios from '@/provider/axiosInstanse.ts'
const { axiosInstance } = axios

export interface UpdateComment {
  commentId?: string
  commentText: string
  bidId: string
}

export const updateComment = async (comment: UpdateComment) => {
  return await axiosInstance.patch('comment', comment)
}
