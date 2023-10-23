import React, { useState } from 'react';
import FormLayout from "@/components/Layout/FormLayout.tsx";
import { Control, FieldValues, UseFormSetValue, UseFormUnregister } from "react-hook-form";
import GInputs from "@/components/GInput/GInputs.ts";
import { ColumnsEnum } from "@/features/Table/enums/columnsEnum.ts";
import SelectDeliveryMethod from "@/features/Table/Components/SelectDeliveryMethod.tsx";
import GButton from "@/components/GInput/components/GButton.tsx";
import { Store } from "@/Types";
import { prepareValuesAndNames } from "@/features/Table/utils/prepareValuesAndNames.ts";

interface Props<T extends FieldValues> {
    onSubmit: () => void;
    control: Control<T>;
    setValue: UseFormSetValue<T>;
    isLoadingStores: boolean;
    stores: Store[];
    unregister: UseFormUnregister<T>;
}

const columns = ColumnsEnum;

function CreateBidForm<T extends FieldValues>({
                                                  onSubmit,
                                                  control,
                                                  setValue,
                                                  isLoadingStores,
                                                  stores,
                                                  unregister
                                              }: Props<T>) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    //TODO: add validation for all fields(arrays)

    const submitHandler = () => {
        setIsSubmitted(true);
        onSubmit();
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    }

    const values = prepareValuesAndNames(stores);

    return (
        <FormLayout className="w-full" onFinish={submitHandler}>
            <div className="grid grid-cols-5 gap-x-10 gap-y-3">
                <GInputs.Date placeholder={columns.REQUEST_DATE} name="request_date"
                              label={columns.REQUEST_DATE} control={control}/>

                <GInputs.Array setValue={setValue}
                               placeholder={columns.ORDER_NUMBER}
                               name="order_number"
                               isCreation={true}
                               unregister={unregister}
                               isSubmitted={isSubmitted}
                               label={columns.ORDER_NUMBER} control={control}/>

                <GInputs.Array setValue={setValue}
                               isCreation={true}
                               isSubmitted={isSubmitted}
                               placeholder={columns.PRODUCT}
                               name="simple_product_name"
                               unregister={unregister}
                               label={columns.PRODUCT} control={control}/>

                <SelectDeliveryMethod control={control}/>

                <GInputs.Array setValue={setValue}
                               isCreation={true}
                               isSubmitted={isSubmitted}
                               placeholder={columns.PROVIDER}
                               name="providers"
                               unregister={unregister}
                               label={columns.PROVIDER} control={control}/>

                <GInputs.Array setValue={setValue}
                               isCreation={true}
                               isSubmitted={isSubmitted}
                               placeholder={columns.IMPORTER}
                               name="importers"
                               unregister={unregister}
                               label={columns.IMPORTER} control={control}/>

                <GInputs.Array setValue={setValue}
                               isCreation={true}
                               isSubmitted={isSubmitted}
                               placeholder={columns.CONDITIONS}
                               name="conditions"
                               unregister={unregister}
                               label={columns.CONDITIONS} control={control}/>

                <GInputs.Select isLoading={isLoadingStores} values={values} tooltips={[]}
                                placeholder={columns.STORE} name="store"
                                label={columns.STORE}
                                control={control}/>

                <GInputs.Text placeholder={columns.DIRECTION} name="direction"
                              label={columns.DIRECTION} control={control}/>

                <GInputs.Text placeholder={columns.AGENT} name="agent"
                              label={columns.AGENT} control={control}/>

                <GInputs.Text placeholder={columns.CONTAINER_TYPE} name="container_type"
                              label={columns.CONTAINER_TYPE} control={control}/>

                <GInputs.Text placeholder={columns.PLACE_OF_DISPATCH} name="place_of_dispatch"
                              label={columns.PLACE_OF_DISPATCH} control={control}/>

            </div>
            <GButton text="Создать"/>
        </FormLayout>
    )
}

export default CreateBidForm;