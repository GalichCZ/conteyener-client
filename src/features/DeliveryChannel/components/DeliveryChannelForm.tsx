import React, { FC, useEffect } from 'react'
import FormLayout from '@/components/Layout/FormLayout.tsx'
import { DeliveryChannel, DeliveryChannelFormType } from '@/Types'
import { Control, UseFormSetValue } from 'react-hook-form'
import GInputs from '@/components/GInput/GInputs.ts'
import { DatesTypesFormNamesEnum, DatesTypesLabelsEnum } from '@/enums/datesTypesEnum.ts'
import GButton from '@/components/GInput/components/GButton.tsx'
import { DevTool } from '@hookform/devtools'

interface Props {
  control: Control<DeliveryChannelFormType>
  onSubmit: () => void
  deliveryChannel: DeliveryChannel | null
  setValue: UseFormSetValue<DeliveryChannelFormType>
}

const DeliveryChannelForm: FC<Props> = ({ control, deliveryChannel, setValue, onSubmit }) => {
  const names = DatesTypesFormNamesEnum
  const labels = DatesTypesLabelsEnum

  useEffect(() => {
    if (deliveryChannel) {
      const channel = deliveryChannel
      setValue('name', channel.name)
      setValue(names.ETA, channel.eta)
      setValue(names.DATE_DO, channel.date_do)
      setValue(names.DECLARATION_ISSUE_DATE, channel.declaration_issue_date)
      setValue(names.TRAIN_DEPART_DATE, channel.train_depart_date)
      setValue(names.TRAIN_ARRIVE_DATE, channel.train_arrive_date)
      setValue(names.STORE_ARRIVE_DATE, channel.store_arrive_date)
    }
  }, [deliveryChannel, names, setValue])

  return (
    <FormLayout className="shadow-none" onFinish={onSubmit}>
      <GInputs.Text name="name" label="Наименование" control={control} />
      <div className="grid grid-cols-3">
        <GInputs.Number min={0} max={1000} name="eta" label={labels.ETA} control={control} />
        <GInputs.Number
          min={0}
          max={1000}
          name={names.DATE_DO}
          label={labels.DATE_DO}
          control={control}
        />
        <GInputs.Number
          min={0}
          max={1000}
          name={names.DECLARATION_ISSUE_DATE}
          label={labels.DECLARATION_ISSUE_DATE}
          control={control}
        />
        <GInputs.Number
          min={0}
          max={1000}
          name={names.TRAIN_DEPART_DATE}
          label={labels.TRAIN_DEPART_DATE}
          control={control}
        />
        <GInputs.Number
          min={0}
          max={1000}
          name={names.TRAIN_ARRIVE_DATE}
          label={labels.TRAIN_ARRIVE_DATE}
          control={control}
        />
        <GInputs.Number
          min={0}
          max={1000}
          name={names.STORE_ARRIVE_DATE}
          label={labels.STORE_ARRIVE_DATE}
          control={control}
        />
      </div>
      <GButton text="Подтвердить" />
      <DevTool control={control} />
    </FormLayout>
  )
}

export default DeliveryChannelForm
