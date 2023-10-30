import React, { FC, useCallback, useEffect, useState } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import DeleteConfirm from "@/components/UI/DeleteConfirm.tsx";
import { useDeleteStockPlace } from "@/features/StockPlaces/hooks/useDeleteStockPlace.ts";
import { handleError } from "@/utils/handleError.ts";
import { setReDraw } from "@/store/slices/reDrawSlice.ts";
import { useDispatch } from "react-redux";
import { ModalProps } from "@/Types/ModalProps.ts";

interface Props extends ModalProps {
    stockPlaceId: string | undefined;
}

const DeleteStockPlaceModal: FC<Props> = ({ open, setOpen, stockPlaceId }) => {
    const [id, setId] = useState<string | undefined>();
    const { error, setError, isLoading, success } = useDeleteStockPlace(id);
    const dispatch = useDispatch();
    const handleOpen = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const handleDelete = () => {
        if (stockPlaceId)
            setId(stockPlaceId);
    }

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
            setId("");
        }
    }, [error, setError]);

    useEffect(() => {
        if (success) {
            handleOpen();
            dispatch(setReDraw());
        }
    }, [dispatch, handleOpen, success]);

    return (
        <GModal open={open} onCancel={handleOpen}>
            {isLoading && <FillingSkeleton/>}
            <DeleteConfirm handleDelete={handleDelete} handleOpen={handleOpen} theme="сток сдачи"/>
        </GModal>
    )
}

export default DeleteStockPlaceModal;