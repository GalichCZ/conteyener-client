import { FollowBid } from "@/Types";
import { UseFormSetValue } from "react-hook-form";
import { FormBidUpdateValues } from "@/features/Table/Types/FormBidUpdateValues.ts";

export const setValuesInForm = (bid: FollowBid, setValue: UseFormSetValue<FormBidUpdateValues>) => {
    Object.keys(bid).forEach((key) => {
        const _key = key;
        if (_key === "order_number" || _key === "inside_number"
            || _key === "proform_number" || _key === "providers"
            || _key === "importers" || _key === "conditions"
            || _key === "declaration_number" || _key === "simple_product_name") {
            return;
        }
        if (_key === "store" || _key === "stock_place") {
            setValue(_key, bid[_key]?._id)
            return;
        }
        setValue(key, bid[key])
    })
}