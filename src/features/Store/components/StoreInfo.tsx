import React, { FC, useState } from "react";
import PoleWrap from "@/features/Store/UI/PoleWrap.tsx";
import Button from "@/components/UI/Button.tsx";
import { Store } from "@/Types";
import { createPortal } from "react-dom";
import StoreUpdateModal from "@/features/Store/components/StoreUpdateModal.tsx";
import StoreDeleteModal from "@/features/Store/components/StoreDeleteModal.tsx";
import RowWrap from "@/components/UI/RowWrap.tsx";

interface Props {
    store: Store;
}

const StoreInfo: FC<Props> = ({ store }) => {
    const { address, note, name, contact, receiver } = store
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleOpen = () => {
        setOpen(prev => !prev);
    }

    const handleDelete = () => {
        setOpenDelete(true);
    }

    return (
        <>
            {openDelete && (createPortal(<StoreDeleteModal open={openDelete} setOpen={setOpenDelete}
                                                           storeId={store._id}/>, document.body))}
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
                <PoleWrap>
                    <Button onClick={handleDelete} className="border-red-500 border-2 text-red-500" text="Удалить"/>
                </PoleWrap>
            </RowWrap>
        </>
    );
}

export default StoreInfo;