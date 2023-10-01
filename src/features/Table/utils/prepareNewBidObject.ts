import { prepareArraysForBidObject } from "@/features/Table/utils/prepareArraysForBidObject.ts";
import { NewBid } from "@/features/Table/Types/NewBid.ts";
import { getDateFromDayjs } from "@/utils/getDateFromDayjs.ts";
import { FormBidCreateValues } from "@/features/Table/Types/FormBidCreateValues.ts";

export const prepareNewBidObject = (data: FormBidCreateValues) => {
    const arrays = prepareArraysForBidObject(data);

    const newBid: NewBid = {
        request_date: getDateFromDayjs(data["request_date"]),
        order_number: arrays.order_number,
        simple_product_name: arrays.simple_product_number,
        providers: arrays.providers,
        importers: arrays.importers,
        conditions: arrays.conditions,
        store: data["store"].toString(),
        direction: data["direction"].toString(),
        agent: data["agent"].toString(),
        container_type: data["container_type"].toString(),
        place_of_dispatch: data["place_of_dispatch"].toString(),
    }

    return newBid;
}