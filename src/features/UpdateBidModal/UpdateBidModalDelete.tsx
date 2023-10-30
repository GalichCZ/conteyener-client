import React, { FC, useCallback, useEffect } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import { ModalProps } from "@/Types/ModalProps.ts";
import { useDeleteBid } from "@/features/UpdateBidModal/hooks/useDeleteBid.ts";
import DeleteConfirm from "@/components/UI/DeleteConfirm.tsx";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";

interface Props extends ModalProps {
    bidId: string;
    setIsDeleted: (c: boolean) => void;
}

const UpdateBidModalDelete: FC<Props> = ({ setOpen, bidId, open, setIsDeleted }) => {
    const { error, setError, callDeleteBid, success, loading } = useDeleteBid();

    const handleCancel = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    useEffect(() => {
        if (success) {
            setIsDeleted(true);
            handleCancel();
        }
    }, [handleCancel, setIsDeleted, success]);

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    return (
        <GModal title="Удалeние слежения" onCancel={handleCancel} open={open}>
            {loading && <FillingSkeleton/>}
            <DeleteConfirm handleDelete={() => callDeleteBid(bidId)} handleOpen={handleCancel} theme="Слежение"/>
        </GModal>
    )
}

export default UpdateBidModalDelete;