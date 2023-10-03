import React from "react";
import RowWrap from "@/features/Store/UI/RowWrap.tsx";
import PoleWrap from "@/features/Store/UI/PoleWrap.tsx";

const HeadNames = () => {
    return (
        <RowWrap className="sticky top-0 bg-white">
            <PoleWrap>
                <b>Адрес</b>
            </PoleWrap>
            <PoleWrap>
                <b>Название</b>
            </PoleWrap>
            <PoleWrap>
                <b>Получатель</b>
            </PoleWrap>
            <PoleWrap>
                <b>Контакт</b>
            </PoleWrap>
            <PoleWrap>
                <b>Заметка</b>
            </PoleWrap>
            <PoleWrap>
                <b></b>
            </PoleWrap>
        </RowWrap>
    );
}

export default HeadNames;