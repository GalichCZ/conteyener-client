import React, { FC } from "react";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { FollowBid } from "@/Types";

interface Props {
    bid: FollowBid;
}

const CommentsCell: FC<Props> = ({ bid }) => {
    // console.log(bid);
    return (
        <TableCell.Cell>
            ...
        </TableCell.Cell>
    )
}

export default CommentsCell;