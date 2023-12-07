import React, { FC, useEffect } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { useGetSingleStockPlace } from "@/features/StockPlaceModal/hooks/useGetSingleStockPlace.ts";
import { ModalProps } from "@/Types/ModalProps.ts";

interface Props extends ModalProps {
    stockPlaceId: string;
}

const StockInfoModal: FC<Props> = ({ open, setOpen, stockPlaceId }) => {
    const { error, setError, stock, loading } = useGetSingleStockPlace(stockPlaceId);

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
            {!stock && <b>Сток сдачи не найден</b>}
            <div className="gap-y-4 flex flex-col mt-5 text-[17px]">
                <p>Название: {stock?.name}</p>
                <p>Адрес: {stock?.address}</p>
                <p>Контакт: {stock?.contact}</p>
                <p>Пометка: {stock?.note}</p>
            </div>
        </GModal>
    );
}

export default StockInfoModal;