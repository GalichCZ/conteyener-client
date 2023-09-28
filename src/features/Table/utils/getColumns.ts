import { RolesEnum } from "@/enums/rolesEnum"
import { ColumnsEnum } from "@/features/Table/enums/columnsEnum.ts";

type Role = string
type Columns = string[]
type ColumnsMap = Record<Role, Columns>
export const getColumns = (role: string) => {
    return columnsMap.find((item) => item[role as RolesEnum])?.[role as RolesEnum] || []
}

const columnsMap: ColumnsMap[] = [
    { [RolesEnum.MANAGER_INT]: Object.values(ColumnsEnum) },
    { [RolesEnum.HEAD]: Object.values(ColumnsEnum) },
    {
        [RolesEnum.MANAGER_PATRIOT]: [
            ColumnsEnum.ETA,
            ColumnsEnum.ETD,
            ColumnsEnum.FRAHT_ACCOUNT,
            ColumnsEnum.REQUEST_DATE,
            ColumnsEnum.INSIDE_NUMBER,
            ColumnsEnum.PROFORM_NUMBER,
            ColumnsEnum.ORDER_NUMBER,
            ColumnsEnum.CONTAINER_NUMBER,
            ColumnsEnum.PRODUCT,
            ColumnsEnum.DELIVERY_METHOD,
            ColumnsEnum.PROVIDER,
            ColumnsEnum.IMPORTER,
            ColumnsEnum.DIRECTION,
            ColumnsEnum.CONDITIONS,
            ColumnsEnum.DECLARATION_ISSUE_DATE,
            ColumnsEnum.STORE,
            ColumnsEnum.STORE_ARRIVE_DATE,
            ColumnsEnum.AGENT,
            ColumnsEnum.CONTAINER_TYPE,
            ColumnsEnum.READY_DATE,
            ColumnsEnum.LOADING_DATE,
            ColumnsEnum.IS_DOCS,
            ColumnsEnum.DECLARATION_NUMBER,
            ColumnsEnum.DECLARATION_ISSUE_DATE,
            ColumnsEnum.KM_TO_DIST,
            ColumnsEnum.TRAIN_DEPART_DATE,
            ColumnsEnum.TRAIN_ARRIVE_DATE,
        ]
    },
    {
        [RolesEnum.MANAGER_BUYER]: [
            ColumnsEnum.ETD,
            ColumnsEnum.ETA,
            ColumnsEnum.FRAHT_ACCOUNT,
            ColumnsEnum.STORE_ARRIVE_DATE,
            ColumnsEnum.CONDITIONS,
            ColumnsEnum.REQUEST_DATE,
            ColumnsEnum.INSIDE_NUMBER,
            ColumnsEnum.PROFORM_NUMBER,
            ColumnsEnum.ORDER_NUMBER,
            ColumnsEnum.CONTAINER_NUMBER,
            ColumnsEnum.PRODUCT,
            ColumnsEnum.DELIVERY_METHOD,
            ColumnsEnum.PROVIDER,
            ColumnsEnum.IMPORTER,
            ColumnsEnum.DIRECTION,
            ColumnsEnum.STORE,
            ColumnsEnum.CONTAINER_TYPE,
            ColumnsEnum.READY_DATE,
            ColumnsEnum.LOADING_DATE,
            ColumnsEnum.DECLARATION_NUMBER,
            ColumnsEnum.DECLARATION_ISSUE_DATE,
            ColumnsEnum.KM_TO_DIST,
            ColumnsEnum.TRAIN_DEPART_DATE,
            ColumnsEnum.TRAIN_ARRIVE_DATE,
        ]
    },
    {
        [RolesEnum.MANAGER_SALES]: [
            ColumnsEnum.ETD,
            ColumnsEnum.ETA,
            ColumnsEnum.FRAHT_ACCOUNT,
            ColumnsEnum.STORE_ARRIVE_DATE,
            ColumnsEnum.CONDITIONS,
            ColumnsEnum.INSIDE_NUMBER,
            ColumnsEnum.PROFORM_NUMBER,
            ColumnsEnum.ORDER_NUMBER,
            ColumnsEnum.CONTAINER_NUMBER,
            ColumnsEnum.PRODUCT,
            ColumnsEnum.DECLARATION_ISSUE_DATE,
            ColumnsEnum.DIRECTION,
            ColumnsEnum.STORE,
            ColumnsEnum.LOADING_DATE,
            ColumnsEnum.KM_TO_DIST
        ]
    },
    {
        [RolesEnum.MANAGER_TREASURY]: [
            ColumnsEnum.ETD,
            ColumnsEnum.ETA,
            ColumnsEnum.FRAHT_ACCOUNT,
            ColumnsEnum.STORE_ARRIVE_DATE,
            ColumnsEnum.INSIDE_NUMBER,
            ColumnsEnum.PROFORM_NUMBER,
            ColumnsEnum.ORDER_NUMBER,
            ColumnsEnum.CONTAINER_NUMBER,
            ColumnsEnum.PROVIDER,
            ColumnsEnum.IMPORTER,
            ColumnsEnum.DECLARATION_ISSUE_DATE,
            ColumnsEnum.DECLARATION_NUMBER,
        ]
    },
    {
        [RolesEnum.MANAGER_STORE]: [
            ColumnsEnum.ETD,
            ColumnsEnum.ETA,
            ColumnsEnum.FRAHT_ACCOUNT,
            ColumnsEnum.STORE_ARRIVE_DATE,
            ColumnsEnum.INSIDE_NUMBER,
            ColumnsEnum.PROFORM_NUMBER,
            ColumnsEnum.ORDER_NUMBER,
            ColumnsEnum.CONTAINER_NUMBER,
            ColumnsEnum.PRODUCT,
            ColumnsEnum.DIRECTION,
            ColumnsEnum.STORE,
            ColumnsEnum.CONTAINER_TYPE,
            ColumnsEnum.CONDITIONS,
            ColumnsEnum.DECLARATION_ISSUE_DATE,
        ]
    }
]