import React, { FC } from "react";
import { ColumnsEnum } from "@/features/Table/enums/columnsEnum.ts";
import GInputs from "@/components/GInput/GInputs.ts";
import { deliveryEnum, deliveryEnumTooltips } from "@/features/Table/enums/deliveryMethods.ts";
import { Control } from "react-hook-form";

interface Props {
    control: Control<any>;
}

const SelectDeliveryMethod: FC<Props> = ({ control }) => {
    const deliveryValues = Object.values(deliveryEnum);
    const deliveryToolTips = Object.values(deliveryEnumTooltips);


    return (<GInputs.Select values={deliveryValues} labels={deliveryValues} tooltips={deliveryToolTips}
                            placeholder={ColumnsEnum.DELIVERY_METHOD} name="delivery_method"
                            label={ColumnsEnum.DELIVERY_METHOD}
                            control={control}/>)
}

export default SelectDeliveryMethod;