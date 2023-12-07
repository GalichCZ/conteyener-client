import React, { FC, useState } from "react";
import TableCell from "../../UI/Cell/TableCell";
import { FollowBid } from "@/Types";
import { stringCut } from "@/utils/stringCut.ts";
import { createPortal } from "react-dom";
import StockPlaceModal from "@/features/StockPlaceModal/Components/StockPlaceModal.tsx";
import { roleType7 } from "@/features/Table/enums/roleTypes.ts";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

interface Props {
    bid: FollowBid;
}

const StockPlaceCell: FC<Props> = ({ bid }) => {
    const [open, setOpen] = useState(false);
    
    const stockPlace = bid.stock_place;
    
    const user = useAppSelector(state => state.authentication.user);

    if (user && user.role !== roleType7[user.role as keyof typeof roleType7])
        return (<></>)

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            {open && stockPlace && createPortal(<StockPlaceModal open={open} setOpen={setOpen}
                                                   stockPlaceId={stockPlace._id}/>, document.body)}
            <TableCell.Cell onClick={handleOpen}>{stockPlace ? stringCut(stockPlace.name, 10) : ''}</TableCell.Cell>
        </>
    )
}

export default StockPlaceCell;