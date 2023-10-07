import React, { FC, useState } from "react";
import RowWrap from "@/components/UI/RowWrap.tsx";
import CellWrap from "@/features/StockPlaces/UI/CellWrap.tsx";
import { StockPlace } from "@/Types";
import UpdateStockPlaceModal from "@/features/StockPlaces/components/UpdateStockPlaceModal.tsx";
import Button from "@/components/UI/Button.tsx";
import DeleteStockPlaceModal from "@/features/StockPlaces/components/DeleteStockPlaceModal.tsx";

interface Props {
    stockPlace: StockPlace
}

const StockPlaceInfo: FC<Props> = ({ stockPlace }) => {
    const [open, setOpen] = useState(false);
    const [deleteStockPlace, setDeleteStockPlace] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleDelete = () => {
        setDeleteStockPlace(true);
    }

    return (
        <>
            {deleteStockPlace && <DeleteStockPlaceModal open={deleteStockPlace} setOpen={setDeleteStockPlace}
                                                        stockPlaceId={stockPlace._id}/>}
            {open && <UpdateStockPlaceModal open={open} setOpen={setOpen} stockPlace={stockPlace}/>}
            <RowWrap>
                <CellWrap>
                    <p>{stockPlace.name}</p>
                </CellWrap>
                <CellWrap>
                    <p>{stockPlace.address}</p>
                </CellWrap>
                <CellWrap>
                    <p>{stockPlace.contact}</p>
                </CellWrap>
                <CellWrap>
                    <p>{stockPlace.note}</p>
                </CellWrap>
                <CellWrap>
                    <Button text="Редактировать" className="border-2 shadow-none" onClick={handleOpen}/>
                </CellWrap>
                <CellWrap>
                    <Button text="Удалить" className="border-2 border-red-500 text-red-500 shadow-none"
                            onClick={handleDelete}/>
                </CellWrap>
            </RowWrap>
        </>
    );
};

export default StockPlaceInfo;
