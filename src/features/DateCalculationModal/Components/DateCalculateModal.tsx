import React, { FC, useCallback, useEffect, useState } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import DateCalculateForm from "@/features/DateCalculationModal/Components/DateCalculateForm.tsx";
import { useForm } from "react-hook-form";
import { DateCalculateFormType, FollowBid } from "@/Types";
import dayjs from "dayjs";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { handleError } from "@/utils/handleError.ts";
import { useCalculateDate } from "@/features/DateCalculationModal/hooks/useCalculateDate.ts";
import { setReDraw } from "@/store";
import { useDispatch } from "react-redux";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    dateType: number;
    dateLabel: string;
    bid: FollowBid;
    date: string;
}

const DateCalculateModal: FC<Props> = ({
                                           open, setOpen, dateType, dateLabel, bid, date
                                       }) => {
    const { control, handleSubmit, setValue } = useForm<DateCalculateFormType>()
    const [data, setData] = useState<DateCalculateFormType | null>(null);
    const { error, setError, success, loading } = useCalculateDate(data);
    const dispatch = useDispatch();
    const handleCancel = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    useEffect(() => {
        if (success) {
            dispatch(setReDraw());
            handleCancel();
        }
    }, [dispatch, handleCancel, success]);

    useEffect(() => {
        setValue("date_type", dateType);
        setValue("bidId", bid._id);
        setValue("delivery_channel", bid.delivery_channel);
        if (date) {
            setValue("date", dayjs(date));
        }
    }, [bid, date, dateType, setValue]);

    const onSubmit = (data: DateCalculateFormType) => {
        console.log(data);
        setData(data);
    }

    return (
        <GModal title="Перерасчет дат" open={open} onCancel={handleCancel}>
            {loading && <FillingSkeleton/>}
            <DateCalculateForm label={dateLabel} onSubmit={handleSubmit(onSubmit)} control={control}/>
        </GModal>
    )
}

export default DateCalculateModal;