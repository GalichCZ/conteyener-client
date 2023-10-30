import React, { FC, useEffect } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { useGetSingleStockPlace } from "@/features/StockPlaceModal/hooks/useGetSingleStockPlace.ts";
import { ModalProps } from "@/Types/ModalProps.ts";

interface Props extends ModalProps {
    stockPlaceId: string;
}

const StoreInfoModal: FC<Props> = ({ open, setOpen, stockPlaceId }) => {
    const { error, setError, store, loading } = useGetSingleStockPlace(stockPlaceId);

    const handleCancel = () => {
        setOpen(false);
    }

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    return (
        <GModal title="Информация о стоке сдачи" open={open} onCancel={handleCancel}>
            {loading && <FillingSkeleton/>}
            {!store && <b>Сток сдачи не найден</b>}
            <div className="gap-y-4 flex flex-col mt-5 text-[17px]">
                <p>Название: {store?.name}</p>
                <p>Адрес: {store?.address}</p>
                <p>Контакт: {store?.contact}</p>
                <p>Пометка: {store?.note}</p>
            </div>
        </GModal>
    );
}

export default StoreInfoModal;