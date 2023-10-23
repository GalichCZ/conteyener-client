import { Error } from "@/Types";
import { useState } from "react";
import { updateBid } from "@/features/Table/Api/updateBid.ts";
import { AxiosError } from "axios";
import { FormBidUpdateValues } from "@/features/Table/Types/FormBidUpdateValues.ts";

export const useUpdateBid = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const callUpdateBid = async (bid: FormBidUpdateValues) => {
        setLoading(true);
        try {
            await updateBid(bid);
            setSuccess(true);
            setLoading(false)
        } catch (e) {
            const err = e as AxiosError;
            setError({
                message: (err.response?.data as { error: string }).error,
                status: err.request.status
            });
            setLoading(false)
        }
    }

    return { loading, error, success, setError, callUpdateBid }
}