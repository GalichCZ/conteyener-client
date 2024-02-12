import React, { FC } from 'react'
import FormLayout from '@/components/Layout/FormLayout.tsx'
import GInputs from '@/components/GInput/GInputs.ts'
import { Control } from 'react-hook-form'
import { ProductLabels } from '@/features/UploadProductCellModal/enums/ProductLabels.ts'
import { ProductNames } from '@/features/UploadProductCellModal/enums/ProductNames.ts'
import GButton from '@/components/GInput/components/GButton.tsx'
import { PostProduct } from '@/features/UploadProductCellModal/Types/PostProduct.ts'

interface Props {
  onSubmit: () => void
  control: Control<PostProduct>
}

const HandMadeWriteForm: FC<Props> = ({ onSubmit, control }) => {
  return (
    <FormLayout className="grid grid-cols-5 w-full gap-x-3" onFinish={onSubmit}>
      <GInputs.Text name={ProductNames.hs_code} label={ProductLabels.hs_code} control={control} />
      <GInputs.Text
        name={ProductNames.article_ved}
        label={ProductLabels.article_ved}
        control={control}
      />
      <GInputs.Text
        name={ProductNames.article_erp}
        label={ProductLabels.article_erp}
        control={control}
      />
      <GInputs.Text
        name={ProductNames.trade_mark}
        label={ProductLabels.trade_mark}
        control={control}
      />
      <GInputs.Text
        name={ProductNames.product_name}
        label={ProductLabels.product_name}
        control={control}
      />
      <GInputs.Text name={ProductNames.model} label={ProductLabels.model} control={control} />
      <GInputs.Text
        name={ProductNames.modification}
        label={ProductLabels.modification}
        control={control}
      />
      <GInputs.Number
        min={0}
        max={Number.MAX_SAFE_INTEGER}
        name={ProductNames.quantity_pieces}
        label={ProductLabels.quantity_pieces}
        control={control}
      />
      <GInputs.Number
        min={0}
        max={Number.MAX_SAFE_INTEGER}
        name={ProductNames.quantity_places}
        label={ProductLabels.quantity_places}
        control={control}
      />
      <GInputs.Number
        min={0}
        max={Number.MAX_SAFE_INTEGER}
        name={ProductNames.piece_price}
        label={ProductLabels.piece_price}
        control={control}
      />
      <GInputs.Number
        min={0}
        max={Number.MAX_SAFE_INTEGER}
        name={ProductNames.total_price}
        label={ProductLabels.total_price}
        control={control}
      />
      <GInputs.Number
        min={0}
        max={Number.MAX_SAFE_INTEGER}
        name={ProductNames.weight_net}
        label={ProductLabels.weight_net}
        control={control}
      />
      <GInputs.Number
        min={0}
        max={Number.MAX_SAFE_INTEGER}
        name={ProductNames.weight_gross}
        label={ProductLabels.weight_gross}
        control={control}
      />
      <GInputs.Number
        min={0}
        max={Number.MAX_SAFE_INTEGER}
        name={ProductNames.cbm}
        label={ProductLabels.cbm}
        control={control}
      />
      <GInputs.Text
        name={ProductNames.manufacturer}
        label={ProductLabels.manufacturer}
        control={control}
      />
      <GButton text={'Создать'} />
    </FormLayout>
  )
}

export default HandMadeWriteForm
