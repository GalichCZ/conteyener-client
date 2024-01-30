import { User } from '@/Types'

interface UserRegistration extends User {
  password: string
  passwordConfirmation: string
}

export type UserRegister = Omit<
  UserRegistration,
  '_id' | 'role' | 'createdAt' | 'is_activated' | 'activation_link'
>
