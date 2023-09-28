import React, { FC, useEffect } from "react";
import { Modal } from "antd";
import Button from "@/components/Button.tsx";
import { useForm } from "react-hook-form";
import { deliveryEnum, deliveryEnumTooltips } from "@/enums/deliveryMethods.ts";
import * as dayjs from "dayjs";
import { useGetStores } from "@/hooks/useGetStores.ts";
import { displayError } from "@/utils/displayError.ts";
import { useGetStockPlaces } from "@/hooks/useGetStockPlaces.ts";
import UpdateBidForm from "./UpdateBidForm.tsx";
import { FormBidUpdateValues } from "./Types/FormBidUpdateValues.ts";

interface Props {
    open: boolean;
    handleOpen: () => void;
}


const UpdateBidModal: FC<Props> = ({ open, handleOpen }) => {

    const { control, setValue, handleSubmit } = useForm<FormBidUpdateValues>();
    const { isLoading: isLoadingStores, stores, error: errorStores } = useGetStores()
    const { isLoading: isLoadingStock, stockPlaces, error: errorStock } = useGetStockPlaces();

    const deliveryValues = Object.values(deliveryEnum);
    const deliveryToolTips = Object.values(deliveryEnumTooltips);

    useEffect(() => {
        setValue("delivery_method", "Поезд");
        setValue("request_date", dayjs(new Date()));
    }, [setValue]);

    const onSubmit = (data: FormBidUpdateValues) => {
        console.log(data);
    }

    useEffect(() => {
        if (errorStores) {
            displayError(errorStores)
        }
        if (errorStock) {
            displayError(errorStock)
        }
    }, [errorStock, errorStores]);

    return (
        <Modal width="90%" title="Изменение записи" footer={null} open={open}
               onCancel={handleOpen}>
            <UpdateBidForm deliveryToolTips={deliveryToolTips} deliveryValues={deliveryValues} control={control}
                           onSubmit={handleSubmit(onSubmit)}/>
            <Button className="mt-10 border-red-500 border-[1px] text-red-500" text="Отмена"/>
        </Modal>
    )
}

export default UpdateBidModal;