import { FormBidUpdateValues } from "@/features/Table/Types/FormBidUpdateValues.ts";
import { getDateFromDayjs } from "@/utils/getDateFromDayjs.ts";
import { prepareArraysForBidObject } from "./prepareArraysForBidObject.ts";
import { UpdateBid } from "@/features/Table/Types/UpdateBid.ts";

export const prepareBidObject = (dataMap: FormBidUpdateValues, _id: string) => {
    const arrays = prepareArraysForBidObject(dataMap);
    const bid: UpdateBid = {
        _id,
        request_date: getDateFromDayjs(dataMap["request_date"]),
        order_number: arrays.order_number,
        inside_number: arrays.inside_number,
        proform_number: arrays.proform_number,
        container_number: dataMap["container_number"]?.toString(),
        container_type: dataMap["container_type"]?.toString(),
        simple_product_name: arrays.simple_product_number,
        product: [],
        delivery_method: dataMap["delivery_method"]?.toString(),
        providers: arrays.providers,
        importers: arrays.importers,
        conditions: arrays.conditions,
        store_name: dataMap["store"]?.toString(),
        store: undefined,
        delivery_channel: dataMap["delivery_channel"]?.toString(),
        agent: dataMap["agent"]?.toString(),
        place_of_dispatch: dataMap["place_of_dispatch"]?.toString(),
        line: dataMap["line"]?.toString(),
        ready_date: getDateFromDayjs(dataMap["ready_date"]),
        load_date: getDateFromDayjs(dataMap["load_date"]),
        release: getDateFromDayjs(dataMap["release"]),
        bl_smgs_cmr: dataMap["bl_smgs_cmr"] as boolean,
        td: dataMap["td"] as boolean,
        port: dataMap["port"]?.toString(),
        is_ds: dataMap["is_ds"] as boolean,
        is_docs: dataMap["is_docs"],
        fraht_account: dataMap["fraht_account"]?.toString(),
        declaration_number: arrays.declaration_number,
        availability_of_ob: getDateFromDayjs(dataMap["availability_of_ob"]),
        answer_of_ob: getDateFromDayjs(dataMap["answer_of_ob"]),
        expeditor: dataMap["expeditor"]?.toString(),
        destination_station: dataMap["destination_station"]?.toString(),
        km_to_dist: dataMap["km_to_dist"] as number,
        pickup: dataMap["pickup"]?.toString(),
        fraht: dataMap["fraht"]?.toString(),
        creator: "",
        stock_place_name: dataMap["stock_place"]?.toString(),
        stock_place: dataMap["stock_place"]?.toString(),
        hidden: false,
        direction: dataMap["direction"]?.toString(),
    }

    return bid;
}