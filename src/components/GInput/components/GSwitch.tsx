import React from 'react'
import { Switch } from 'antd'
import { GInputType } from '@/components/GInput/types/GInputType.ts'
import { Controller, FieldValues } from 'react-hook-form'
import { FormItem } from 'react-hook-form-antd'

function GSwitch<T extends FieldValues>({
  control,
  className,
  classNameWrap,
  name,
  label,
}: GInputType<T>) {
  return (
    <FormItem
      valuePropName="checked"
      label={label}
      control={control}
      name={name}
      className={classNameWrap}
    >
      <Controller
        render={({ field }) => <Switch id="g-switch" className={className} {...field} />}
        name={name}
        control={control}
      />
    </FormItem>
  )
}

export default GSwitch
