import { RolesEnum } from "@/enums/rolesEnum"
import { ColumnsEnum, ColumnsKeysEnum } from "@/features/Table/enums/columnsEnum.ts";

const columns = ColumnsEnum
const columnsKeys = ColumnsKeysEnum
const roles = RolesEnum

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
    { [roles.MANAGER_INT]: Object.values(columns) },
    { [roles.HEAD]: Object.values(columns) },
    {
        [roles.MANAGER_PATRIOT]: [
            columns.ETA,
            columns.ETD,
            columns.FRAHT_ACCOUNT,
            columns.REQUEST_DATE,
            columns.INSIDE_NUMBER,
            columns.PROFORM_NUMBER,
            columns.ORDER_NUMBER,
            columns.CONTAINER_NUMBER,
            columns.PRODUCT,
            columns.DELIVERY_METHOD,
            columns.PROVIDER,
            columns.IMPORTER,
            columns.DIRECTION,
            columns.CONDITIONS,
            columns.DECLARATION_ISSUE_DATE,
            columns.STORE,
            columns.STORE_ARRIVE_DATE,
            columns.AGENT,
            columns.CONTAINER_TYPE,
            columns.READY_DATE,
            columns.LOADING_DATE,
            columns.IS_DOCS,
            columns.DECLARATION_NUMBER,
            columns.DECLARATION_ISSUE_DATE,
            columns.KM_TO_DIST,
            columns.TRAIN_DEPART_DATE,
            columns.TRAIN_ARRIVE_DATE,
        ]
    },
    {
        [roles.MANAGER_BUYER]: [
            columns.ETD,
            columns.ETA,
            columns.FRAHT_ACCOUNT,
            columns.STORE_ARRIVE_DATE,
            columns.CONDITIONS,
            columns.REQUEST_DATE,
            columns.INSIDE_NUMBER,
            columns.PROFORM_NUMBER,
            columns.ORDER_NUMBER,
            columns.CONTAINER_NUMBER,
            columns.PRODUCT,
            columns.DELIVERY_METHOD,
            columns.PROVIDER,
            columns.IMPORTER,
            columns.DIRECTION,
            columns.STORE,
            columns.CONTAINER_TYPE,
            columns.READY_DATE,
            columns.LOADING_DATE,
            columns.DECLARATION_NUMBER,
            columns.DECLARATION_ISSUE_DATE,
            columns.KM_TO_DIST,
            columns.TRAIN_DEPART_DATE,
            columns.TRAIN_ARRIVE_DATE,
        ]
    },
    {
        [roles.MANAGER_SALES]: [
            columns.ETD,
            columns.ETA,
            columns.FRAHT_ACCOUNT,
            columns.STORE_ARRIVE_DATE,
            columns.CONDITIONS,
            columns.INSIDE_NUMBER,
            columns.PROFORM_NUMBER,
            columns.ORDER_NUMBER,
            columns.CONTAINER_NUMBER,
            columns.PRODUCT,
            columns.DECLARATION_ISSUE_DATE,
            columns.DIRECTION,
            columns.STORE,
            columns.LOADING_DATE,
            columns.KM_TO_DIST
        ]
    },
    {
        [roles.MANAGER_TREASURY]: [
            columns.ETD,
            columns.ETA,
            columns.FRAHT_ACCOUNT,
            columns.STORE_ARRIVE_DATE,
            columns.INSIDE_NUMBER,
            columns.PROFORM_NUMBER,
            columns.ORDER_NUMBER,
            columns.CONTAINER_NUMBER,
            columns.PROVIDER,
            columns.IMPORTER,
            columns.DECLARATION_ISSUE_DATE,
            columns.DECLARATION_NUMBER,
        ]
    },
    {
        [roles.MANAGER_STORE]: [
            columns.ETD,
            columns.ETA,
            columns.FRAHT_ACCOUNT,
            columns.STORE_ARRIVE_DATE,
            columns.INSIDE_NUMBER,
            columns.PROFORM_NUMBER,
            columns.ORDER_NUMBER,
            columns.CONTAINER_NUMBER,
            columns.PRODUCT,
            columns.DIRECTION,
            columns.STORE,
            columns.CONTAINER_TYPE,
            columns.CONDITIONS,
            columns.DECLARATION_ISSUE_DATE,
        ]
    }
]

const columnsKeysMap: ColumnsKeysMap[] = [
    { [roles.MANAGER_INT]: Object.values(columnsKeys) },
    { [roles.HEAD]: Object.values(columnsKeys) },
    {
        [roles.MANAGER_PATRIOT]: [
            columnsKeys.ETA,
            columnsKeys.ETD,
            columnsKeys.FRAHT_ACCOUNT,
            columnsKeys.REQUEST_DATE,
            columnsKeys.INSIDE_NUMBER,
            columnsKeys.PROFORM_NUMBER,
            columnsKeys.ORDER_NUMBER,
            columnsKeys.CONTAINER_NUMBER,
            columnsKeys.PRODUCT,
            columnsKeys.DELIVERY_METHOD,
            columnsKeys.PROVIDER,
            columnsKeys.IMPORTER,
            columnsKeys.DIRECTION,
            columnsKeys.CONDITIONS,
            columnsKeys.DECLARATION_ISSUE_DATE,
            columnsKeys.STORE,
            columnsKeys.STORE_ARRIVE_DATE,
            columnsKeys.AGENT,
            columnsKeys.CONTAINER_TYPE,
            columnsKeys.READY_DATE,
            columnsKeys.LOADING_DATE,
            columnsKeys.IS_DOCS,
            columnsKeys.DECLARATION_NUMBER,
            columnsKeys.DECLARATION_ISSUE_DATE,
            columnsKeys.KM_TO_DIST,
            columnsKeys.TRAIN_DEPART_DATE,
            columnsKeys.TRAIN_ARRIVE_DATE,
        ]
    },
    {
        [roles.MANAGER_BUYER]: [
            columnsKeys.ETD,
            columnsKeys.ETA,
            columnsKeys.FRAHT_ACCOUNT,
            columnsKeys.STORE_ARRIVE_DATE,
            columnsKeys.CONDITIONS,
            columnsKeys.REQUEST_DATE,
            columnsKeys.INSIDE_NUMBER,
            columnsKeys.PROFORM_NUMBER,
            columnsKeys.ORDER_NUMBER,
            columnsKeys.CONTAINER_NUMBER,
            columnsKeys.PRODUCT,
            columnsKeys.DELIVERY_METHOD,
            columnsKeys.PROVIDER,
            columnsKeys.IMPORTER,
            columnsKeys.DIRECTION,
            columnsKeys.STORE,
            columnsKeys.CONTAINER_TYPE,
            columnsKeys.READY_DATE,
            columnsKeys.LOADING_DATE,
            columnsKeys.DECLARATION_NUMBER,
            columnsKeys.DECLARATION_ISSUE_DATE,
            columnsKeys.KM_TO_DIST,
            columnsKeys.TRAIN_DEPART_DATE,
            columnsKeys.TRAIN_ARRIVE_DATE,
        ]
    },
    {
        [roles.MANAGER_SALES]: [
            columnsKeys.ETD,
            columnsKeys.ETA,
            columnsKeys.FRAHT_ACCOUNT,
            columnsKeys.STORE_ARRIVE_DATE,
            columnsKeys.CONDITIONS,
            columnsKeys.INSIDE_NUMBER,
            columnsKeys.PROFORM_NUMBER,
            columnsKeys.ORDER_NUMBER,
            columnsKeys.CONTAINER_NUMBER,
            columnsKeys.PRODUCT,
            columnsKeys.DECLARATION_ISSUE_DATE,
            columnsKeys.DIRECTION,
            columnsKeys.STORE,
            columnsKeys.LOADING_DATE,
            columnsKeys.KM_TO_DIST
        ]
    },
    {
        [roles.MANAGER_TREASURY]: [
            columnsKeys.ETD,
            columnsKeys.ETA,
            columnsKeys.FRAHT_ACCOUNT,
            columnsKeys.STORE_ARRIVE_DATE,
            columnsKeys.INSIDE_NUMBER,
            columnsKeys.PROFORM_NUMBER,
            columnsKeys.ORDER_NUMBER,
            columnsKeys.CONTAINER_NUMBER,
            columnsKeys.PROVIDER,
            columnsKeys.IMPORTER,
            columnsKeys.DECLARATION_ISSUE_DATE,
            columnsKeys.DECLARATION_NUMBER,
        ]
    },
    {
        [roles.MANAGER_STORE]: [
            columnsKeys.ETD,
            columnsKeys.ETA,
            columnsKeys.FRAHT_ACCOUNT,
            columnsKeys.STORE_ARRIVE_DATE,
            columnsKeys.INSIDE_NUMBER,
            columnsKeys.PROFORM_NUMBER,
            columnsKeys.ORDER_NUMBER,
            columnsKeys.CONTAINER_NUMBER,
            columnsKeys.PRODUCT,
            columnsKeys.DIRECTION,
            columnsKeys.STORE,
            columnsKeys.CONTAINER_TYPE,
            columnsKeys.CONDITIONS,
            columnsKeys.DECLARATION_ISSUE_DATE,
        ]
    }
]
