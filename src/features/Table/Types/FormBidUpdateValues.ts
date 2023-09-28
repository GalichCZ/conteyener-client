import { Dayjs } from "dayjs";

type BidKey = string
type BidValue = string | number | boolean | Dayjs | undefined;
export type FormBidUpdateValues = Record<BidKey, BidValue>