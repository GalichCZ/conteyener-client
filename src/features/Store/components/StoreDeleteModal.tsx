import React, { FC, useCallback, useEffect, useState } from "react";
import Button from "@/components/UI/Button.tsx";
import { useDeleteStore } from "@/features/Store/hooks/useDeleteStore.ts";
import { setReDraw } from "@/store/slices/reDrawSlice.ts";
import { useDispatch } from "react-redux";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import GModal from "@/components/Layout/GModal.tsx";

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
            <div className="flex flex-col">
                <b className="text-lg">Удалить склад?</b>
                <div className="w-1/2 mt-10 flex justify-between">
                    <Button onClick={handleDelete} text="Удалить"
                            className="bg-red-500 text-white border-red-700 border-2"/>
                    <Button onClick={handleOpen} className="border-2 border-gray-300" text="Отменить"/>
                </div>
            </div>
        </GModal>
    )
}

export default StoreDeleteModal;