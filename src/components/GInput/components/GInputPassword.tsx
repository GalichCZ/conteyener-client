import { Input } from 'antd'
import React, { ChangeEvent } from 'react'
import { GInputType } from '../types/GInputType.ts'
import { FormItem } from 'react-hook-form-antd'
import { FieldValues } from 'react-hook-form'

interface Props<T extends FieldValues> extends GInputType<T> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function GInputText<T extends FieldValues>({
  onChange,
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
      <Input.Password
        type={type}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormItem>
  )
}

export default GInputText
