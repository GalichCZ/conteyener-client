import React from "react";
import Cell from "@/components/UI/Cell.tsx";

const DeclarationTableHead = () => {
    return (
        <thead>
        <tr>
            <Cell>Дата</Cell>
            <Cell>Статус</Cell>
            <Cell>Сообщение</Cell>
            <Cell>Номер декларации</Cell>
        </tr>
        </thead>
    )
}

export default DeclarationTableHead;