import React, { FC, memo } from 'react'
import TableRow from '@/features/Table/UI/TableRow.tsx'
import UpdateBidCell from './ActiveCells/UpdateBidCell.tsx'
import TableCell from '@/features/Table/UI/Cell/TableCell.tsx'
import UploadProductCell from './ActiveCells/UploadProductCell.tsx'
import StoreInfoCell from './ActiveCells/StoreInfoCell.tsx'
import EtdUpdateCell from './ActiveCells/EtdUpdateCell.tsx'
import DatesUpdateCell from './ActiveCells/DatesUpdateCell.tsx'
import UpdateDocsCell from './ActiveCells/UpdateDocsCell.tsx'
import StockPlaceCell from './ActiveCells/StockPlaceCell.tsx'
import CommentsCell from './ActiveCells/CommentsCell.tsx'
import { FollowBid } from '@/Types'
import { formatDate } from '@/utils/convertDate.ts'
import { trueOrFalseString } from '@/features/Table/utils/trueOrFalseString.ts'
import { DatesTypesEnum, DatesTypesLabelsEnum } from '@/enums/datesTypesEnum.ts'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'
import KmToDistCell from '@/features/Table/Components/ActiveCells/KmToDistCell.tsx'
import DeclarationCell from '@/features/Table/Components/ActiveCells/DeclarationCell.tsx'
import UnhideBid from '@/features/Table/Components/UnhideBid.tsx'

interface Props {
  bid: FollowBid
  hidden: boolean
}

const Row: FC<Props> = memo(({ bid, hidden }) => {
  const roleTypes = useGetRoleType()

  return (
    <TableRow>
      <UpdateBidCell hidden={hidden} bid={bid} />

      {roleTypes?.isRoleType9 && <TableCell.ArrayTooltip dataArray={bid.inside_number} />}

      {roleTypes?.isRoleType9 && (
        <TableCell.ArrayTooltip
          cutLength={7}
          className="min-w-[150px]"
          dataArray={bid.proform_number}
        />
      )}

      <TableCell.ArrayTooltip dataArray={bid.order_number} />

      <TableCell.Cell>{bid.container_number}</TableCell.Cell>

      <UploadProductCell bid={bid} />

      {roleTypes?.isRoleType1 && <TableCell.Cell>{bid.delivery_method}</TableCell.Cell>}

      {roleTypes?.isRoleType2 && (
        <TableCell.ArrayTooltip
          className="min-w-[150px]"
          cutLength={10}
          dataArray={bid.providers}
        />
      )}

      {roleTypes?.isRoleType2 && (
        <TableCell.ArrayTooltip className="min-w-[195px]" dataArray={bid.importers} />
      )}

      {roleTypes?.isRoleType7 && <TableCell.Array dataArray={bid.conditions} />}

      {roleTypes?.isRoleType10 && <TableCell.Cell>{bid.direction}</TableCell.Cell>}

      <StoreInfoCell bid={bid} />

      {roleTypes?.isRoleType6 && <TableCell.Cell>{bid.agent}</TableCell.Cell>}

      {roleTypes?.isRoleType3 && <TableCell.Cell>{bid.container_type}</TableCell.Cell>}

      {roleTypes?.isRoleType7 && <TableCell.Cell>{bid.place_of_dispatch}</TableCell.Cell>}

      {roleTypes?.isRoleType7 && (
        <TableCell.Cell className="min-w-[170px]">{bid.line}</TableCell.Cell>
      )}

      {roleTypes?.isRoleType1 && <TableCell.Cell>{formatDate(bid.ready_date)}</TableCell.Cell>}

      {roleTypes?.isRoleType5 && <TableCell.Cell>{formatDate(bid.load_date)}</TableCell.Cell>}

      {roleTypes?.isRoleType9 && <EtdUpdateCell hidden={hidden} bid={bid} />}

      {roleTypes?.isRoleType9 && (
        <DatesUpdateCell
          hidden={hidden}
          isUpdated={bid.eta_update}
          bid={bid}
          dateLabel={DatesTypesLabelsEnum.ETA}
          date={bid.eta}
          dateType={DatesTypesEnum.ETA}
        />
      )}

      {roleTypes?.isRoleType7 && <TableCell.Cell>{formatDate(bid.release)}</TableCell.Cell>}

      {roleTypes?.isRoleType7 && (
        <TableCell.Cell>{trueOrFalseString(bid.bl_smgs_cmr)}</TableCell.Cell>
      )}

      {roleTypes?.isRoleType7 && <TableCell.Cell>{trueOrFalseString(bid.td)}</TableCell.Cell>}

      {roleTypes?.isRoleType7 && (
        <DatesUpdateCell
          hidden={hidden}
          isUpdated={bid.date_do_update}
          bid={bid}
          dateLabel={DatesTypesLabelsEnum.DATE_DO}
          date={bid.date_do}
          dateType={DatesTypesEnum.DATE_DO}
        />
      )}

      {roleTypes?.isRoleType7 && <TableCell.Cell>{bid.port}</TableCell.Cell>}

      {roleTypes?.isRoleType7 && <TableCell.Cell>{trueOrFalseString(bid.is_ds)}</TableCell.Cell>}

      {roleTypes?.isRoleType7 && <TableCell.Cell>{bid.fraht_account}</TableCell.Cell>}

      <UpdateDocsCell bid={bid} />

      <DeclarationCell bid={bid} />

      {roleTypes?.isRoleType9 && (
        <DatesUpdateCell
          hidden={hidden}
          isUpdated={bid.declaration_issue_date_update}
          bid={bid}
          dateLabel={DatesTypesLabelsEnum.DECLARATION_ISSUE_DATE}
          date={bid.declaration_issue_date}
          dateType={DatesTypesEnum.DECLARATION_ISSUE_DATE}
        />
      )}

      {roleTypes?.isRoleType7 && (
        <TableCell.Cell>{formatDate(bid.availability_of_ob)}</TableCell.Cell>
      )}

      {roleTypes?.isRoleType7 && <TableCell.Cell>{formatDate(bid.answer_of_ob)}</TableCell.Cell>}

      {roleTypes?.isRoleType7 && <TableCell.Cell>{bid.expeditor}</TableCell.Cell>}

      {roleTypes?.isRoleType7 && <TableCell.Cell>{bid.destination_station}</TableCell.Cell>}

      {roleTypes?.isRoleType4 && <KmToDistCell bid={bid} />}

      {roleTypes?.isRoleType10 && (
        <DatesUpdateCell
          hidden={hidden}
          isUpdated={bid.train_depart_date_update}
          bid={bid}
          dateLabel={DatesTypesLabelsEnum.TRAIN_DEPART_DATE}
          date={bid.train_depart_date}
          dateType={DatesTypesEnum.TRAIN_DEPART_DATE}
        />
      )}

      {roleTypes?.isRoleType10 && (
        <DatesUpdateCell
          hidden={hidden}
          isUpdated={bid.train_arrive_date_update}
          bid={bid}
          dateLabel={DatesTypesLabelsEnum.TRAIN_ARRIVE_DATE}
          date={bid.train_arrive_date}
          dateType={DatesTypesEnum.TRAIN_ARRIVE_DATE}
        />
      )}

      {roleTypes?.isRoleType7 && <TableCell.Cell>{bid.pickup}</TableCell.Cell>}

      <DatesUpdateCell
        hidden={hidden}
        isUpdated={bid.store_arrive_date_update}
        bid={bid}
        dateLabel={DatesTypesLabelsEnum.STORE_ARRIVE_DATE}
        date={bid.store_arrive_date}
        dateType={DatesTypesEnum.STORE_ARRIVE_DATE}
      />

      <StockPlaceCell bid={bid} />

      <CommentsCell bid={bid} />

      {hidden && roleTypes?.isRoleType7 && <UnhideBid bidId={bid._id} />}
    </TableRow>
  )
})

export default Row
