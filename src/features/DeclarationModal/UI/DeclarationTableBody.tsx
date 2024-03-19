import React, { FC } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { Declaration } from '@/Types'
import { formatDate } from '@/utils/convertDate.ts'
import Cell from '@/components/UI/Cell.tsx'

interface Props {
  declarations: Declaration[] | null
}

const DeclarationTableBody: FC<Props> = ({ declarations }) => {
  if (!declarations || declarations.length === 0)
    return (
      <tr>
        <Cell colSpan={4}>Нет информации о декларации</Cell>
      </tr>
    )
  return declarations.map((declaration) => (
    <tr key={declaration._id}>
      <Cell>{formatDate(declaration.declaration_status_date)}</Cell>
      <Cell>{declaration.declaration_status}</Cell>
      <Cell>{declaration.declaration_status_message}</Cell>
      <Cell>{declaration.declaration_number}</Cell>
      <CloseOutlined />
    </tr>
  ))
}

export default DeclarationTableBody
