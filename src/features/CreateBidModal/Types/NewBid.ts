import { FollowBid } from '@/Types/FollowBid.ts'

interface NewBidStore {
  store: string
  order_number: { key: number; order_number: string }[]
}

type NewBidPoles = Pick<
  FollowBid,
  | 'request_date'
  | 'simple_product_name'
  | 'providers'
  | 'importers'
  | 'conditions'
  | 'direction'
  | 'agent'
  | 'container_type'
  | 'place_of_dispatch'
  | 'delivery_method'
>

export type NewBid = NewBidStore & NewBidPoles
