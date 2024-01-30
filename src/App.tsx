import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout/Layout.tsx'
import LoginPage from '@/pages/LoginPage.tsx'
import SignUpPage from '@/pages/SignUpPage.tsx'
import MainPage from '@/pages/MainPage.tsx'
import NotFoundPage from '@/pages/NotFoundPage.tsx'
import Header from '@/features/Header/Header.tsx'
import { createPortal } from 'react-dom'
import { Toaster } from 'react-hot-toast'
import { RoutesEnum } from '@/enums/routesEnum.ts'
import TablePage from '@/pages/TablePage.tsx'
import UsersPage from '@/pages/UsersPage.tsx'
import StoresPage from '@/pages/StoresPage.tsx'
import DeliveryChannelPage from '@/pages/DeliveryChannelPage.tsx'
import StockPlacesPage from '@/pages/StockPlacesPage.tsx'
import { useGetMe } from '@/hooks/useGetMe.ts'
import { handleError } from '@/utils/handleError.ts'
import HiddenTablePage from '@/pages/HiddenTablePage.tsx'

function App() {
  const { callGetMe, error } = useGetMe()
  useEffect(() => {
    callGetMe()
  }, [callGetMe])

  useEffect(() => {
    if (error) {
      handleError(error)
    }
  }, [error])

  return (
    <>
      {createPortal(<Toaster />, document.body)}
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          {/*Public routes*/}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/main" element={<MainPage />} />

          {/*Private routes*/}
          <Route path={RoutesEnum.TABLE} element={<TablePage />} />
          <Route path={RoutesEnum.USERS} element={<UsersPage />} />
          <Route path={RoutesEnum.STORES} element={<StoresPage />} />
          <Route path={RoutesEnum.DELIVERY_CHANNELS} element={<DeliveryChannelPage />} />
          <Route path={RoutesEnum.CONTAINER_STOCK} element={<StockPlacesPage />} />
          <Route path={RoutesEnum.TABLE_HIDDEN} element={<HiddenTablePage />} />
          {/*Catch all*/}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
