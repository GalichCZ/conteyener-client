import React, { FC, useEffect } from 'react'
import FormLayout from '@/components/Layout/FormLayout.tsx'
import { Control, UseFormSetValue } from 'react-hook-form'
import { Store } from '@/Types'
import GInputs from '@/components/GInput/GInputs.ts'
import GButton from '@/components/GInput/components/GButton.tsx'

interface Props {
  control: Control<Store>
  onSubmit: () => void
  store: Store | null
  setValue: UseFormSetValue<Store>
}

const StoreForm: FC<Props> = ({ onSubmit, setValue, control, store }) => {
  useEffect(() => {
    if (store) {
      const { address, note, name, contact, receiver } = store
      setValue('address', address)
      setValue('note', note)
      setValue('name', name)
      setValue('contact', contact)
      setValue('receiver', receiver)
    }
  }, [store])

  return (
    <FormLayout className="shadow-none" onFinish={onSubmit}>
      <GInputs.Text name="address" label="Адрес:" control={control} />
      <GInputs.Text name="name" label="Название:" control={control} />
      <GInputs.Text name="receiver" label="Получатель:" control={control} />
      <GInputs.Text name="contact" label="Контакт:" control={control} />
      <GInputs.Area name="note" label="Заметка:" control={control} />
      <GButton text="Сохранить" />
    </FormLayout>
  )
}

export default StoreForm
