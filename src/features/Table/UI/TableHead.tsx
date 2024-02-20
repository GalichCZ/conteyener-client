import React, { useEffect, useState } from 'react'
import TableRow from '@/features/Table/UI/TableRow.tsx'
import { useAppSelector } from '@/hooks/hooksRedux.ts'
import { getColumns } from '@/features/Table/utils/getColumns.ts'
import TableCell from '@/features/Table/UI/Cell/TableCell.tsx'
import Filter from '@/features/Filters/Components/Filter.tsx'

const TableHead = () => {
  const user = useAppSelector((state) => state.authentication.user)
  const [columns, setColumns] = useState<string[]>([])
  const [columnsKeys, setColumnsKeys] = useState<string[]>([])
  const { filteredKeys } = useAppSelector((state) => state.filtersMap)

  useEffect(() => {
    if (user) {
      const { columnsNames, columnsKeys } = getColumns(user.role)
      setColumns(columnsNames)
      setColumnsKeys(columnsKeys)
    }
  }, [user])

  return (
    <thead className="h-10 sticky top-0 z-10 bg-gray-300">
      <TableRow className="">
        {columns.map((column, key) => (
          <TableCell.Cell className={`min-w-[100px] ${key === 0 ? 'min-w-[50px]' : ''}`} key={key}>
            {column}
            <Filter
              isFiltered={filteredKeys.includes(columnsKeys[key].toLowerCase())}
              key_name={columnsKeys[key]}
            />
          </TableCell.Cell>
        ))}
      </TableRow>
    </thead>
  )
}

export default TableHead
