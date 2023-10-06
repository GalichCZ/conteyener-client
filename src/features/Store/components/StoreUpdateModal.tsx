import React, { FC, useCallback, useEffect, useState } from "react";
import StoreForm from "@/features/Store/components/StoreForm.tsx";
import { useForm } from "react-hook-form";
import { Store } from "@/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { StoreSchema } from "@/features/Store/validation/StoreSchema.js";
import { usePatchStores } from "@/features/Store/hooks/usePatchStores.ts";
import { setReDraw } from "@/store/slices/reDrawSlice.ts";
import { useDispatch } from "react-redux";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import GModal from "@/components/Layout/GModal.tsx";

interface Props {
    open: boolean;
    store: Store;
    setOpen: (value: boolean) => void;
}

const StoreUpdateModal: FC<Props> = ({ open, store, setOpen }) => {
    const { handleSubmit, control, setValue } = useForm<Store>({
        resolver: yupResolver(StoreSchema)
    });
    const [storeData, setStoreData] = useState<Store | null>(null)
    const { error, setError, isLoading, isSuccess } = usePatchStores(storeData);
    const handleOpen = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    const dispatch = useDispatch();

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

    const onSubmit = (data: Store) => {
        setStoreData({ _id: store._id, ...data });
    }

    return (
        <GModal title="Редактировать склад" open={open} onCancel={handleOpen}>
            {isLoading && <FillingSkeleton/>}
            <StoreForm store={store} control={control} setValue={setValue} onSubmit={handleSubmit(onSubmit)}/>
        </GModal>
    )
}

export default StoreUpdateModal;