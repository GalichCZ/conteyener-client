import React, { FC } from "react";
import RowWrap from "@/features/DeliveryChannel/UI/RowWrap.tsx";
import PoleWrap from "@/features/DeliveryChannel/UI/PoleWrap.tsx";
import { DeliveryChannel } from "@/Types";

interface Props {
    deliveryChannel: DeliveryChannel
}

const DeliveryChannelInfo: FC<Props> = ({ deliveryChannel }) => {
    return (
        <RowWrap>
            <PoleWrap>
                {deliveryChannel.name}
            </PoleWrap>
            <PoleWrap>
                {deliveryChannel.eta}
            </PoleWrap>
            <PoleWrap>
                {deliveryChannel.date_do}
            </PoleWrap>
            <PoleWrap>
                {deliveryChannel.declaration_issue_date}
            </PoleWrap>
            <PoleWrap>
                {deliveryChannel.train_depart_date}
            </PoleWrap>
            <PoleWrap>
                {deliveryChannel.train_arrive_date}
            </PoleWrap>
            <PoleWrap>
                {deliveryChannel.store_arrive_date}
            </PoleWrap>
        </RowWrap>
    )
}

export default DeliveryChannelInfo;