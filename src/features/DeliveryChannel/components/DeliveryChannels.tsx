import React, { useEffect } from "react";
import DeliverChannelsHead from "@/features/DeliveryChannel/UI/DeliverChannelsHead.tsx";
import DeliveryChannelInfo from "@/features/DeliveryChannel/components/DeliveryChannelInfo.tsx";
import { useGetDeliveryChannels } from "@/hooks/useGetDeliveryChannels.ts";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import CreateDeliveryChannelButton from "@/features/DeliveryChannel/components/CreateDeliveryChannelButton.tsx";

const DeliveryChannels = () => {
    const { deliveryChannels, isLoading, error, setError } = useGetDeliveryChannels();

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null)
        }
    }, [error, setError]);

    return (
        <div className="mt-20 relative overflow-auto rounded-xl bg-white h-1/2 w-3/4">
            <DeliverChannelsHead/>
            {isLoading && <FillingSkeleton/>}
            {deliveryChannels.length === 0 && <p className="text-center mt-10">Каналы поставки отсутствуют</p>}
            {deliveryChannels.map((deliveryChannel) => <DeliveryChannelInfo key={deliveryChannel._id}
                                                                            deliveryChannel={deliveryChannel}/>)}
            <CreateDeliveryChannelButton onClick={() => {
            }}/>
        </div>
    );
}

export default DeliveryChannels;