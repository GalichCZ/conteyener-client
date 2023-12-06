import React, { FC, useState } from "react";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { createPortal } from "react-dom";
import UpdateBidModal from "@/features/UpdateBidModal/UpdateBidModal.tsx";
import { FollowBid } from "@/Types";
import { formatDate } from "@/utils/convertDate.ts";
import { useAppSelector } from "@/hooks/hooksRedux.ts";
import { roleType1 } from "@/features/Table/enums/roleTypes.ts";
import { useGetRoleType } from "@/hooks/useGetRoleType.ts";

interface Props {
    bid: FollowBid;
}

const UpdateBidCell: FC<Props> = ({ bid }) => {
    const [open, setOpen] = useState<boolean>(false);
    const user = useAppSelector(state => state.authentication.user);

    const roleTypes = useGetRoleType();

    const handleOpen = () => {
        if (!roleTypes?.isRoleType7) {
            return;
        }
        setOpen((prev) => !prev);
    }

    if (user && user.role !== roleType1[user.role as keyof typeof roleType1])
        return (<></>)

    return (
        <>
            {open && createPortal(<UpdateBidModal followBid={bid} open={open} setOpen={setOpen}/>, document.body)}
            <TableCell.Cell onClick={handleOpen}
                            className={`cursor-pointer`}>{formatDate(bid.request_date)}</TableCell.Cell>
        </>
    )
}

export default UpdateBidCell;