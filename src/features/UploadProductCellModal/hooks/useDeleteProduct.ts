import { Error } from "@/Types";
import { useEffect, useState } from "react";
import { deleteProducts } from "@/features/UploadProductCellModal/Api/deleteProduct.ts";
import { AxiosError } from "axios";

export const useDeleteProduct = (id: string, bidId: string) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);

    const callDeleteProduct = async (_id: string, _bidId: string) => {
        setLoading(true)
        setSuccess(false);
        try {
            await deleteProducts(_id, _bidId);
            setSuccess(true);
            setLoading(false)
        } catch (error) {
            const err = error as AxiosError
            setError({
                message: (err.response?.data as { message: string }).message,
                status: err.request.status
            });
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!id || !bidId) return
        callDeleteProduct(id, bidId)
    }, [bidId, id]);

    return { loading, error, setError, success }
}