import { DeliveryChannel, Error } from "@/Types";
import { useEffect, useState } from "react";
import { postDeliveryChannel } from "@/features/DeliveryChannel/Api/postDeliveryChannel.ts";
import { AxiosError } from "axios";

export const usePostDeliveryChannel = (deliveryChannel: DeliveryChannel | null) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        if (!deliveryChannel) return;
        const callPostDeliveryChannel = async () => {
            setIsLoading(true);
            try {
                await postDeliveryChannel(deliveryChannel);
                setIsLoading(false);
                setSuccess(true);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        }
        callPostDeliveryChannel();
    }, [deliveryChannel]);

    return { isLoading, error, setError, success };
}