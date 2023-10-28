import React from "react";
import { ColumnsEnum } from "@/enums/columnsEnum.ts";
import GInputs from "@/components/GInput/GInputs.ts";
import { deliveryEnum, deliveryEnumTooltips } from "@/features/Table/enums/deliveryMethods.ts";
import { Control, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
    control: Control<T>;
}

function SelectDeliveryMethod<T extends FieldValues>({ control }: Props<T>) {
    const deliveryValues = Object.values(deliveryEnum);
    const deliveryToolTips = Object.values(deliveryEnumTooltips);
    const deliveries = deliveryValues.map(i => {
        return { key: i, value: i }
    })

    return (<GInputs.Select values={deliveries} tooltips={deliveryToolTips}
                            placeholder={ColumnsEnum.DELIVERY_METHOD} name="delivery_method"
                            label={ColumnsEnum.DELIVERY_METHOD}
                            control={control}/>)
}

export default SelectDeliveryMethod;