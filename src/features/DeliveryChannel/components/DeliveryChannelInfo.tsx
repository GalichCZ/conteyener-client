import React, { FC, useState } from "react";
import PoleWrap from "@/features/DeliveryChannel/UI/PoleWrap.tsx";
import { DeliveryChannel } from "@/Types";
import Button from "@/components/UI/Button.tsx";
import { Tooltip } from 'react-tooltip'
import DeliveryChannelUpdateModal from "@/features/DeliveryChannel/components/DeliveryChannelUpdateModal.tsx";
import { createPortal } from "react-dom";
import RowWrap from "@/components/UI/RowWrap.tsx";

interface Props {
    deliveryChannel: DeliveryChannel
}

const DeliveryChannelInfo: FC<Props> = ({ deliveryChannel }) => {
    const [update, setUpdate] = useState(false);

    const handleUpdate = () => {
        setUpdate(true);
    }

    return (
        <>
            {update && createPortal(<DeliveryChannelUpdateModal deliveryChannel={deliveryChannel} open={update}
                                                                setOpen={setUpdate}/>, document.body)}
            <Tooltip id="delete"/>
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
                <PoleWrap>
                    <Button onClick={handleUpdate} text="Редактировать"
                            className="border-2 border-gray-300 shadow-none"/>
                </PoleWrap>
                <PoleWrap className="relative">
                    <div className="w-full h-full absolute" data-tooltip-id="delete"
                         data-tooltip-content="В разработке"></div>
                    <Button text="Удалить" disabled={true}
                            className="border-2 border-red-500 text-red-500 shadow-none"/>
                </PoleWrap>
            </RowWrap>
        </>
    )
}

export default DeliveryChannelInfo;