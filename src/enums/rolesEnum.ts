export enum RolesEnum {
    MANAGER_PATRIOT = 'manager_patriot',
    MANAGER_BUYER = 'manager_buyer',
    HEAD = 'head',
    MANAGER_INT = 'manager_int',
    MANAGER_SALES = 'manager_sales',
    MANAGER_TREASURY = 'manager_treasury',
    MANAGER_STORE = 'manager_store',
}

export enum RolesLabelEnum {
    MANAGER_PATRIOT = 'Менеджер "Патриот" в Китае',
    MANAGER_BUYER = 'Менеджер по Закупкам',
    HEAD = 'Руководитель',
    MANAGER_INT = 'Менеджер Международной Логистики',
    MANAGER_SALES = 'Менеджер отдела Продаж',
    MANAGER_TREASURY = 'Менеджер Казначейства',
    MANAGER_STORE = 'Менеджер Склада',
}

export const RolesLabelEnumMap: Record<string, RolesLabelEnum> = RolesLabelEnum;
