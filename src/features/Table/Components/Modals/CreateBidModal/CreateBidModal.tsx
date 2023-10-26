import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import CreateBidForm from "./CreateBidForm.tsx";
import { handleError } from "@/utils/handleError.ts";
import Button from "@/components/UI/Button.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateBidSchema } from "./validation/CreateBidSchema.js";
import { FormBidCreateValues } from "@/features/Table/Types/FormBidCreateValues.ts";
import { prepareNewBidObject } from "@/features/Table/utils/prepareNewBidObject.ts";
import { useCreateBid } from "@/features/Table/hooks/useCreateBid.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import GModal from "@/components/Layout/GModal.tsx";
import { useDispatch } from "react-redux";
import { setReDraw } from "@/store";

interface Props {
    open: boolean;
    handleOpen: () => void;
}

const CreateBidModal: FC<Props> = ({ open, handleOpen }) => {
    const { control, handleSubmit, setValue, unregister } = useForm({
        resolver: yupResolver(CreateBidSchema),
    });
    const dispatch = useDispatch();
    const { error, setError, isLoading, isSuccess, callCreateBid } = useCreateBid();
    const onSubmit = (data: FormBidCreateValues) => {
        const newBid = prepareNewBidObject(data);
        callCreateBid(newBid)
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(setReDraw())
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
        <GModal width="90%" title="Создать слежение" open={open}
                onCancel={handleOpen}>
            {isLoading && <FillingSkeleton/>}
            <CreateBidForm setValue={setValue} control={control}
                           onSubmit={handleSubmit(onSubmit)} unregister={unregister}/>
            <Button className="mt-10 border-red-500 border-[1px] text-red-500" text="Отмена"/>
        </GModal>
    )
}

export default CreateBidModal;