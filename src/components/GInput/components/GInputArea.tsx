import React from 'react'
import { FormItem } from 'react-hook-form-antd'
import { GInputType } from '@/components/GInput/types/GInputType.ts'
import { Controller, FieldValues } from 'react-hook-form'
import { Input } from 'antd'

function GInputArea<T extends FieldValues>({
  name,
  label,
  placeholder,
  className,
  classNameWrap,
  control,
}: GInputType<T>) {
  return (
    <FormItem control={control} name={name} className={classNameWrap} label={label}>
      <Controller
        control={control}
        render={({ field }) => (
          <Input.TextArea className={className} placeholder={placeholder} {...field} />
        )}
        name={name}
      />
    </FormItem>
  )
}

export default GInputArea
