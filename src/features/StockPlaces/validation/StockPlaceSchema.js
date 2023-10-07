import {object, string} from 'yup';

export const StockPlaceSchema = object().shape({
    name: string().required("Наименование обязательно"),
    address: string().required("Адрес обязателен"),
    contact: string().required("Контактное лицо обязательно"),
}).required();