import { Declaration } from '@/Types'
import { getStatuses } from '@/features/DeclarationModal/Api/getStatuses.ts'
import { useGetDataFromServer } from '@/hooks/useGetDataFromServer.ts'

export const useGetDeclarationStatuses = (declaration_number: string) => {
  const {
    data: statuses,
    isLoading,
    error,
    setError,
  } = useGetDataFromServer<Declaration[]>({ callGetData: () => getStatuses(declaration_number) })

  return { statuses, isLoading, error, setError }
}
