import { object, ref, string } from 'yup'

export const UserRegisterSchema = object({
  email: string().email('Неверный вид email').required('Email обязателен'),
  password: string().min(6, 'Пароль должен быть не менее 6 символов').required('Пароль обязателен'),
  passwordConfirmation: string()
    .oneOf([ref('password'), null], 'Пароли должны совпадать')
    .required('Подтверждение пароля обязательно'),
  first_name: string().required('Имя обязательно'),
  last_name: string().required('Фамилия обязательна'),
}).required()
