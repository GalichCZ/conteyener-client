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
import { useAppSelector } from "@/hooks/hooksRedux.ts";
import {
    roleType1,
    roleType2,
    roleType3,
    roleType4,
    roleType5,
    roleType6,
    roleType7
} from "@/features/Table/enums/roleTypes.ts";

interface Props {
    bid: FollowBid;
}


const Row: FC<Props> = ({ bid }) => {
    const user = useAppSelector(state => state.authentication.user);

    if (!user) return <></>

    const isRoleType1 = user.role !== roleType1[user.role as keyof typeof roleType1]
    const isRoleType2 = user.role !== roleType2[user.role as keyof typeof roleType2]
    const isRoleType3 = user.role !== roleType3[user.role as keyof typeof roleType3]
    const isRoleType4 = user.role !== roleType4[user.role as keyof typeof roleType4]
    const isRoleType5 = user.role !== roleType5[user.role as keyof typeof roleType5]
    const isRoleType6 = user.role !== roleType6[user.role as keyof typeof roleType6]
    const isRoleType7 = user.role !== roleType7[user.role as keyof typeof roleType7];

    return (
        <TableRow>
            <UpdateBidCell bid={bid}/>

            <TableCell.ArrayTooltip dataArray={bid.inside_number}/>

            <TableCell.ArrayTooltip cutLength={7} className="min-w-[150px]" dataArray={bid.proform_number}/>

            <TableCell.ArrayTooltip dataArray={bid.order_number}/>

            <TableCell.Cell>{bid.container_number}</TableCell.Cell>

            <UploadProductCell bid={bid}/>

            {!isRoleType1 && <TableCell.Cell>{bid.delivery_method}</TableCell.Cell>}

            {!isRoleType2 &&
                <TableCell.ArrayTooltip className="min-w-[150px]" cutLength={10} dataArray={bid.providers}/>}

            {!isRoleType2 && <TableCell.ArrayTooltip className="min-w-[195px]" dataArray={bid.importers}/>}

            {!isRoleType4 && <TableCell.Cell>{bid.conditions}</TableCell.Cell>}

            {!isRoleType4 && <TableCell.Cell>{bid.direction}</TableCell.Cell>}

            <StoreInfoCell bid={bid}/>

            {!isRoleType6 && <TableCell.Cell>{bid.agent}</TableCell.Cell>}

            {!isRoleType3 && <TableCell.Cell>{bid.container_type}</TableCell.Cell>}

            {!isRoleType7 && <TableCell.Cell>{bid.place_of_dispatch}</TableCell.Cell>}

            {!isRoleType7 && <TableCell.Cell className="min-w-[170px]">{bid.line}</TableCell.Cell>}

            {!isRoleType1 && <TableCell.Cell>{formatDate(bid.ready_date)}</TableCell.Cell>}

            {!isRoleType5 && <TableCell.Cell>{formatDate(bid.load_date)}</TableCell.Cell>}

            <EtdUpdateCell bid={bid}/>

            <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.ETA} date={bid.eta}
                             dateType={DatesTypesEnum.ETA}/>

            {!isRoleType7 && <TableCell.Cell>{formatDate(bid.release)}</TableCell.Cell>}

            {!isRoleType7 && <TableCell.Cell>{trueOrFalseString(bid.bl_smgs_cmr)}</TableCell.Cell>}

            {!isRoleType7 && <TableCell.Cell>{trueOrFalseString(bid.td)}</TableCell.Cell>}

            {!isRoleType7 && <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.DATE_DO}
                                              date={bid.date_do} dateType={DatesTypesEnum.DATE_DO}/>}

            {!isRoleType7 && <TableCell.Cell>{bid.port}</TableCell.Cell>}

            {!isRoleType7 && <TableCell.Cell>{trueOrFalseString(bid.is_ds)}</TableCell.Cell>}

            <TableCell.Cell>{bid.fraht_account}</TableCell.Cell>

            <UpdateDocsCell bid={bid}/>

            <DeclarationCell bid={bid}/>

            <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.DECLARATION_ISSUE_DATE}
                             date={bid.declaration_issue_date}
                             dateType={DatesTypesEnum.DECLARATION_ISSUE_DATE}/> {/*declaration_issue_date*/}

            {!isRoleType7 && <TableCell.Cell>{formatDate(bid.availability_of_ob)}</TableCell.Cell>}

            {!isRoleType7 && <TableCell.Cell>{formatDate(bid.answer_of_ob)}</TableCell.Cell>}

            {!isRoleType7 && <TableCell.Cell>{bid.expeditor}</TableCell.Cell>}

            {!isRoleType7 && <TableCell.Cell>{bid.destination_station}</TableCell.Cell>}

            {!isRoleType5 && <TableCell.Cell>{bid.km_to_dist}</TableCell.Cell>}

            {!isRoleType1 && <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.TRAIN_DEPART_DATE}
                                              date={bid.train_depart_date}
                                              dateType={DatesTypesEnum.TRAIN_DEPART_DATE}/>}

            {!isRoleType1 && <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.TRAIN_ARRIVE_DATE}
                                              date={bid.train_arrive_date}
                                              dateType={DatesTypesEnum.TRAIN_ARRIVE_DATE}/>}

            {!isRoleType7 && <TableCell.Cell>{bid.pickup}</TableCell.Cell>}

            <DatesUpdateCell bid={bid} dateLabel={DatesTypesLabelsEnum.STORE_ARRIVE_DATE} date={bid.store_arrive_date}
                             dateType={DatesTypesEnum.STORE_ARRIVE_DATE}/>

            <StockPlaceCell bid={bid}/>

            <CommentsCell bid={bid}/>
        </TableRow>
    )
}

export default Row;