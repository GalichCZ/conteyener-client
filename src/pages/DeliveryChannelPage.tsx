import React from 'react'
import DeliveryChannels from '@/features/DeliveryChannel/components/DeliveryChannels.tsx'
import SectionLayout from '@/components/Layout/SectionLayout.tsx'
import { useNavigate } from 'react-router-dom'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'
import { RoutesEnum } from '@/enums/routesEnum.ts'

const DeliveryChannelPage = () => {
  const navigate = useNavigate()
  const userRole = useGetRoleType()
  if (userRole?.isNewOne) navigate(RoutesEnum.MAIN)

  return (
    <SectionLayout justify="center" items="start">
      <DeliveryChannels />
    </SectionLayout>
  )
}

export default DeliveryChannelPage
