import React, { FC, useState } from "react";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { FollowBid } from "@/Types";
import { createPortal } from "react-dom";
import StoreInfoModal from "@/features/Table/Components/Modals/StoreInfoModal/components/StoreInfoModal.tsx";
import { useAppSelector } from "@/hooks/hooksRedux.ts";
import { roleType4 } from "@/features/Table/enums/roleTypes.ts";

interface Props {
    bid: FollowBid;
}

const StoreInfoCell: FC<Props> = ({ bid }) => {
    const [open, setOpen] = useState(false);

    const user = useAppSelector(state => state.authentication.user);

    if (user && user.role !== roleType4[user.role as keyof typeof roleType4])
        return (<></>)


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