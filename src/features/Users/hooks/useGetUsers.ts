import { User } from '@/Types'
import { getUsers } from '../Api/getUsers.ts'
import { useGetDataFromServer } from '@/hooks/useGetDataFromServer.ts'

export const useGetUsers = () => {
  const {
    data: users,
    error,
    setError,
    isLoading,
  } = useGetDataFromServer<User[]>({ callGetData: getUsers })

  return { users, error, isLoading, setError }
}
