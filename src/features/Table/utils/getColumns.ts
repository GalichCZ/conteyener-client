import { RolesEnum } from "@/enums/rolesEnum"
import { ColumnsEnum, ColumnsKeysEnum } from "@/enums/columnsEnum.ts";

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
            columns.REQUEST_DATE,
            columns.INSIDE_NUMBER,
            columns.PROFORM_NUMBER,
            columns.ORDER_NUMBER,
            columns.CONTAINER_NUMBER,
            columns.PRODUCT,
            columns.DELIVERY_METHOD,
            columns.PROVIDER,
            columns.IMPORTER,
            columns.CONDITIONS,
            columns.DIRECTION,
            columns.STORE,
            columns.AGENT,
            columns.CONTAINER_TYPE,
            columns.READY_DATE,
            columns.LOAD_DATE,
            columns.ETD,
            columns.ETA,
            columns.FRAHT_ACCOUNT,
            columns.IS_DOCS,
            columns.DECLARATION_NUMBER,
            columns.DECLARATION_ISSUE_DATE,
            columns.KM_TO_DIST,
            columns.TRAIN_DEPART_DATE,
            columns.TRAIN_ARRIVE_DATE,
            columns.STORE_ARRIVE_DATE,
        ]
    },
    {
        [roles.MANAGER_BUYER]: [
            columns.REQUEST_DATE,
            columns.INSIDE_NUMBER,
            columns.PROFORM_NUMBER,
            columns.ORDER_NUMBER,
            columns.CONTAINER_NUMBER,
            columns.PRODUCT,
            columns.DELIVERY_METHOD,
            columns.PROVIDER,
            columns.IMPORTER,
            columns.CONDITIONS,
            columns.DIRECTION,
            columns.STORE,
            columns.CONTAINER_TYPE,
            columns.READY_DATE,
            columns.LOAD_DATE,
            columns.ETD,
            columns.ETA,
            columns.FRAHT_ACCOUNT,
            columns.DECLARATION_NUMBER,
            columns.DECLARATION_ISSUE_DATE,
            columns.KM_TO_DIST,
            columns.TRAIN_DEPART_DATE,
            columns.TRAIN_ARRIVE_DATE,
            columns.STORE_ARRIVE_DATE,
        ]
    },
    {
        [roles.MANAGER_SALES]: [
            columns.INSIDE_NUMBER,
            columns.PROFORM_NUMBER,
            columns.ORDER_NUMBER,
            columns.CONTAINER_NUMBER,
            columns.PRODUCT,
            columns.CONDITIONS,
            columns.DIRECTION,
            columns.STORE,
            columns.LOAD_DATE,
            columns.ETD,
            columns.ETA,
            columns.FRAHT_ACCOUNT,
            columns.DECLARATION_ISSUE_DATE,
            columns.KM_TO_DIST,
            columns.STORE_ARRIVE_DATE
        ]
    },
    {
        [roles.MANAGER_TREASURY]: [
            columns.INSIDE_NUMBER,
            columns.PROFORM_NUMBER,
            columns.ORDER_NUMBER,
            columns.CONTAINER_NUMBER,
            columns.PROVIDER,
            columns.IMPORTER,
            columns.ETD,
            columns.ETA,
            columns.FRAHT_ACCOUNT,
            columns.DECLARATION_NUMBER,
            columns.DECLARATION_ISSUE_DATE,
            columns.STORE_ARRIVE_DATE,
        ]
    },
    {
        [roles.MANAGER_STORE]: [
            columns.INSIDE_NUMBER,
            columns.PROFORM_NUMBER,
            columns.ORDER_NUMBER,
            columns.CONTAINER_NUMBER,
            columns.PRODUCT,
            columns.CONDITIONS,
            columns.DIRECTION,
            columns.STORE,
            columns.CONTAINER_TYPE,
            columns.ETD,
            columns.ETA,
            columns.FRAHT_ACCOUNT,
            columns.DECLARATION_ISSUE_DATE,
            columns.STORE_ARRIVE_DATE,
        ]
    }
]

const columnsKeysMap: ColumnsKeysMap[] = [
    { [roles.MANAGER_INT]: Object.values(columnsKeys) },
    { [roles.HEAD]: Object.values(columnsKeys) },
    {
        [roles.MANAGER_PATRIOT]: [
            columnsKeys.REQUEST_DATE,
            columnsKeys.INSIDE_NUMBER,
            columnsKeys.PROFORM_NUMBER,
            columnsKeys.ORDER_NUMBER,
            columnsKeys.CONTAINER_NUMBER,
            columnsKeys.PRODUCT,
            columnsKeys.DELIVERY_METHOD,
            columnsKeys.PROVIDER,
            columnsKeys.IMPORTER,
            columnsKeys.CONDITIONS,
            columnsKeys.DIRECTION,
            columnsKeys.STORE,
            columnsKeys.AGENT,
            columnsKeys.CONTAINER_TYPE,
            columnsKeys.READY_DATE,
            columnsKeys.LOAD_DATE,
            columnsKeys.ETD,
            columnsKeys.ETA,
            columnsKeys.FRAHT_ACCOUNT,
            columnsKeys.IS_DOCS,
            columnsKeys.DECLARATION_NUMBER,
            columnsKeys.DECLARATION_ISSUE_DATE,
            columnsKeys.KM_TO_DIST,
            columnsKeys.TRAIN_DEPART_DATE,
            columnsKeys.TRAIN_ARRIVE_DATE,
            columnsKeys.STORE_ARRIVE_DATE,
        ]
    },
    {
        [roles.MANAGER_BUYER]: [
            columnsKeys.REQUEST_DATE,
            columnsKeys.INSIDE_NUMBER,
            columnsKeys.PROFORM_NUMBER,
            columnsKeys.ORDER_NUMBER,
            columnsKeys.CONTAINER_NUMBER,
            columnsKeys.PRODUCT,
            columnsKeys.DELIVERY_METHOD,
            columnsKeys.PROVIDER,
            columnsKeys.IMPORTER,
            columnsKeys.CONDITIONS,
            columnsKeys.DIRECTION,
            columnsKeys.STORE,
            columnsKeys.CONTAINER_TYPE,
            columnsKeys.READY_DATE,
            columnsKeys.LOAD_DATE,
            columnsKeys.ETD,
            columnsKeys.ETA,
            columnsKeys.FRAHT_ACCOUNT,
            columnsKeys.DECLARATION_NUMBER,
            columnsKeys.DECLARATION_ISSUE_DATE,
            columnsKeys.KM_TO_DIST,
            columnsKeys.TRAIN_DEPART_DATE,
            columnsKeys.TRAIN_ARRIVE_DATE,
            columnsKeys.STORE_ARRIVE_DATE,
        ]
    },
    {
        [roles.MANAGER_SALES]: [
            columnsKeys.INSIDE_NUMBER,
            columnsKeys.PROFORM_NUMBER,
            columnsKeys.ORDER_NUMBER,
            columnsKeys.CONTAINER_NUMBER,
            columnsKeys.PRODUCT,
            columnsKeys.CONDITIONS,
            columnsKeys.DIRECTION,
            columnsKeys.STORE,
            columnsKeys.LOAD_DATE,
            columnsKeys.ETD,
            columnsKeys.ETA,
            columnsKeys.FRAHT_ACCOUNT,
            columnsKeys.DECLARATION_ISSUE_DATE,
            columnsKeys.KM_TO_DIST,
            columnsKeys.STORE_ARRIVE_DATE
        ]
    },
    {
        [roles.MANAGER_TREASURY]: [
            columnsKeys.INSIDE_NUMBER,
            columnsKeys.PROFORM_NUMBER,
            columnsKeys.ORDER_NUMBER,
            columnsKeys.CONTAINER_NUMBER,
            columnsKeys.PROVIDER,
            columnsKeys.IMPORTER,
            columnsKeys.ETD,
            columnsKeys.ETA,
            columnsKeys.FRAHT_ACCOUNT,
            columnsKeys.DECLARATION_NUMBER,
            columnsKeys.DECLARATION_ISSUE_DATE,
            columnsKeys.STORE_ARRIVE_DATE,
        ]
    },
    {
        [roles.MANAGER_STORE]: [
            columnsKeys.INSIDE_NUMBER,
            columnsKeys.PROFORM_NUMBER,
            columnsKeys.ORDER_NUMBER,
            columnsKeys.CONTAINER_NUMBER,
            columnsKeys.PRODUCT,
            columnsKeys.CONDITIONS,
            columnsKeys.DIRECTION,
            columnsKeys.STORE,
            columnsKeys.CONTAINER_TYPE,
            columnsKeys.ETD,
            columnsKeys.ETA,
            columnsKeys.FRAHT_ACCOUNT,
            columnsKeys.DECLARATION_ISSUE_DATE,
            columnsKeys.STORE_ARRIVE_DATE,
        ]
    }
]
