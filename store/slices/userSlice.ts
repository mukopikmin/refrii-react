import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { User } from '../../models/user'
import { fetchBoxes } from '../effects/boxEffect'
import { fetchUsers } from '../effects/userEffect'

export type UserState = {
  users: User[]
}

const usersAdapter = createEntityAdapter<User>()

export const initialState = usersAdapter.getInitialState()

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) =>
        usersAdapter.setAll(state, action.payload.users)
      )
      .addCase(fetchBoxes.fulfilled, (state, action) =>
        usersAdapter.upsertMany(state, action.payload.users)
      )
  },
})

export default userSlice
