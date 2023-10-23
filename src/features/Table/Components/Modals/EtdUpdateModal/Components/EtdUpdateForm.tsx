import React, { FC, useEffect, useState } from "react";
import GInputs from "@/components/GInput/GInputs.ts";
import { DatesTypesLabelsEnum } from "@/enums/datesTypesEnum.ts";
import GButton from "@/components/GInput/components/GButton.tsx";
import FormLayout from "@/components/Layout/FormLayout.tsx";
import { Control } from "react-hook-form";
import { DateCalculateFormType, SelectOption } from "@/Types";
import { useGetDeliveryChannels } from "@/hooks/useGetDeliveryChannels.ts";
import { handleError } from "@/utils/handleError.ts";
import { prepareValuesAndNames } from "@/features/Table/utils/prepareValuesAndNames.ts";

interface Props {
    onSubmit: () => void;
    control: Control<DateCalculateFormType>
}

const EtdUpdateForm: FC<Props> = ({ onSubmit, control }) => {
    const { error, setError, isLoading, deliveryChannels } = useGetDeliveryChannels();
    const [deliveryChannelsOptions, setDeliveryChannelsOptions] = useState<SelectOption[]>([])

    useEffect(() => {
        const values = prepareValuesAndNames(deliveryChannels)
        setDeliveryChannelsOptions(values);
    }, [deliveryChannels]);

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    return (
        <FormLayout className="shadow-none" onFinish={onSubmit}>
            <GInputs.Date name="date" label={DatesTypesLabelsEnum.ETD} control={control}/>
            <GInputs.Select name="delivery_channel" label="Канал поставки"
                            control={control} values={deliveryChannelsOptions} tooltips={[]} isLoading={isLoading}/>
            <GButton className="mt-2" text="Сохранить"/>
        </FormLayout>
    )
}

export default EtdUpdateForm;