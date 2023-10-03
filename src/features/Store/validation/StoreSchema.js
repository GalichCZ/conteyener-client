import {object, string} from "yup";

export const StoreSchema = object({
    name: string().required('Название обязательно'),
    address: string().required('Адрес обязателен'),
    receiver: string().required('Получатель обязателен'),
    contact: string().required('Контакт обязателен'),
    note: string().min(3, 'Минимум 3 символа'),
}).required();