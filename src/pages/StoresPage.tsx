import React from 'react'
import SectionLayout from '@/components/Layout/SectionLayout.tsx'
import Stores from '@/features/Store/components/Stores.tsx'
import { useNavigate } from 'react-router-dom'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'
import { RoutesEnum } from '@/enums/routesEnum.ts'

const StoresPage = () => {
  const navigate = useNavigate()
  const userRole = useGetRoleType()
  if (userRole?.isNewOne) navigate(RoutesEnum.MAIN)

  return (
    <SectionLayout items="center" justify="center">
      <Stores />
    </SectionLayout>
  )
}

export default StoresPage
