import React from "react";
import PoleWrap from "@/features/DeliveryChannel/UI/PoleWrap.tsx";
import RowWrap from "@/components/UI/RowWrap";

const DeliverChannelsHead = () => {
    return (
        <RowWrap className="sticky bg-white top-0">
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
            <PoleWrap>
                <b></b>
            </PoleWrap>
            <PoleWrap>
                <b></b>
            </PoleWrap>
        </RowWrap>
    );
}

export default DeliverChannelsHead;