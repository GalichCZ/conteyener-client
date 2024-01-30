import React from 'react'
import SectionLayout from '@/components/Layout/SectionLayout.tsx'
import Table from '@/features/Table/Components/Table.tsx'
import { useNavigate } from 'react-router-dom'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'
import { RoutesEnum } from '@/enums/routesEnum.ts'

const HiddenTablePage = () => {
  const navigate = useNavigate()
  const userRole = useGetRoleType()
  if (userRole?.isNewOne) navigate(RoutesEnum.MAIN)

  return (
    <SectionLayout justify="center" items="center">
      <Table hidden={true} />
    </SectionLayout>
  )
}

export default HiddenTablePage
