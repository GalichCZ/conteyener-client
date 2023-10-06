import React, { FC, useCallback, useEffect } from "react";
import { Modal } from "antd";
import DeliveryChannelForm from "@/features/DeliveryChannel/components/DeliveryChannelForm.tsx";
import { DeliveryChannel } from "@/Types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeliveryChannelSchema } from "@/features/DeliveryChannel/validation/DeliveryChannelSchema.js";
import { usePostDeliveryChannel } from "@/features/DeliveryChannel/hooks/usePostDeliveryChannel.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { handleError } from "@/utils/handleError.ts";
import { useDispatch } from "react-redux";
import { setReDraw } from "@/store/slices/reDrawSlice.ts";

interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

const DeliveryChannelCreateModal: FC<Props> = ({ open, setOpen }) => {
    const { control, setValue, handleSubmit } = useForm<DeliveryChannel>({
        resolver: yupResolver(DeliveryChannelSchema)
    });
    const [deliveryChannel, setDeliveryChannel] = React.useState<DeliveryChannel | null>(null);
    const { success, setError, error, isLoading } = usePostDeliveryChannel(deliveryChannel);
    const dispatch = useDispatch();

    const handleOpen = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    useEffect(() => {
        if (success) {
            dispatch(setReDraw());
            handleOpen();
        }
    }, [dispatch, handleOpen, success]);

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
            setDeliveryChannel(null);
        }
    }, [error, setError]);

    const onSubmit = (data: DeliveryChannel) => {
        console.log(data);
        setDeliveryChannel(data);
    }

    return (
        <Modal footer={null} title="Создание канала поставки" open={open} onCancel={handleOpen}>
            {isLoading && <FillingSkeleton/>}
            <DeliveryChannelForm control={control} onSubmit={handleSubmit(onSubmit)} deliveryChannel={null}
                                 setValue={setValue}/>
        </Modal>
    );
}

export default DeliveryChannelCreateModal;