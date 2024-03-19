import { Products } from '@/Types'
import { getProducts } from '@/features/UploadProductCellModal/Api/getProducts.ts'
import { useGetDataFromServer } from '@/hooks/useGetDataFromServer.ts'

export const useGetProducts = (id: string, product_name: string) => {
  const {
    data: products,
    error,
    setError,
    isLoading,
  } = useGetDataFromServer<Products[]>({ callGetData: () => getProducts(id, product_name) })

  return { isLoading, products, error, setError }
}
