import { useEffect, useState } from "react";
import { DeliveryChannel, Error } from "@/Types";
import { getDeliveryChannels } from "../Api/getDeliveryChannels.ts";
import { AxiosError } from "axios";

export const useGetDeliveryChannels = () => {
    const [deliveryChannels, setDeliveryChannels] = useState<DeliveryChannel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

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
    }, []);

    return { deliveryChannels, isLoading, error };
}