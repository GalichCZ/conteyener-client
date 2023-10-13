import React, { FC, useState } from "react";
import TableCell from "../../UI/Cell/TableCell";
import { FollowBid } from "@/Types";
import { stringCut } from "@/utils/stringCut.ts";
import { createPortal } from "react-dom";
import StockPlaceModal from "@/features/Table/Components/Modals/StockPlaceModal/Components/StockPlaceModal.tsx";

interface Props {
    bid: FollowBid;
}

const StockPlaceCell: FC<Props> = ({ bid }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            {open && createPortal(<StockPlaceModal open={open} setOpen={setOpen}
                                                   stockPlaceId={bid.stock_place._id}/>, document.body)}
            <TableCell.Cell onClick={handleOpen}>{stringCut(bid.stock_place_name, 10)}</TableCell.Cell>
        </>
    )
}

export default StockPlaceCell;