import React, { useEffect, useState } from 'react'
import FormLayout from '@/components/Layout/FormLayout.tsx'
import { Control, FieldValues, UseFormSetValue, UseFormUnregister } from 'react-hook-form'
import GInputs from '@/components/GInput/GInputs.ts'
import { ColumnsEnum } from '@/enums/columnsEnum.ts'
import SelectDeliveryMethod from '@/features/Table/Components/SelectDeliveryMethod.tsx'
import GButton from '@/components/GInput/components/GButton.tsx'
import { prepareValuesAndNames } from '@/utils/prepareValuesAndNames.ts'
import { useGetStores } from '@/hooks/useGetStores.ts'
import { handleError } from '@/utils/handleError.ts'
import { DevTool } from '@hookform/devtools'

interface Props<T extends FieldValues> {
  onSubmit: () => void
  control: Control<T>
  setValue: UseFormSetValue<T>
  unregister: UseFormUnregister<T>
}

const columns = ColumnsEnum

function CreateBidForm<T extends FieldValues>({
  onSubmit,
  control,
  setValue,
  unregister,
}: Props<T>) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { isLoading, stores, error, setError } = useGetStores()

  //TODO: add validation for all fields(arrays), check duplicates, add this logic to update

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error])

  const submitHandler = () => {
    setIsSubmitted(true)
    onSubmit()
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const values = prepareValuesAndNames(stores)

  return (
    <FormLayout className="w-full" onFinish={submitHandler}>
      <div className="grid grid-cols-5 gap-x-10 gap-y-3">
        <GInputs.Date
          placeholder={columns.REQUEST_DATE}
          name="request_date"
          label={columns.REQUEST_DATE}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          placeholder={columns.ORDER_NUMBER}
          name="order_number"
          isCreation={true}
          unregister={unregister}
          isSubmitted={isSubmitted}
          label={columns.ORDER_NUMBER}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          isCreation={true}
          isSubmitted={isSubmitted}
          placeholder={columns.PRODUCT}
          name="simple_product_name"
          unregister={unregister}
          label={columns.PRODUCT}
          control={control}
        />

        <SelectDeliveryMethod control={control} />

        <GInputs.Array
          setValue={setValue}
          isCreation={true}
          isSubmitted={isSubmitted}
          placeholder={columns.PROVIDER}
          name="providers"
          unregister={unregister}
          label={columns.PROVIDER}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          isCreation={true}
          isSubmitted={isSubmitted}
          placeholder={columns.IMPORTER}
          name="importers"
          unregister={unregister}
          label={columns.IMPORTER}
          control={control}
        />

        <GInputs.Array
          setValue={setValue}
          isCreation={true}
          isSubmitted={isSubmitted}
          placeholder={columns.CONDITIONS}
          name="conditions"
          unregister={unregister}
          label={columns.CONDITIONS}
          control={control}
        />

        <GInputs.Select
          isLoading={isLoading}
          values={values}
          tooltips={[]}
          placeholder={columns.STORE}
          name="store"
          label={columns.STORE}
          control={control}
        />

        <GInputs.Text
          placeholder={columns.DIRECTION}
          name="direction"
          label={columns.DIRECTION}
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
      </div>
      <GButton text="Создать" />
      <DevTool control={control} />
    </FormLayout>
  )
}

export default CreateBidForm
