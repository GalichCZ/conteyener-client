import React, { FC, useCallback, useEffect, useState } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import { handleError } from "@/utils/handleError.ts";
import { useForm } from "react-hook-form";
import { DateCalculateFormType } from "@/Types";
import dayjs from "dayjs";
import { useCalculateDates } from "@/features/Table/Components/Modals/EtdUpdateModal/hooks/useCalculateDates.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { setReDraw } from "@/store";
import { useDispatch } from "react-redux";
import EtdUpdateForm from "@/features/Table/Components/Modals/EtdUpdateModal/Components/EtdUpdateForm.tsx";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    etd: string;
    deliveryChannel: string;
    dateType: number;
    bidId: string;
}

const EtdUpdateModal: FC<Props> = ({ open, setOpen, etd, deliveryChannel, dateType, bidId }) => {
    const handleClose = useCallback(() => setOpen(false), [setOpen]);
    const { control, handleSubmit, setValue } = useForm<DateCalculateFormType>();
    const [dateCalculate, setDateCalculate] = useState<DateCalculateFormType | null>(null);
    const dispatch = useDispatch();
    const {
        error,
        setError,
        success,
        isLoading
    } = useCalculateDates(dateCalculate);

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    useEffect(() => {
        if (success) {
            dispatch(setReDraw());
            handleClose();
        }
    }, [dispatch, handleClose, success]);

    useEffect(() => {
        if (etd) {
            setValue("date", dayjs(etd));
        }
        setValue("bidId", bidId);
        setValue("delivery_channel", deliveryChannel);
        setValue("date_type", dateType);
    }, [bidId, dateType, deliveryChannel, etd, setValue]);

    const onSubmit = (data: DateCalculateFormType) => {
        setDateCalculate(data);
    }

    return (
        <GModal title="Настройка канала поставки" open={open} onCancel={handleClose}>
            {isLoading && <FillingSkeleton/>}
            <EtdUpdateForm onSubmit={handleSubmit(onSubmit)} control={control}/>
        </GModal>
    )
}

export default EtdUpdateModal;