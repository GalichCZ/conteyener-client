export interface Store {
  _id?: string
  address: string
  name: string
  receiver: string
  contact: string
  note?: string
}

export type StoreFormType = Omit<Store, '_id'>
