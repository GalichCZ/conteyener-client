import { Dayjs } from "dayjs";

type BidKey = string
type BidValue = string | number | boolean | Dayjs | Date;

export type FormBidCreateValues = Record<BidKey, BidValue>