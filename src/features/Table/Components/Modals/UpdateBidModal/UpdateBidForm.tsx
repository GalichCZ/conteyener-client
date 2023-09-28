import React, { FC } from "react";
import GInputs from "@/components/GInput/GInputs.ts";
import { ColumnsEnum } from "@/features/Table/enums/columnsEnum.ts";
import GButton from "@/components/GInput/GButton.tsx";
import FormLayout from "@/components/Layout/FormLayout.tsx";
import { FormBidUpdateValues } from "@/features/Table/Types/FormBidUpdateValues.ts";
import { Control } from "react-hook-form";

interface Props {
    onSubmit: (data: FormBidUpdateValues) => void;
    control: Control<FormBidUpdateValues>;
    deliveryValues: string[];
    deliveryToolTips: string[];
}

const UpdateBidForm: FC<Props> = ({ onSubmit, control }) => {
    return (
        <FormLayout className="w-full" onFinish={onSubmit}>
            <div className="grid grid-cols-5 gap-x-10 gap-y-3">
                <GInputs.Date placeholder={ColumnsEnum.REQUEST_DATE} name="request_date"
                              label={ColumnsEnum.REQUEST_DATE} control={control}/>

                <GInputs.Select values={deliveryValues} labels={deliveryValues} tooltips={deliveryToolTips}
                                placeholder={ColumnsEnum.DELIVERY_METHOD} name="delivery_method"
                                label={ColumnsEnum.DELIVERY_METHOD}
                                control={control}/>

                <GInputs.Array setValue={setValue}
                               placeholder={ColumnsEnum.INSIDE_NUMBER}
                               name="inside_number"
                               label={ColumnsEnum.INSIDE_NUMBER} control={control}/>

                <GInputs.Array setValue={setValue}
                               placeholder={ColumnsEnum.PROFORM_NUMBER}
                               name="proform_number"
                               label={ColumnsEnum.PROFORM_NUMBER} control={control}/>

                <GInputs.Array setValue={setValue}
                               placeholder={ColumnsEnum.ORDER_NUMBER}
                               name="order_number"
                               label={ColumnsEnum.ORDER_NUMBER} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.CONTAINER_NUMBER} name="container_number"
                              label={ColumnsEnum.CONTAINER_NUMBER} control={control}/>

                <GInputs.Array setValue={setValue}
                               placeholder={ColumnsEnum.PRODUCT}
                               name="product"
                               label={ColumnsEnum.PRODUCT} control={control}/>

                <GInputs.Array setValue={setValue}
                               placeholder={ColumnsEnum.PROVIDER}
                               name="provider"
                               label={ColumnsEnum.PROVIDER} control={control}/>

                <GInputs.Array setValue={setValue}
                               placeholder={ColumnsEnum.IMPORTER}
                               name="importer"
                               label={ColumnsEnum.IMPORTER} control={control}/>

                <GInputs.Array setValue={setValue}
                               placeholder={ColumnsEnum.CONDITIONS}
                               name="conditions"
                               label={ColumnsEnum.CONDITIONS} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.DIRECTION} name="direction"
                              label={ColumnsEnum.DIRECTION} control={control}/>

                <GInputs.Select isLoading={isLoadingStores} values={[]} labels={[]} tooltips={[]}
                                placeholder={ColumnsEnum.STORE} name="store"
                                label={ColumnsEnum.STORE}
                                control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.AGENT} name="agent"
                              label={ColumnsEnum.AGENT} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.CONTAINER_TYPE} name="container_type"
                              label={ColumnsEnum.CONTAINER_TYPE} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.PLACE_OF_DISPATCH} name="place_of_dispatch"
                              label={ColumnsEnum.PLACE_OF_DISPATCH} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.LINE} name="line"
                              label={ColumnsEnum.LINE} control={control}/>

                <GInputs.Date placeholder={ColumnsEnum.READY_DATE} name="ready_date"
                              label={ColumnsEnum.READY_DATE} control={control}/>

                <GInputs.Date placeholder={ColumnsEnum.LOADING_DATE} name="loading_date"
                              label={ColumnsEnum.LOADING_DATE} control={control}/>

                <GInputs.Switch name="bl_smgs_cmr" label={ColumnsEnum.BL_SMGS_CMR} control={control}/>

                <GInputs.Switch name="td" label={ColumnsEnum.TD} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.PORT} name="port"
                              label={ColumnsEnum.PORT} control={control}/>

                <GInputs.Switch name="is_ds" label={ColumnsEnum.TD} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.FRAHT_ACCOUNT} name="fraht_account"
                              label={ColumnsEnum.FRAHT_ACCOUNT} control={control}/>

                <GInputs.Array setValue={setValue}
                               placeholder={ColumnsEnum.DECLARATION_NUMBER}
                               name="declaration_number"
                               label={ColumnsEnum.DECLARATION_NUMBER} control={control}/>

                <GInputs.Date placeholder={ColumnsEnum.AVAILIBILITY_IF_OB} name="availibility_if_ob"
                              label={ColumnsEnum.AVAILIBILITY_IF_OB} control={control}/>

                <GInputs.Date placeholder={ColumnsEnum.ANSWER_OF_OB} name="answer_of_ob"
                              label={ColumnsEnum.ANSWER_OF_OB} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.EXPEDITOR} name="expeditor"
                              label={ColumnsEnum.EXPEDITOR} control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.DESTINATION_STATION} name="destination_station"
                              label={ColumnsEnum.DESTINATION_STATION} control={control}/>

                <GInputs.Select values={[]} labels={[]} tooltips={[]}
                                placeholder={ColumnsEnum.STOCK_PLACE} name="stock_place"
                                label={ColumnsEnum.STOCK_PLACE}
                                control={control}/>

                <GInputs.Text placeholder={ColumnsEnum.PICKUP} name="pickup"
                              label={ColumnsEnum.PICKUP} control={control}/>
            </div>
            <GButton text="Изменить"/>
        </FormLayout>
    )
}

export default UpdateBidForm;