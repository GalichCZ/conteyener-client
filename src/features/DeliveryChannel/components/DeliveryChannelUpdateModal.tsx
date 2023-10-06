import React, { FC, useCallback, useEffect, useState } from "react";
import { Modal } from "antd";
import DeliveryChannelForm from "@/features/DeliveryChannel/components/DeliveryChannelForm.tsx";
import { DeliveryChannel } from "@/Types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeliveryChannelSchema } from "@/features/DeliveryChannel/validation/DeliveryChannelSchema.js";
import { useUpdateDeliveryChannel } from "@/features/DeliveryChannel/hooks/useUpdateDeliveryChannel.ts";
import { setReDraw } from "@/store/slices/reDrawSlice.ts";
import { useDispatch } from "react-redux";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";

interface Props {
    deliveryChannel: DeliveryChannel
    open: boolean
    setOpen: (open: boolean) => void
}

const DeliveryChannelUpdateModal: FC<Props> = ({ deliveryChannel, setOpen, open }) => {
    const { control, setValue, handleSubmit } = useForm<DeliveryChannel>({
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

    const onSubmit = (data: DeliveryChannel) => {
        setUpdatedDeliveryChannel({ _id: deliveryChannel._id, ...data });
    }


    return (
        <Modal title="Редактирование канала" open={open} onCancel={handleOpen} footer={null}>
            {isLoading && <FillingSkeleton/>}
            <DeliveryChannelForm control={control} onSubmit={handleSubmit(onSubmit)} deliveryChannel={deliveryChannel}
                                 setValue={setValue}/>
        </Modal>
    );
}

export default DeliveryChannelUpdateModal;