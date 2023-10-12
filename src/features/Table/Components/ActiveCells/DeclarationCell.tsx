import React, { FC } from "react";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { FollowBid } from "@/Types";

interface Props {
    bid: FollowBid;
}

const DeclarationCell: FC<Props> = ({ bid }) => {
    return (
        <TableCell.ArrayTooltip cutLength={15} dataArray={bid.declaration_number}/>
    )
}

export default DeclarationCell;