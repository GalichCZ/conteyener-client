import React, { FC, useCallback, useEffect, useState } from "react";
import DeliveryChannelForm from "@/features/DeliveryChannel/components/DeliveryChannelForm.tsx";
import { DeliveryChannel, DeliveryChannelFormType } from "@/Types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeliveryChannelSchema } from "@/features/DeliveryChannel/validation/DeliveryChannelSchema.js";
import { useUpdateDeliveryChannel } from "@/features/DeliveryChannel/hooks/useUpdateDeliveryChannel.ts";
import { setReDraw } from "@/store/slices/reDrawSlice.ts";
import { useDispatch } from "react-redux";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import GModal from "@/components/Layout/GModal.tsx";

interface Props {
    deliveryChannel: DeliveryChannel
    open: boolean
    setOpen: (open: boolean) => void
}

const DeliveryChannelUpdateModal: FC<Props> = ({ deliveryChannel, setOpen, open }) => {
    const { control, setValue, handleSubmit } = useForm<DeliveryChannelFormType>({
        resolver: yupResolver(DeliveryChannelSchema)
    });
    const [updatedDeliveryChannel, setUpdatedDeliveryChannel] = useState<DeliveryChannel | null>(null);
    const { error, setError, isLoading, isSuccess } = useUpdateDeliveryChannel(updatedDeliveryChannel);
    const dispatch = useDispatch();

    const handleOpen = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    useEffect(() => {
        if (isSuccess) {
            dispatch(setReDraw());
            handleOpen();
        }
    }, [dispatch, handleOpen, isSuccess]);

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
            setUpdatedDeliveryChannel(null);
        }
    }, [error, setError]);

    const onSubmit = (data: DeliveryChannelFormType) => {
        setUpdatedDeliveryChannel({ ...data, _id: deliveryChannel._id });
    }


    return (
        <GModal title="Редактирование канала" open={open} onCancel={handleOpen}>
            {isLoading && <FillingSkeleton/>}
            <DeliveryChannelForm control={control} onSubmit={handleSubmit(onSubmit)} deliveryChannel={deliveryChannel}
                                 setValue={setValue}/>
        </GModal>
    );
}

export default DeliveryChannelUpdateModal;