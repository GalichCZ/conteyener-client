export interface User {
  _id: string
  first_name: string
  last_name: string
  email: string
  role: string
  is_activated: boolean
  activation_link: string
  createdAt: Date
}
