import React, { FC, useState } from "react";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { createPortal } from "react-dom";
import UpdateBidModal from "@/features/Table/Components/Modals/UpdateBidModal/UpdateBidModal.tsx";
import { FollowBid } from "@/Types";
import { formatDate } from "@/utils/convertDate.ts";

interface Props {
    bid: FollowBid;
}

const UpdateBidCell: FC<Props> = ({ bid }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    }

    return (
        <>
            {open && createPortal(<UpdateBidModal followBid={bid} open={open} setOpen={setOpen}/>, document.body)}
            <TableCell.Cell onClick={handleOpen}
                            className="cursor-pointer">{formatDate(bid.request_date)}</TableCell.Cell>
        </>
    )
}

export default UpdateBidCell;