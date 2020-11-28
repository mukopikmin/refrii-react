import { useSelector } from 'react-redux'
import { StoreState } from '../createStore'
import { usersAdapter } from '../slices/userSlice'

export const userSelector = usersAdapter.getSelectors(
  (state: StoreState) => state.user
)

export const useUsersState = () =>
  useSelector((state: StoreState) => userSelector.selectAll(state))

export const useUserState = (id: number) =>
  useSelector((state: StoreState) => userSelector.selectById(state, id))
