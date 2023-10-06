import React from "react";
import DeliveryChannels from "@/features/DeliveryChannel/components/DeliveryChannels.tsx";
import SectionLayout from "@/components/Layout/SectionLayout.tsx";

const DeliveryChannelPage = () => {
    return (
        <SectionLayout justify="center" items="start">
            <DeliveryChannels/>
        </SectionLayout>
    )
}

export default DeliveryChannelPage;
