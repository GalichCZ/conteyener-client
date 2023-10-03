import React, { FC, useEffect } from "react";
import { Modal } from "antd";
import Button from "@/components/UI/Button.tsx";
import { useForm } from "react-hook-form";
import { useGetStores } from "@/features/Store/hooks/useGetStores.ts";
import { handleError } from "@/utils/handleError.ts";
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
            handleError(errorStores)
            setStoresError(null);
        }
        if (errorStock) {
            handleError(errorStock)
            setStockError(null);
        }
    }, [errorStock, errorStores, setStockError, setStoresError]);

    return (
        <Modal width="90%" title="Изменение слежения" footer={null} open={open}
               onCancel={handleOpen}>
            <UpdateBidForm stores={stores} stockPlaces={stockPlaces} control={control}
                           setValue={setValue} isLoadingStock={isLoadingStock} isLoadingStores={isLoadingStores}
                           onSubmit={handleSubmit(onSubmit)}/>

            <Button className="mt-10 border-red-500 border-[1px] text-red-500" text="Отмена"/>
        </Modal>
    )
}

export default UpdateBidModal;