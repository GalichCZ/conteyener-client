import React, { FC, useEffect, useState } from 'react'
import GInputs from '@/components/GInput/GInputs.ts'
import { DatesTypesLabelsEnum } from '@/enums/datesTypesEnum.ts'
import GButton from '@/components/GInput/components/GButton.tsx'
import FormLayout from '@/components/Layout/FormLayout.tsx'
import { Control } from 'react-hook-form'
import { DateCalculateFormType, SelectOption } from '@/Types'
import { useGetDeliveryChannels } from '@/hooks/useGetDeliveryChannels.ts'
import { handleError } from '@/utils/handleError.ts'
import { prepareValuesAndNames } from '@/utils/prepareValuesAndNames.ts'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'

interface Props {
  onSubmit: () => void
  control: Control<DateCalculateFormType>
  hidden: boolean
}

const EtdUpdateForm: FC<Props> = ({ onSubmit, control, hidden }) => {
  const { error, setError, isLoading, deliveryChannels } = useGetDeliveryChannels()
  const [deliveryChannelsOptions, setDeliveryChannelsOptions] = useState<SelectOption[]>([])
  const roleTypes = useGetRoleType()

  useEffect(() => {
    const values = prepareValuesAndNames(deliveryChannels)
    setDeliveryChannelsOptions(values)
  }, [deliveryChannels])

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error])

  return (
    <FormLayout className="shadow-none" onFinish={onSubmit}>
      <GInputs.Date
        disabled={!roleTypes?.isRoleType8 || hidden}
        name="date"
        label={DatesTypesLabelsEnum.ETD}
        control={control}
      />
      <GInputs.Select
        disabled={!roleTypes?.isRoleType8 || hidden}
        name="delivery_channel"
        label="Канал поставки"
        control={control}
        values={deliveryChannelsOptions}
        tooltips={[]}
        isLoading={isLoading}
      />
      {roleTypes?.isRoleType8 && <GButton disabled={hidden} className="mt-2" text="Сохранить" />}
    </FormLayout>
  )
}

export default EtdUpdateForm
