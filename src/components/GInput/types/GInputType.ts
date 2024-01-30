import { Control, FieldValues, Path } from 'react-hook-form'

export interface GInputType<T extends FieldValues> {
  className?: string
  classNameWrap?: string
  placeholder?: string
  //TODO: FIX ANY
  name: Path<T> | any
  label: string
  type?: string
  control: Control<T>
}
