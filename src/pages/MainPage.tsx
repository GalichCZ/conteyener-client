import React from 'react'
import SectionLayout from '@/components/Layout/SectionLayout.tsx'
import { useGetRoleType } from '@/hooks/useGetRoleType.ts'

const MainPage = () => {
  const roleTypes = useGetRoleType()

  return (
    <SectionLayout items="center" className="flex-col" justify="center">
      <h1 className="text-2xl">Добро Пожаловать</h1>
      <br />
      {roleTypes?.isNewOne && (
        <b className="text-xl">Обратитесь к Администратору для получения доступа</b>
      )}
    </SectionLayout>
  )
}

export default MainPage
