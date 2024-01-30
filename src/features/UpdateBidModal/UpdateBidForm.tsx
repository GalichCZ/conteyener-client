import React, { FC, useEffect } from 'react'
import GInputs from '@/components/GInput/GInputs.ts'
import { ColumnsEnum } from '@/enums/columnsEnum.ts'
import GButton from '@/components/GInput/components/GButton.tsx'
import FormLayout from '@/components/Layout/FormLayout.tsx'
import { FormBidUpdateValues } from '@/features/UpdateBidModal/Type/FormBidUpdateValues.ts'
import { Control, UseFormSetValue, UseFormUnregister } from 'react-hook-form'
import SelectDeliveryMethod from '@/features/Table/Components/SelectDeliveryMethod.tsx'
import { FollowBid } from '@/Types'
import { prepareValuesAndNames } from '@/utils/prepareValuesAndNames.ts'
import { useGetStores } from '@/hooks/useGetStores.ts'
import { useGetStockPlaces } from '@/hooks/useGetStockPlaces.ts'
import { handleError } from '@/utils/handleError.ts'
import { DevTool } from '@hookform/devtools'

interface Props {
  onSubmit: () => void
  control: Control<FormBidUpdateValues>
  setValue: UseFormSetValue<FormBidUpdateValues>
  followBid: FollowBid
  unregister: UseFormUnregister<FormBidUpdateValues>
}

const columns = ColumnsEnum
const UpdateBidForm: FC<Props> = ({ onSubmit, control, setValue, followBid, unregister }) => {
  const {
    isLoading: isLoadingStores,
    stores,
    error: errorStores,
    setError: setStoresError,
  } = useGetStores()
  const {
    isLoading: isLoadingStock,
    stockPlaces,
    error: errorStock,
    setError: setStockError,
  } = useGetStockPlaces()
  const preparedStores = prepareValuesAndNames(stores)
  const preparedStockPlaces = prepareValuesAndNames(stockPlaces)

  useEffect(() => {
    if (errorStores) {
      handleError(errorStores)
      setStoresError(null)
    }
    if (errorStock) {
      handleError(errorStock)
      setStockError(null)
    }
  }, [errorStock, errorStores, setStockError, setStoresError])

  return (
    <FormLayout className="w-full" onFinish={onSubmit}>
      <div className="grid grid-cols-5 gap-x-10 gap-y-3">
        <GInputs.Date
          placeholder={columns.REQUEST_DATE}
          name="request_date"
          label={columns.REQUEST_DATE}
          control={control}
        />

        <SelectDeliveryMethod control={control} />

        <GInputs.Array
          setValue={setValue}
          unregister={unregister}
          dataArray={followBid.inside_number}
          placeholder={columns.INSIDE_NUMBER}
          name="inside_number"
          label={columns.INSIDE_NUMBER}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          unregister={unregister}
          dataArray={followBid.proform_number}
          placeholder={columns.PROFORM_NUMBER}
          name="proform_number"
          label={columns.PROFORM_NUMBER}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          unregister={unregister}
          dataArray={followBid.order_number}
          placeholder={columns.ORDER_NUMBER}
          name="order_number"
          label={columns.ORDER_NUMBER}
          control={control}
        />

        <GInputs.Text
          placeholder={columns.CONTAINER_NUMBER.toString()}
          name="container_number"
          label={columns.CONTAINER_NUMBER}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          unregister={unregister}
          dataArray={followBid.simple_product_name}
          placeholder={columns.PRODUCT}
          name="simple_product_name"
          label={columns.PRODUCT}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          unregister={unregister}
          dataArray={followBid.providers}
          placeholder={columns.PROVIDER}
          name="providers"
          label={columns.PROVIDER}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          unregister={unregister}
          dataArray={followBid.importers}
          placeholder={columns.IMPORTER}
          name="importers"
          label={columns.IMPORTER}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          unregister={unregister}
          dataArray={followBid.conditions}
          placeholder={columns.CONDITIONS}
          name="conditions"
          label={columns.CONDITIONS}
          control={control}
        />

        <GInputs.Text
          placeholder={columns.DIRECTION}
          name="direction"
          label={columns.DIRECTION}
          control={control}
        />

        <GInputs.Select
          isLoading={isLoadingStores}
          values={preparedStores}
          tooltips={[]}
          placeholder={columns.STORE}
          name="store"
          label={columns.STORE}
          control={control}
        />

        <GInputs.Text
          placeholder={columns.AGENT}
          name="agent"
          label={columns.AGENT}
          control={control}
        />

        <GInputs.Text
          placeholder={columns.CONTAINER_TYPE}
          name="container_type"
          label={columns.CONTAINER_TYPE}
          control={control}
        />

        <GInputs.Text
          placeholder={columns.PLACE_OF_DISPATCH}
          name="place_of_dispatch"
          label={columns.PLACE_OF_DISPATCH}
          control={control}
        />

        <GInputs.Text
          placeholder={columns.LINE}
          name="line"
          label={columns.LINE}
          control={control}
        />

        <GInputs.Date
          placeholder={columns.READY_DATE}
          name="ready_date"
          label={columns.READY_DATE}
          control={control}
        />

        <GInputs.Date
          placeholder={columns.LOAD_DATE}
          name="load_date"
          label={columns.LOAD_DATE}
          control={control}
        />

        <GInputs.Switch name="bl_smgs_cmr" label={columns.BL_SMGS_CMR} control={control} />

        <GInputs.Switch name="td" label={columns.TD} control={control} />

        <GInputs.Text
          placeholder={columns.PORT}
          name="port"
          label={columns.PORT}
          control={control}
        />

        <GInputs.Switch name="is_ds" label={columns.IS_DS} control={control} />

        <GInputs.Text
          placeholder={columns.FRAHT_ACCOUNT}
          name="fraht_account"
          label={columns.FRAHT_ACCOUNT}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          unregister={unregister}
          dataArray={followBid.declaration_number}
          placeholder={columns.DECLARATION_NUMBER}
          name="declaration_number"
          label={columns.DECLARATION_NUMBER}
          control={control}
        />

        <GInputs.Date
          placeholder={columns.AVAILIBILITY_IF_OB}
          name="availability_of_ob"
          label={columns.AVAILIBILITY_IF_OB}
          control={control}
        />

        <GInputs.Date
          placeholder={columns.ANSWER_OF_OB}
          name="answer_of_ob"
          label={columns.ANSWER_OF_OB}
          control={control}
        />

        <GInputs.Text
          placeholder={columns.EXPEDITOR}
          name="expeditor"
          label={columns.EXPEDITOR}
          control={control}
        />

        <GInputs.Text
          placeholder={columns.DESTINATION_STATION}
          name="destination_station"
          label={columns.DESTINATION_STATION}
          control={control}
        />

        <GInputs.Select
          isLoading={isLoadingStock}
          values={preparedStockPlaces}
          tooltips={[]}
          placeholder={columns.STOCK_PLACE}
          name="stock_place"
          label={columns.STOCK_PLACE}
          control={control}
        />

        <GInputs.Text
          placeholder={columns.PICKUP}
          name="pickup"
          label={columns.PICKUP}
          control={control}
        />
      </div>
      <GButton text="Изменить" />
      <DevTool control={control} />
    </FormLayout>
  )
}

export default UpdateBidForm
