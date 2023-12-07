import { Error, StockPlace } from "@/Types";
import { useCallback, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { getSingleStockPlace } from "@/features/StockPlaceModal/Api/getSingleStockPlace.ts";

export const useGetSingleStockPlace = (id: string) => {
    const [stockPlace, setStockPlace] = useState<StockPlace | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const callGetSingleStockPlace = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await getSingleStockPlace(id);
            setStockPlace(data);
            setLoading(false);
        } catch (error) {
            const err = error as AxiosError;
            setError({
                message: err.request?.statusText,
                status: err.request.status
            });
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        callGetSingleStockPlace()
    }, [callGetSingleStockPlace]);

    return { store: stockPlace, loading, error, setError };
}