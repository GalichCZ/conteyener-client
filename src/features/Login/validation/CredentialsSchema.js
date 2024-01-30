import { object, string } from 'yup'

export const CredentialsSchema = object({
  email: string().email('Неверный вид email').required('Email обязателен'),
  password: string().required('Пароль обязателен'),
}).required()
