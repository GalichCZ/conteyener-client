import React, { FC, useEffect } from "react";
import { Modal } from "antd";
import Button from "@/components/Button.tsx";
import { useForm } from "react-hook-form";
import { deliveryEnum, deliveryEnumTooltips } from "@/enums/deliveryMethods.ts";
import { useGetStores } from "@/hooks/useGetStores.ts";
import { displayError } from "@/utils/displayError.ts";
import { useGetStockPlaces } from "@/hooks/useGetStockPlaces.ts";
import UpdateBidForm from "./UpdateBidForm.tsx";
import { FormBidUpdateValues } from "@/features/Table/Types/FormBidUpdateValues.ts";
import { getDateFromDayjs } from "@/utils/getDateFromDayjs.ts";
import { prepareBidObject } from "@/features/Table/utils/prepareBidObject.ts";
import { FollowBid } from "@/Types";
import { setValuesInForm } from "@/features/Table/utils/setValuesInForm.ts";

interface Props {
    open: boolean;
    handleOpen: () => void;
    followBid: FollowBid;
}


const UpdateBidModal: FC<Props> = ({ open, handleOpen, followBid }) => {

    const { control, setValue, handleSubmit } = useForm<FormBidUpdateValues>();
    const { isLoading: isLoadingStores, stores, error: errorStores, setError: setStoresError } = useGetStores()
    const { isLoading: isLoadingStock, stockPlaces, error: errorStock, setError: setStockError } = useGetStockPlaces();

    const deliveryValues = Object.values(deliveryEnum);
    const deliveryToolTips = Object.values(deliveryEnumTooltips);

    useEffect(() => {
        if (followBid) {
            setValuesInForm(followBid, setValue);
        }
    }, [followBid, setValue]);

    const onSubmit = (data: FormBidUpdateValues) => {
        console.log(data, prepareBidObject(data, "1"));
        console.log(getDateFromDayjs(data.request_date));
    }

    useEffect(() => {
        if (errorStores) {
            displayError(errorStores)
            setStoresError(null);
        }
        if (errorStock) {
            displayError(errorStock)
            setStockError(null);
        }
    }, [errorStock, errorStores]);

    return (
        <Modal width="90%" title="Изменение записи" footer={null} open={open}
               onCancel={handleOpen}>
            <UpdateBidForm deliveryToolTips={deliveryToolTips} deliveryValues={deliveryValues} control={control}
                           setValue={setValue} isLoadingStock={isLoadingStock} isLoadingStores={isLoadingStores}
                           onSubmit={handleSubmit(onSubmit)}/>

            <Button className="mt-10 border-red-500 border-[1px] text-red-500" text="Отмена"/>
        </Modal>
    )
}

export default UpdateBidModal;