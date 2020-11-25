import { useSelector } from 'react-redux'
import { UserState } from '../slices/userSlice'

export const useUserState = () => {
  return useSelector((state: { user: UserState }) => state.user)
}
