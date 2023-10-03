import React, { FC, useState } from "react";
import RowWrap from "@/features/Store/UI/RowWrap.tsx";
import PoleWrap from "@/features/Store/UI/PoleWrap.tsx";
import Button from "@/components/UI/Button.tsx";
import { Store } from "@/Types";
import { createPortal } from "react-dom";
import StoreUpdateModal from "@/features/Store/components/StoreUpdateModal.tsx";

interface Props {
    store: Store;
}

const StoreInfo: FC<Props> = ({ store }) => {
    const { address, note, name, contact, receiver } = store
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(prev => !prev);
    }

    return (
        <>
            {open && (createPortal(<StoreUpdateModal setOpen={setOpen} store={store}
                                                     open={open}/>, document.body))}
            <RowWrap className="mt-1">
                <PoleWrap>
                    <p>{address}</p>
                </PoleWrap>
                <PoleWrap>
                    <p>{name}</p>
                </PoleWrap>
                <PoleWrap>
                    <p>{receiver}</p>
                </PoleWrap>
                <PoleWrap>
                    <p>{contact}</p>
                </PoleWrap>
                <PoleWrap>
                    <p>{note}</p>
                </PoleWrap>
                <PoleWrap>
                    <Button onClick={handleOpen} className="border-2 shadow-sm" text="Редактировать"/>
                </PoleWrap>
            </RowWrap>
        </>
    );
}

export default StoreInfo;