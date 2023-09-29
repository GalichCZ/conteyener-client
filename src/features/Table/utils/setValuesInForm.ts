import { FollowBid } from "@/Types";
import { UseFormSetValue } from "react-hook-form";
import { FormBidUpdateValues } from "@/features/Table/Types/FormBidUpdateValues.ts";

export const setValuesInForm = (bid: FollowBid, setValue: UseFormSetValue<FormBidUpdateValues>) => {
    Object.keys(bid).forEach((key) => {
        setValue(key, bid[key])
    })
}