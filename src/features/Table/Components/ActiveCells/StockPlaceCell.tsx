import React, { FC, useState } from "react";
import TableCell from "../../UI/Cell/TableCell";
import { FollowBid } from "@/Types";
import { stringCut } from "@/utils/stringCut.ts";
import { createPortal } from "react-dom";
import StockPlaceModal from "@/features/Table/Components/Modals/StockPlaceModal/Components/StockPlaceModal.tsx";
import { roleType7 } from "@/features/Table/enums/roleTypes.ts";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

interface Props {
    bid: FollowBid;
}

const StockPlaceCell: FC<Props> = ({ bid }) => {
    const [open, setOpen] = useState(false);

    const user = useAppSelector(state => state.authentication.user);


    if (user && user.role !== roleType7[user.role as keyof typeof roleType7])
        return (<></>)


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