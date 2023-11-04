import { useState } from "react";
import { Error, NewComment } from "@/Types";
import { AxiosError } from "axios";
import { createComment } from "@/features/CommentsModal/Api/createComment.ts";

export const useCreateComment = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const callCreateComment = async (comment: NewComment) => {
        setLoading(true);
        try {
            await createComment(comment);
            setLoading(false);
            setSuccess(true);
        } catch (e) {
            const err = e as AxiosError;
            setError({ message: err.message, status: err.request.status });
            setLoading(false)
        }
    }

    return { loading, success, setError, error, callCreateComment }
}