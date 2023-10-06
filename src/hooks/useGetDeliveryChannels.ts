import { useEffect, useState } from "react";
import { DeliveryChannel, Error } from "@/Types";
import { getDeliveryChannels } from "../GlobalApi/getDeliveryChannels.ts";
import { AxiosError } from "axios";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

export const useGetDeliveryChannels = () => {
    const [deliveryChannels, setDeliveryChannels] = useState<DeliveryChannel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const reDraw = useAppSelector((state) => state.reDraw.reDraw);

    useEffect(() => {
        const callGetDeliveryChannels = async () => {
            setIsLoading(true);
            try {
                const { data } = await getDeliveryChannels();
                setDeliveryChannels(data);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        }
        callGetDeliveryChannels();
    }, [reDraw]);

    return { deliveryChannels, isLoading, error, setError };
}