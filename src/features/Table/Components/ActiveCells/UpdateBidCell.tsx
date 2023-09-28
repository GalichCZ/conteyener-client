import React, { useState } from "react";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { createPortal } from "react-dom";
import UpdateBidModal from "@/features/Table/Components/Modals/UpdateBidModal/UpdateBidModal.tsx";

const UpdateBidCell = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    }

    return (
        <>
            {open && createPortal(<UpdateBidModal open={open} handleOpen={handleOpen}/>, document.body)}
            <TableCell.Cell onClick={handleOpen} className="cursor-pointer">update</TableCell.Cell>
        </>
    )
}

export default UpdateBidCell;