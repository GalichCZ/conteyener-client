import { number, object, string } from 'yup'

export const DeliveryChannelSchema = object()
  .shape({
    name: string().required('Имя обязательно'),
    eta: number().min(0).required('ETA обязательно'),
    date_do: number().min(0).required('Дата ДО обязательна'),
    declaration_issue_date: number().min(0).required('Дата выдачи декларации обязательна'),
    train_depart_date: number().min(0).required('Дата отправления поезда обязательна'),
    train_arrive_date: number().min(0).required('Дата прибытия поезда обязательна'),
    store_arrive_date: number().min(0).required('Дата прибытия на склад обязательна'),
  })
  .required()
