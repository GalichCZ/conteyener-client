import { DeliveryChannel, SelectOption, StockPlace, Store } from '@/Types'

export const prepareValuesAndNames = (array: Store[] | StockPlace[] | DeliveryChannel[]) => {
  const values: SelectOption[] = []

  array.forEach((item) => {
    values.push({ key: item._id, value: item.name })
  })

  return values
}
