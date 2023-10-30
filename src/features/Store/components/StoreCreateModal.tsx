import React, { FC, useCallback, useEffect, useState } from "react";
import StoreForm from "@/features/Store/components/StoreForm.tsx";
import { useForm } from "react-hook-form";
import { StoreFormType } from "@/Types";
import { StoreSchema } from "@/features/Store/validation/StoreSchema.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostStore } from "@/features/Store/hooks/usePostStore.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { handleError } from "@/utils/handleError.ts";
import { useDispatch } from "react-redux";
import { setReDraw } from "@/store/slices/reDrawSlice.ts";
import GModal from "@/components/Layout/GModal.tsx";
import { ModalProps } from "@/Types/ModalProps.ts";

const StoreCreateModal: FC<ModalProps> = ({ open, setOpen }) => {
    const { handleSubmit, control, setValue } = useForm<StoreFormType>({
        resolver: yupResolver(StoreSchema)
    });
    const [store, setStore] = useState<StoreFormType | null>(null)
    const { error, setError, isLoading, isSuccess } = usePostStore(store);
    const dispatch = useDispatch();

    const onSubmit = (data: StoreFormType) => {
        setStore(data)
    }

    const handleOpen = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    useEffect(() => {
        if (isSuccess) {
            dispatch(setReDraw());
            handleOpen();
        }
    }, [dispatch, handleOpen, isSuccess]);

    useEffect(() => {
        if (error) {
            handleError(error)
            setError(null);
        }
    }, [error, setError]);

    return (
        <GModal open={open} onCancel={handleOpen} title="Создать склад">
            {isLoading && <FillingSkeleton/>}
            <StoreForm control={control} onSubmit={handleSubmit(onSubmit)} store={null} setValue={setValue}/>
        </GModal>
    );
}

export default StoreCreateModal;