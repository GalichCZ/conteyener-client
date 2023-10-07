import React, { FC, useCallback, useEffect, useState } from "react";
import { useDeleteStore } from "@/features/Store/hooks/useDeleteStore.ts";
import { setReDraw } from "@/store/slices/reDrawSlice.ts";
import { useDispatch } from "react-redux";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import GModal from "@/components/Layout/GModal.tsx";
import DeleteConfirm from "@/components/UI/DeleteConfirm.tsx";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    storeId: string | undefined;
}

const StoreDeleteModal: FC<Props> = ({ open, setOpen, storeId }) => {
    const [id, setId] = useState<string | null>(null);
    const { error, setError, isLoading, success } = useDeleteStore(id);
    const dispatch = useDispatch();

    const handleOpen = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    useEffect(() => {
        if (success) {
            dispatch(setReDraw());
            handleOpen()
        }
    }, [dispatch, handleOpen, setOpen, success]);

    const handleDelete = () => {
        if (storeId)
            setId(storeId);
    }


    return (
        <GModal onCancel={handleOpen} open={open}>
            {isLoading && <FillingSkeleton/>}
            <DeleteConfirm handleDelete={handleDelete} handleOpen={handleOpen} theme="склад"/>
        </GModal>
    )
}

export default StoreDeleteModal;