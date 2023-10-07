import React, { useEffect, useState } from "react";
import TechPageBlock from "@/components/UI/TechPageBlock.tsx";
import HeadRow from "@/features/StockPlaces/UI/HeadRow.tsx";
import StockPlaceInfo from "@/features/StockPlaces/components/StockPlaceInfo.tsx";
import { useGetStockPlaces } from "@/hooks/useGetStockPlaces.ts";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import CreateStockPlaceModal from "@/features/StockPlaces/components/CreateStockPlaceModal.tsx";
import Button from "@/components/UI/Button.tsx";
import TechBlockFooter from "@/components/UI/TechBlockFooter.tsx";

const StockPlaces = () => {
    const { error, setError, isLoading, stockPlaces } = useGetStockPlaces();
    const [open, setOpen] = useState(false);
    const noStockPlaces = stockPlaces.length === 0 && !isLoading && !error;

    const handleOpen = () => {
        setOpen(true);
    }

    useEffect(() => {
        if (error) {
            setError(null);
            handleError(error)
        }
    }, [error, setError]);

    return (
        <>
            {open && <CreateStockPlaceModal open={open} setOpen={setOpen}/>}
            <TechPageBlock>
                <HeadRow/>
                {isLoading && <FillingSkeleton/>}
                {noStockPlaces && <p className="text-center font-bold mt-20">Нет стоков сдачи</p>}
                {stockPlaces.map((stockPlace) =>
                    (<StockPlaceInfo key={stockPlace._id} stockPlace={stockPlace}/>))}
                <TechBlockFooter>
                    <Button text="Создать сток сдачи" type="primary" onClick={handleOpen}/>
                </TechBlockFooter>
            </TechPageBlock>
        </>
    );
}

export default StockPlaces;