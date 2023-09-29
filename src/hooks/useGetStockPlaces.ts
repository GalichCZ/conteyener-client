import { Error, StockPlace } from "@/Types";
import { useEffect, useState } from "react";
import { getStockPlaces } from "@/features/ContainerStock/Api/getStockPlaces.ts";
import { AxiosError } from "axios";

export const useGetStockPlaces = () => {
    const [stockPlaces, setStockPlaces] = useState<StockPlace[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>();

    useEffect(() => {
        const callGetStockPlaces = async () => {
            setIsLoading(true);
            try {
                const { data } = await getStockPlaces();
                setStockPlaces(data);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        }
        return () => {
            callGetStockPlaces();
        }
    }, []);

    return { stockPlaces, isLoading, error, setError };
}