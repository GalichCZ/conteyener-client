import { Input } from 'antd'
import React, { ChangeEvent } from 'react'
import { GInputType } from '../types/GInputType.ts'
import { FormItem } from 'react-hook-form-antd'
import { Controller, FieldValues } from 'react-hook-form'

interface Props<T extends FieldValues> extends GInputType<T> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function GInputText<T extends FieldValues>({
  name,
  label,
  placeholder,
  className,
  classNameWrap,
  control,
  type,
}: Props<T>) {
  return (
    <FormItem name={name} control={control} label={label} className={classNameWrap}>
      <Controller
        control={control}
        render={({ field }) => (
          <Input type={type} className={className} placeholder={placeholder} {...field} />
        )}
        name={name}
      />
    </FormItem>
  )
}

export default GInputText
