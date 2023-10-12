import React, { FC, useState } from "react";

import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { Docs, FollowBid } from "@/Types";
import { createPortal } from "react-dom";
import UpdateDocsModal from "@/features/Table/Components/Modals/UpdateDocsModal/Components/UpdateDocsModal.tsx";

interface Props {
    bid: FollowBid;
}

const UpdateDocsCell: FC<Props> = ({ bid }) => {
    const [open, setOpen] = useState(false);
    const [docs, setDocs] = useState<Docs>({} as Docs);
    const filledDocs = (docs: Docs) => {
        let filled = 0;
        Object.values(docs).forEach((value) => {
            if (value === true) {
                filled++;
            }
        })
        return filled;
    };

    const docsArray = bid.is_docs.map(docs => {
        return `${filledDocs(docs)}/9`
    })

    const handleOpen = () => {
        setOpen(true);
    }

    const onDocClick = (_docsCount: string, docs: Docs) => {
        handleOpen();
        setDocs(docs);
    }

    return (
        <>
            {open && createPortal(<UpdateDocsModal bidId={bid._id} docs={docs} open={open}
                                                   setOpen={setOpen}/>, document.body)}
            <TableCell.Array onClick={onDocClick} modelArray={bid.is_docs} dataArray={docsArray}/>
        </>
    )
}

export default UpdateDocsCell;