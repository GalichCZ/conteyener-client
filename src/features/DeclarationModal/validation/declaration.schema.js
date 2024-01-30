import { object, string } from 'yup'

export const DeclarationSchema = object({
  declaration_status_date: string().required('Дата обязательна'),
  declaration_status: string().required('Статус декларации обязателен'),
}).required()
