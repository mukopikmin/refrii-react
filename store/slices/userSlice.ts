import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { User } from '../../models/user'
import { fetchBoxes } from '../effects/boxEffect'
import { fetchUsers } from '../effects/userEffect'

export type UserState = {
  users: User[]
  loading: boolean
}

export const usersAdapter = createEntityAdapter<User>()

export const initialState = usersAdapter.getInitialState({
  loading: false,
})

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, _) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        usersAdapter.setAll(state, action.payload.users)
      })
      .addCase(fetchBoxes.fulfilled, (state, action) =>
        usersAdapter.upsertMany(state, action.payload.users)
      )
  },
})

export default userSlice
