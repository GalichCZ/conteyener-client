import { useEffect, useState } from "react";
import { Error } from "@/Types"
import { deleteStockPlace } from "@/features/StockPlaces/Api/deleteStockPlace.ts";
import { AxiosError } from "axios";

export const useDeleteStockPlace = (stockPlaceId: string | undefined) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!stockPlaceId) return;
        const callDeleteStockPlace = async () => {
            setIsLoading(true);
            try {
                await deleteStockPlace(stockPlaceId);
                setSuccess(true);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        }
        callDeleteStockPlace();
    }, [stockPlaceId]);

    return { isLoading, error, success, setError }
}