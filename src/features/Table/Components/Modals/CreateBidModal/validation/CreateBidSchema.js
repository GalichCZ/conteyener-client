import {date, object, string} from "yup";

export const CreateBidSchema = object({
    request_date: date().required('Дата обязательна'),
    direction: string().required('Направление обязательно'),
    delivery_method: string().required('Способ доставки обязателен'),
    store: string().required('Склад обязателен'),
    agent: string().required('Агент обязателен'),
    container_type: string().required('Тип контейнера обязателен'),
    place_of_dispatch: string().required('Место отправления обязательно'),
}).required();