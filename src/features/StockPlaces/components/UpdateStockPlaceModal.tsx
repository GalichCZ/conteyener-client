import React, { FC, useCallback, useEffect, useState } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import StockPlaceForm from "@/features/StockPlaces/components/StockPlaceForm.tsx";
import { StockPlace } from "@/Types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StockPlaceSchema } from "@/features/StockPlaces/validation/StockPlaceSchema.js";
import { useUpdateStockPlace } from "@/features/StockPlaces/hooks/useUpdateStockPlace.ts";
import { useAppDispatch } from "@/hooks/hooksRedux.ts";
import { handleError } from "@/utils/handleError.ts";
import { setReDraw } from "@/store/slices/reDrawSlice.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    stockPlace: StockPlace;
}

const UpdateStockPlaceModal: FC<Props> = ({ open, setOpen, stockPlace }) => {
    const { setValue, handleSubmit, control } = useForm<StockPlace>({ resolver: yupResolver(StockPlaceSchema) });
    const [stockPlaceData, setStockPlaceData] = useState<StockPlace | null>(null);
    const { error, setError, success, isLoading } = useUpdateStockPlace(stockPlaceData);
    const dispatch = useAppDispatch();

    const handleOpen = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    const onSubmit = (data: StockPlace) => {
        setStockPlaceData({ _id: stockPlace._id, ...data });
    }

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
            setStockPlaceData(null);
        }
    }, [error, setError]);

    useEffect(() => {
        if (success) {
            handleOpen();
            dispatch(setReDraw())
        }
    }, [success, handleOpen, dispatch])

    return (
        <GModal title="Редактировать канал поставки" onCancel={handleOpen} open={open}>
            {isLoading && <FillingSkeleton/>}
            <StockPlaceForm stockPlace={stockPlace} control={control} setValue={setValue}
                            onSubmit={handleSubmit(onSubmit)}/>
        </GModal>
    );
}

export default UpdateStockPlaceModal;