import { Error, StockPlace } from "@/Types";
import { useEffect, useState } from "react";
import { postStockPlace } from "../Api/postStockPlace";
import { AxiosError } from "axios";

export const usePostStockPlace = (stockPlace: StockPlace | null) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!stockPlace) return;
        const callPostStockPlace = async () => {
            setIsLoading(true);
            try {
                await postStockPlace(stockPlace);
                setSuccess(true);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        }
        callPostStockPlace();
    }, [stockPlace]);

    return { isLoading, error, success, setError };
}