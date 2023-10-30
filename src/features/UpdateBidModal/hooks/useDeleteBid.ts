import { useState } from "react";
import { Error } from "@/Types";
import { AxiosError } from "axios";
import { deleteBid } from "@/features/UpdateBidModal/Api/deleteBid.ts";

export const useDeleteBid = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const callDeleteBid = async (bidId: string) => {
        setLoading(true);
        try {
            await deleteBid(bidId);
            setSuccess(true);
            setLoading(false);
        } catch (e) {
            const err = e as AxiosError;
            setError({
                message: (err.response?.data as { error: string }).error,
                status: err.request.status
            })
            setLoading(false);
        }
    }

    return { loading, setError, error, success, callDeleteBid }
}