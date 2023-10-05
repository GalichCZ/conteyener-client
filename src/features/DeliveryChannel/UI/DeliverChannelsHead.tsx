import React from "react";
import RowWrap from "@/features/DeliveryChannel/UI/RowWrap.tsx";
import PoleWrap from "@/features/DeliveryChannel/UI/PoleWrap.tsx";

const DeliverChannelsHead = () => {
    return (
        <RowWrap className="sticky top-0">
            <PoleWrap>
                <b>Имя:</b>
            </PoleWrap>
            <PoleWrap>
                <b>ETA:</b>
            </PoleWrap>
            <PoleWrap>
                <b>Дата ДО:</b>
            </PoleWrap>
            <PoleWrap>
                <b>Дата выпуска декларации:</b>
            </PoleWrap>
            <PoleWrap>
                <b>Дата отправки Ж/Д:</b>
            </PoleWrap>
            <PoleWrap>
                <b>Дата прибытия Ж/Д:</b>
            </PoleWrap>
            <PoleWrap>
                <b>Дата прибытия на склад:</b>
            </PoleWrap>
        </RowWrap>
    );
}

export default DeliverChannelsHead;