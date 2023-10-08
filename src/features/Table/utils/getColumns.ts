import { RolesEnum } from "@/enums/rolesEnum"
import { ColumnsEnum, ColumnsKeysEnum } from "@/features/Table/enums/columnsEnum.ts";

type Role = string
type Columns = string[]
type Keys = string[]
type ColumnsMap = Record<Role, Columns>
type ColumnsKeysMap = Record<Role, Keys>
export const getColumns = (role: string) => {
    const columnsNames = columnsMap.find((item) => item[role as RolesEnum])?.[role as RolesEnum] || []
    const columnsKeys = columnsKeysMap.find((item) => item[role as RolesEnum])?.[role as RolesEnum] || []
    return { columnsNames, columnsKeys }
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

const columnsKeysMap: ColumnsKeysMap[] = [
    { [RolesEnum.MANAGER_INT]: Object.values(ColumnsKeysEnum) },
    { [RolesEnum.HEAD]: Object.values(ColumnsKeysEnum) },
    {
        [RolesEnum.MANAGER_PATRIOT]: [
            ColumnsKeysEnum.ETA,
            ColumnsKeysEnum.ETD,
            ColumnsKeysEnum.FRAHT_ACCOUNT,
            ColumnsKeysEnum.REQUEST_DATE,
            ColumnsKeysEnum.INSIDE_NUMBER,
            ColumnsKeysEnum.PROFORM_NUMBER,
            ColumnsKeysEnum.ORDER_NUMBER,
            ColumnsKeysEnum.CONTAINER_NUMBER,
            ColumnsKeysEnum.PRODUCT,
            ColumnsKeysEnum.DELIVERY_METHOD,
            ColumnsKeysEnum.PROVIDER,
            ColumnsKeysEnum.IMPORTER,
            ColumnsKeysEnum.DIRECTION,
            ColumnsKeysEnum.CONDITIONS,
            ColumnsKeysEnum.DECLARATION_ISSUE_DATE,
            ColumnsKeysEnum.STORE,
            ColumnsKeysEnum.STORE_ARRIVE_DATE,
            ColumnsKeysEnum.AGENT,
            ColumnsKeysEnum.CONTAINER_TYPE,
            ColumnsKeysEnum.READY_DATE,
            ColumnsKeysEnum.LOADING_DATE,
            ColumnsKeysEnum.IS_DOCS,
            ColumnsKeysEnum.DECLARATION_NUMBER,
            ColumnsKeysEnum.DECLARATION_ISSUE_DATE,
            ColumnsKeysEnum.KM_TO_DIST,
            ColumnsKeysEnum.TRAIN_DEPART_DATE,
            ColumnsKeysEnum.TRAIN_ARRIVE_DATE,
        ]
    },
    {
        [RolesEnum.MANAGER_BUYER]: [
            ColumnsKeysEnum.ETD,
            ColumnsKeysEnum.ETA,
            ColumnsKeysEnum.FRAHT_ACCOUNT,
            ColumnsKeysEnum.STORE_ARRIVE_DATE,
            ColumnsKeysEnum.CONDITIONS,
            ColumnsKeysEnum.REQUEST_DATE,
            ColumnsKeysEnum.INSIDE_NUMBER,
            ColumnsKeysEnum.PROFORM_NUMBER,
            ColumnsKeysEnum.ORDER_NUMBER,
            ColumnsKeysEnum.CONTAINER_NUMBER,
            ColumnsKeysEnum.PRODUCT,
            ColumnsKeysEnum.DELIVERY_METHOD,
            ColumnsKeysEnum.PROVIDER,
            ColumnsKeysEnum.IMPORTER,
            ColumnsKeysEnum.DIRECTION,
            ColumnsKeysEnum.STORE,
            ColumnsKeysEnum.CONTAINER_TYPE,
            ColumnsKeysEnum.READY_DATE,
            ColumnsKeysEnum.LOADING_DATE,
            ColumnsKeysEnum.DECLARATION_NUMBER,
            ColumnsKeysEnum.DECLARATION_ISSUE_DATE,
            ColumnsKeysEnum.KM_TO_DIST,
            ColumnsKeysEnum.TRAIN_DEPART_DATE,
            ColumnsKeysEnum.TRAIN_ARRIVE_DATE,
        ]
    },
    {
        [RolesEnum.MANAGER_SALES]: [
            ColumnsKeysEnum.ETD,
            ColumnsKeysEnum.ETA,
            ColumnsKeysEnum.FRAHT_ACCOUNT,
            ColumnsKeysEnum.STORE_ARRIVE_DATE,
            ColumnsKeysEnum.CONDITIONS,
            ColumnsKeysEnum.INSIDE_NUMBER,
            ColumnsKeysEnum.PROFORM_NUMBER,
            ColumnsKeysEnum.ORDER_NUMBER,
            ColumnsKeysEnum.CONTAINER_NUMBER,
            ColumnsKeysEnum.PRODUCT,
            ColumnsKeysEnum.DECLARATION_ISSUE_DATE,
            ColumnsKeysEnum.DIRECTION,
            ColumnsKeysEnum.STORE,
            ColumnsKeysEnum.LOADING_DATE,
            ColumnsKeysEnum.KM_TO_DIST
        ]
    },
    {
        [RolesEnum.MANAGER_TREASURY]: [
            ColumnsKeysEnum.ETD,
            ColumnsKeysEnum.ETA,
            ColumnsKeysEnum.FRAHT_ACCOUNT,
            ColumnsKeysEnum.STORE_ARRIVE_DATE,
            ColumnsKeysEnum.INSIDE_NUMBER,
            ColumnsKeysEnum.PROFORM_NUMBER,
            ColumnsKeysEnum.ORDER_NUMBER,
            ColumnsKeysEnum.CONTAINER_NUMBER,
            ColumnsKeysEnum.PROVIDER,
            ColumnsKeysEnum.IMPORTER,
            ColumnsKeysEnum.DECLARATION_ISSUE_DATE,
            ColumnsKeysEnum.DECLARATION_NUMBER,
        ]
    },
    {
        [RolesEnum.MANAGER_STORE]: [
            ColumnsKeysEnum.ETD,
            ColumnsKeysEnum.ETA,
            ColumnsKeysEnum.FRAHT_ACCOUNT,
            ColumnsKeysEnum.STORE_ARRIVE_DATE,
            ColumnsKeysEnum.INSIDE_NUMBER,
            ColumnsKeysEnum.PROFORM_NUMBER,
            ColumnsKeysEnum.ORDER_NUMBER,
            ColumnsKeysEnum.CONTAINER_NUMBER,
            ColumnsKeysEnum.PRODUCT,
            ColumnsKeysEnum.DIRECTION,
            ColumnsKeysEnum.STORE,
            ColumnsKeysEnum.CONTAINER_TYPE,
            ColumnsKeysEnum.CONDITIONS,
            ColumnsKeysEnum.DECLARATION_ISSUE_DATE,
        ]
    }
]
