import { FollowBid } from '@/Types'

export type UpdateBid = Omit<
  FollowBid,
  | 'etd'
  | 'eta'
  | 'date_do'
  | 'declaration_issue_date'
  | 'train_arrive_date'
  | 'train_depart_date'
  | 'store_arrive_date'
  | 'train_depart_date_update'
  | 'eta_update'
  | 'store_arrive_date_update'
  | 'date_do_update'
  | 'declaration_issue_date_update'
  | 'train_arrive_date_update'
>
