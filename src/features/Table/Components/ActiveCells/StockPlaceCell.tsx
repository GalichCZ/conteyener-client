import React, { FC } from "react";
import TableCell from "../../UI/Cell/TableCell";
import { FollowBid } from "@/Types";
import { stringCut } from "@/utils/stringCut.ts";

interface Props {
    bid: FollowBid;
}

const StockPlaceCell: FC<Props> = ({ bid }) => {
    return (
        <TableCell.Cell>{stringCut(bid.stock_place_name, 10)}</TableCell.Cell>
    )
}

export default StockPlaceCell;