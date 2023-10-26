import React, { FC } from "react";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { FollowBid } from "@/Types";
import { useAppSelector } from "@/hooks/hooksRedux.ts";
import { roleType7 } from "@/features/Table/enums/roleTypes.ts";

interface Props {
    bid: FollowBid;
}

const CommentsCell: FC<Props> = () => {
    const user = useAppSelector(state => state.authentication.user);

    if (user && user.role !== roleType7[user.role as keyof typeof roleType7])
        return (<></>)

    // console.log(bid);
    return (
        <TableCell.Cell>
            ...
        </TableCell.Cell>
    )
}

export default CommentsCell;