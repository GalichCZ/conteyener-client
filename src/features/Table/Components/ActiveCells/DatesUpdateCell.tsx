import React, { FC, useState } from "react";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { formatDate } from "@/utils/convertDate.ts";
import { createPortal } from "react-dom";
import DateCalculateModal
    from "@/features/Table/Components/Modals/DateCalculationModal/Components/DateCalculateModal.tsx";
import { FollowBid } from "@/Types";

interface Props {
    date: string;
    dateType: number;
    dateLabel: string;
    bid: FollowBid;
}

const DatesUpdateCell: FC<Props> = ({ dateType, date, dateLabel, bid }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            {open && createPortal(<DateCalculateModal dateLabel={dateLabel} open={open}
                                                      setOpen={setOpen} bid={bid} date={date}
                                                      dateType={dateType}/>, document.body)}
            <TableCell.Cell onClick={handleOpen}>{formatDate(date)}</TableCell.Cell>
        </>
    )
}

export default DatesUpdateCell;