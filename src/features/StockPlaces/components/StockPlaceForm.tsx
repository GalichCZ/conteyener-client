import React, { FC, useEffect } from 'react'
import FormLayout from '@/components/Layout/FormLayout.tsx'
import { StockPlace } from '@/Types'
import { Control, UseFormSetValue } from 'react-hook-form'
import GInputs from '@/components/GInput/GInputs.ts'
import GButton from '@/components/GInput/components/GButton.tsx'

interface Props {
  stockPlace: StockPlace | null
  control: Control<StockPlace>
  setValue: UseFormSetValue<StockPlace>
  onSubmit: () => void
}

const StockPlaceForm: FC<Props> = ({ onSubmit, stockPlace, control, setValue }) => {
  useEffect(() => {
    if (stockPlace) {
      setValue('name', stockPlace.name)
      setValue('address', stockPlace.address)
      setValue('contact', stockPlace.contact)
      setValue('note', stockPlace.note)
    }
  }, [stockPlace])

  return (
    <FormLayout className="shadow-none" onFinish={onSubmit}>
      <GInputs.Text name="name" label="Наименование" control={control} />
      <GInputs.Text name="address" label="Адрес" control={control} />
      <GInputs.Text name="contact" label="Контакт" control={control} />
      <GInputs.Area name="note" label="Пометка" control={control} />
      <GButton text="Подтвердить" />
    </FormLayout>
  )
}

export default StockPlaceForm
