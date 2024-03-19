import React, { useEffect, useState } from 'react'
import HeadNames from '@/features/Store/UI/HeadNames.tsx'
import StoreInfo from '@/features/Store/components/StoreInfo.tsx'
import { useGetStores } from '@/hooks/useGetStores.ts'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { handleError } from '@/utils/handleError.ts'
import CreateStoreButton from '@/features/Store/components/CreateStoreButton.tsx'
import StoreCreateModal from '@/features/Store/components/StoreCreateModal.tsx'
import { createPortal } from 'react-dom'
import TechPageBlock from '@/components/UI/TechPageBlock.tsx'
import TechBlockFooter from '@/components/UI/TechBlockFooter.tsx'

const Stores = () => {
  const { stores, isLoading, error, setError } = useGetStores()
  const [open, setOpen] = useState(false)

  const noStores = !stores || (stores.length === 0 && !isLoading)

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error])

  return (
    <>
      {open && createPortal(<StoreCreateModal open={open} setOpen={setOpen} />, document.body)}
      <TechPageBlock>
        {isLoading && <FillingSkeleton />}
        <HeadNames />
        {noStores && <p className="text-center text-2xl">Нет складов</p>}
        {stores?.map((store) => <StoreInfo key={store._id} store={store} />)}
        <TechBlockFooter>
          <CreateStoreButton onClick={handleOpen} />
        </TechBlockFooter>
      </TechPageBlock>
    </>
  )
}

export default Stores
