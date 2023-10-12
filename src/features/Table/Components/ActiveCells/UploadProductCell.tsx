import React, { FC, useState } from "react";

import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { FollowBid } from "@/Types";
import { createPortal } from "react-dom";
import UploadProductModal
    from "@/features/Table/Components/Modals/UploadProductCellModal/Components/UploadProductModal.tsx";

interface Props {
    bid: FollowBid;
}

const UploadProductCell: FC<Props> = ({ bid }) => {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState<string>("");

    const onProductClick = (product: string) => {
        setProduct(product);
        openHandler();
    }

    const openHandler = () => {
        setOpen(prev => !prev);
    }

    return (
        <>
            {open && createPortal(<UploadProductModal open={open} setOpen={setOpen} product={product}
                                                      bidId={bid._id}/>, document.body)}
            <TableCell.Array modelArray={[]} onClick={onProductClick} dataArray={bid.simple_product_name}/>
        </>
    )
}

export default UploadProductCell;