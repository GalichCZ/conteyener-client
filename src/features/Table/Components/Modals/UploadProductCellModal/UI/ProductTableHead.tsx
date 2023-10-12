import React from "react";
import Cell from "@/features/Table/Components/Modals/UploadProductCellModal/UI/Cell.tsx";

const ProductTableHead = () => {
    return (
        <thead className="text-center font-bold">
        <tr>
            <Cell>№ п/п</Cell>
            <Cell>Код ТнВЭД</Cell>
            <Cell>Артикул</Cell>
            <Cell>Торговая марка</Cell>
            <Cell>Наименование товара</Cell>
            <Cell>Модель/Серия(Тип)</Cell>
            <Cell>Модификация</Cell>
            <Cell>Кол-во штук</Cell>
            <Cell>Кол-во мест</Cell>
            <Cell>Цена за еденицу</Cell>
            <Cell>Общая сумма</Cell>
            <Cell>Вес нетто</Cell>
            <Cell>Вес брутто</Cell>
            <Cell>Объем</Cell>
            <Cell>Производитель</Cell>
            <Cell><p></p></Cell>
        </tr>
        </thead>
    );
}

export default ProductTableHead;