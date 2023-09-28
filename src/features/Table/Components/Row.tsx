import React from "react";
import TableRow from "@/features/Table/UI/TableRow.tsx";
import UpdateBidCell from "./ActiveCells/UpdateBidCell.tsx";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import UploadProductCell from "./ActiveCells/UploadProductCell.tsx";
import StoreInfoCell from "./ActiveCells/StoreInfoCell.tsx";
import EtdUpdateCell from "./ActiveCells/EtdUpdateCell.tsx";
import DatesUpdateCell from "./ActiveCells/DatesUpdateCell.tsx";
import UpdateDocsCell from "./ActiveCells/UpdateDocsCell.tsx";
import DeclarationCell from "./ActiveCells/DeclarationCell.tsx";
import StockPlaceCell from "./ActiveCells/StockPlaceCell.tsx";
import CommentsCell from "./ActiveCells/CommentsCell.tsx";

const Row = () => {
    return (
        <TableRow>
            <UpdateBidCell/>
            <TableCell.ArrayTooltip dataArray={['']}/>
            <TableCell.ArrayTooltip dataArray={['']}/>
            <TableCell.ArrayTooltip dataArray={['']}/>
            <TableCell.Cell>q</TableCell.Cell>
            <UploadProductCell/>
            <TableCell.Cell>delivery</TableCell.Cell>
            <TableCell.ArrayTooltip dataArray={['']}/>
            <TableCell.ArrayTooltip dataArray={['']}/>
            <TableCell.Cell>q</TableCell.Cell>
            <TableCell.Cell>q</TableCell.Cell>
            <StoreInfoCell/>
            <TableCell.Cell>agent</TableCell.Cell>
            <TableCell.Cell>type container</TableCell.Cell>
            <TableCell.Cell>dispatch place</TableCell.Cell>
            <TableCell.Cell>line</TableCell.Cell>
            <TableCell.Cell>ready date</TableCell.Cell>
            <TableCell.Cell>load date</TableCell.Cell>
            <EtdUpdateCell/>
            <DatesUpdateCell/>
            <TableCell.Cell>release</TableCell.Cell>
            <TableCell.Cell>bl/smg</TableCell.Cell>
            <TableCell.Cell>td</TableCell.Cell>
            <DatesUpdateCell/>
            <TableCell.Cell>port</TableCell.Cell>
            <TableCell.Cell>is ds</TableCell.Cell>
            <TableCell.Cell>fraht</TableCell.Cell>
            <UpdateDocsCell/>
            <DeclarationCell/>
            <DatesUpdateCell/>
            <TableCell.Cell>is ob</TableCell.Cell>
            <TableCell.Cell>answer ob</TableCell.Cell>
            <TableCell.Cell>expeditor</TableCell.Cell>
            <TableCell.Cell>arrive station</TableCell.Cell>
            <TableCell.Cell>km to aim</TableCell.Cell>
            <DatesUpdateCell/>
            <DatesUpdateCell/>
            <TableCell.Cell>pickup</TableCell.Cell>
            <DatesUpdateCell/>
            <StockPlaceCell/>
            <CommentsCell/>
        </TableRow>
    )
}

export default Row;