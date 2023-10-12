import React, { FC, useState } from "react";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { FollowBid } from "@/Types";
import { createPortal } from "react-dom";
import StoreInfoModal from "@/features/Table/Components/Modals/StoreInfoModal/components/StoreInfoModal.tsx";

interface Props {
    bid: FollowBid;
}

const StoreInfoCell: FC<Props> = ({ bid }) => {
    const [open, setOpen] = useState(false);

    const onClick = () => {
        if (!bid.store?._id) return;
        setOpen(prev => !prev);
    }

    return (
        <>
            {open && createPortal(<StoreInfoModal open={open} setOpen={setOpen}
                                                  storeId={bid.store._id}/>, document.body)}
            <TableCell.Cell onClick={onClick}>{bid.store?.name}</TableCell.Cell>
        </>
    )
}

export default StoreInfoCell;