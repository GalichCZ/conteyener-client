import React, { FC } from "react";
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
import { FollowBid } from "@/Types";
import { formatDate } from "@/utils/convertDate.ts";
import { trueOrFalseString } from "@/features/Table/utils/trueOrFalseString.ts";
import { DatesTypesEnum, DatesTypesLabelsEnum } from "@/enums/datesTypesEnum.ts";

interface Props {
    bid: FollowBid;
}

const Row: FC<Props> = ({ bid }) => {
    return (
        <TableRow>
            <UpdateBidCell bid={bid}/>

            <TableCell.ArrayTooltip dataArray={bid.inside_number}/>

            <TableCell.ArrayTooltip cutLength={7} className="min-w-[150px]" dataArray={bid.proform_number}/>

            <TableCell.ArrayTooltip dataArray={bid.order_number}/>

            <TableCell.Cell>{bid.container_number}</TableCell.Cell>

            <UploadProductCell bid={bid}/>

            <TableCell.Cell>{bid.delivery_method}</TableCell.Cell>

            <TableCell.ArrayTooltip className="min-w-[150px]" cutLength={10} dataArray={bid.providers}/>

            <TableCell.ArrayTooltip className="min-w-[195px]" dataArray={bid.importers}/>

            <TableCell.Cell>{bid.conditions}</TableCell.Cell>

            <TableCell.Cell>{bid.direction}</TableCell.Cell>

            <StoreInfoCell bid={bid}/>

            <TableCell.Cell>{bid.agent}</TableCell.Cell>

            <TableCell.Cell>{bid.container_type}</TableCell.Cell>

            <TableCell.Cell>{bid.place_of_dispatch}</TableCell.Cell>

            <TableCell.Cell className="min-w-[170px]">{bid.line}</TableCell.Cell>

            <TableCell.Cell>{formatDate(bid.ready_date)}</TableCell.Cell>

            <TableCell.Cell>{formatDate(bid.load_date)}</TableCell.Cell>

            <EtdUpdateCell bid={bid}/>

            <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.ETA} date={bid.eta}
                             dateType={DatesTypesEnum.ETA}/> {/*eta*/}

            <TableCell.Cell>{formatDate(bid.release)}</TableCell.Cell>

            <TableCell.Cell>{trueOrFalseString(bid.bl_smgs_cmr)}</TableCell.Cell>

            <TableCell.Cell>{trueOrFalseString(bid.td)}</TableCell.Cell>

            <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.DATE_DO}
                             date={bid.date_do} dateType={DatesTypesEnum.DATE_DO}/> {/*date_do*/}

            <TableCell.Cell>{bid.port}</TableCell.Cell>

            <TableCell.Cell>{trueOrFalseString(bid.is_ds)}</TableCell.Cell>

            <TableCell.Cell>{bid.fraht_account}</TableCell.Cell>

            <UpdateDocsCell bid={bid}/>

            <DeclarationCell bid={bid}/>

            <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.DECLARATION_ISSUE_DATE}
                             date={bid.declaration_issue_date}
                             dateType={DatesTypesEnum.DECLARATION_ISSUE_DATE}/> {/*declaration_issue_date*/}

            <TableCell.Cell>{formatDate(bid.availability_of_ob)}</TableCell.Cell>

            <TableCell.Cell>{formatDate(bid.answer_of_ob)}</TableCell.Cell>

            <TableCell.Cell>{bid.expeditor}</TableCell.Cell>

            <TableCell.Cell>{bid.destination_station}</TableCell.Cell>

            <TableCell.Cell>{bid.km_to_dist}</TableCell.Cell>

            <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.TRAIN_DEPART_DATE} date={bid.train_depart_date}
                             dateType={DatesTypesEnum.TRAIN_DEPART_DATE}/> {/*train_depart_date*/}

            <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.TRAIN_ARRIVE_DATE} date={bid.train_arrive_date}
                             dateType={DatesTypesEnum.TRAIN_ARRIVE_DATE}/> {/*train_arrive_date*/}

            <TableCell.Cell>{bid.pickup}</TableCell.Cell>

            <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.STORE_ARRIVE_DATE} date={bid.store_arrive_date}
                             dateType={DatesTypesEnum.STORE_ARRIVE_DATE}/> {/*store_arrive_date*/}

            <StockPlaceCell bid={bid}/>

            <CommentsCell bid={bid}/>
        </TableRow>
    )
}

export default Row;