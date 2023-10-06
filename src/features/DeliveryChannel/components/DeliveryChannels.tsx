import React, { useEffect, useState } from "react";
import DeliverChannelsHead from "@/features/DeliveryChannel/UI/DeliverChannelsHead.tsx";
import DeliveryChannelInfo from "@/features/DeliveryChannel/components/DeliveryChannelInfo.tsx";
import { useGetDeliveryChannels } from "@/hooks/useGetDeliveryChannels.ts";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import CreateDeliveryChannelButton from "@/features/DeliveryChannel/components/CreateDeliveryChannelButton.tsx";
import { createPortal } from "react-dom";
import DeliveryChannelCreateModal from "@/features/DeliveryChannel/components/DeliveryChannelCreateModal.tsx";

const DeliveryChannels = () => {
    const { deliveryChannels, isLoading, error, setError } = useGetDeliveryChannels();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null)
        }
    }, [error, setError]);

    return (
        <>
            {createPortal(<DeliveryChannelCreateModal open={open} setOpen={setOpen}/>, document.body)}
            <div className="mt-20 relative overflow-auto rounded-xl bg-white h-3/4 w-3/4">
                <DeliverChannelsHead/>
                {isLoading && <FillingSkeleton/>}
                {deliveryChannels.length === 0 && <p className="text-center mt-10">Каналы поставки отсутствуют</p>}
                {deliveryChannels.map((deliveryChannel) => <DeliveryChannelInfo key={deliveryChannel._id}
                                                                                deliveryChannel={deliveryChannel}/>)}
                <div className="absolute bottom-0 bg-white">
                    <CreateDeliveryChannelButton onClick={handleOpen}/>
                </div>
            </div>
        </>
    );
}

export default DeliveryChannels;