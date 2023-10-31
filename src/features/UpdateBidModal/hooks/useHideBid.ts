import { useState } from "react";
import { Error } from "@/Types";
import { AxiosError } from "axios";
import { hideBid } from "@/features/UpdateBidModal/Api/hideBid.ts";

export const useHideBid = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<Error | null>(null)

    const callHideBid = async (bidId: string) => {
        setLoading(true);
        try {
            await hideBid(bidId);
            setLoading(false);
            setSuccess(true);
        } catch (e) {
            const err = e as AxiosError;
            setError({ message: err.message, status: err.request.status })
            setLoading(false)
        }
    }

    return { loading, success, error, setError, callHideBid };
}