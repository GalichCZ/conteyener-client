import React, { FC, useState } from 'react';
import FormLayout from "@/components/Layout/FormLayout.tsx";
import { Control, UseFormSetValue } from "react-hook-form";
import GInputs from "@/components/GInput/GInputs.ts";
import { ColumnsEnum } from "@/features/Table/enums/columnsEnum.ts";
import SelectDeliveryMethod from "@/features/Table/Components/SelectDeliveryMethod.tsx";
import GButton from "@/components/GInput/components/GButton.tsx";
import { Store } from "@/Types";
import { prepareValuesAndNames } from "@/features/Table/utils/prepareValuesAndNames.ts";

interface Props {
    onSubmit: () => void;
    control: Control<any>;
    setValue: UseFormSetValue<any>;
    isLoadingStores: boolean;
    stores: Store[];
}

const CreateBidForm: FC<Props> = ({ onSubmit, control, setValue, isLoadingStores, stores }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    //TODO: add validation for all fields(arrays)

    const submitHandler = () => {
        setIsSubmitted(true);
        onSubmit();
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    }

    const { names, values } = prepareValuesAndNames(stores);

    return (
        <FormLayout className="w-full" onFinish={submitHandler}>
            <div className="grid grid-cols-5 gap-x-10 gap-y-3">
                <GInputs.Date placeholder={ColumnsEnum.REQUEST_DATE} name="request_date"
                              label={ColumnsEnum.REQUEST_DATE} control={control}/>

                <GInputs.Array setValue={setValue}
                               placeholder={ColumnsEnum.ORDER_NUMBER}
                               name="order_number"
                               isCreation={true}
                               isSubmitted={isSubmitted}
                               label={ColumnsEnum.ORDER_NUMBER} control={control}/>

                <GInputs.Array setValue={setValue}
                               isCreation={true}
                               isSubmitted={isSubmitted}
                               placeholder={ColumnsEnum.PRODUCT}
                               name="simple_product_name"
                               label={ColumnsEnum.PRODUCT} control={control}/>

                <SelectDeliveryMethod control={control}/>

                <GInputs.Array setValue={setValue}
                               isCreation={true}
                               isSubmitted={isSubmitted}
                               placeholder={ColumnsEnum.PROVIDER}
                               name="providers"
                               label={ColumnsEnum.PROVIDER} control={control}/>

                <GInputs.Array setValue={setValue}
                               isCreation={true}
                               isSubmitted={isSubmitted}
                               placeholder={ColumnsEnum.IMPORTER}
                               name="importers"
                               label={ColumnsEnum.IMPORTER} control={control}/>

                <GInputs.Array setValue={setValue}
                               isCreation={true}
                               isSubmitted={isSubmitted}
                               placeholder={ColumnsEnum.CONDITIONS}
                               name="conditions"
                               label={ColumnsEnum.CONDITIONS} control={control}/>

                <GInputs.Select isLoading={isLoadingStores} values={values} labels={names} tooltips={[]}
                                placeholder={ColumnsEnum.STORE} name="store"
                                label={ColumnsEnum.STORE}
                                control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.DIRECTION} name="direction"
                              label={ColumnsEnum.DIRECTION} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.AGENT} name="agent"
                              label={ColumnsEnum.AGENT} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.CONTAINER_TYPE} name="container_type"
                              label={ColumnsEnum.CONTAINER_TYPE} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.PLACE_OF_DISPATCH} name="place_of_dispatch"
                              label={ColumnsEnum.PLACE_OF_DISPATCH} control={control}/>

            </div>
            <GButton text="Создать"/>
        </FormLayout>
    )
}

export default CreateBidForm;