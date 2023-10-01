import React, { FC, useEffect, useState } from "react";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import CreateBidForm from "./CreateBidForm.tsx";
import { useGetStores } from "@/hooks/useGetStores.ts";
import { handleError } from "@/utils/handleError.ts";
import Button from "@/components/UI/Button.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateBidSchema } from "./validation/CreateBidSchema.js";
import { FormBidCreateValues } from "@/features/Table/Types/FormBidCreateValues.ts";
import { prepareNewBidObject } from "@/features/Table/utils/prepareNewBidObject.ts";
import { NewBid } from "@/features/Table/Types/NewBid.ts";
import { useCreateBid } from "@/features/Table/Hooks/useCreateBid.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";

interface Props {
    open: boolean;
    handleOpen: () => void;
}

const CreateBidModal: FC<Props> = ({ open, handleOpen }) => {
    const [newBid, setNewBid] = useState<NewBid | null>(null);
    const { control, handleSubmit, setValue } = useForm({
        resolver: yupResolver(CreateBidSchema),
    });
    const { isLoading: isStoreLoading, stores, error: storeError, setError: setStoreError } = useGetStores()
    const { error, setError, isLoading, isSuccess } = useCreateBid(newBid);

    const onSubmit = (data: FormBidCreateValues) => {
        const newBid = prepareNewBidObject(data);
        setNewBid(newBid);
    }

    useEffect(() => {
        if (isSuccess) {
            handleOpen();
        }
    }, [handleOpen, isSuccess]);

    useEffect(() => {
        if (storeError) {
            handleError(storeError);
            setStoreError(null);
        }
        if (error) {
            handleError(error)
            setError(null);
        }
    }, [error, setError, setStoreError, storeError]);

    return (
        <Modal width="90%" title="Создать слежение" footer={null} open={open}
               onCancel={handleOpen}>
            {isLoading && <FillingSkeleton/>}
            <CreateBidForm stores={stores} isLoadingStores={isStoreLoading} setValue={setValue} control={control}
                           onSubmit={handleSubmit(onSubmit)}/>
            <Button className="mt-10 border-red-500 border-[1px] text-red-500" text="Отмена"/>
        </Modal>
    )
}

export default CreateBidModal;