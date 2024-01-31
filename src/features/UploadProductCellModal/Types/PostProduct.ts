import { Products } from '@/Types'

export type PostProduct = Omit<Products, '_id' | 'container'>
