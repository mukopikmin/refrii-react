import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Box } from '../../models/box'
import { User } from '../../models/user'
import { fetchBoxes } from '../effects/boxEffect'

export type BoxState = {
  boxes: Box[]
}

const boxesAdapter = createEntityAdapter<Box>({
  selectId: (box) => box.id,
})

export const initialState = boxesAdapter.getInitialState({
  loading: false,
})

const boxSlice = createSlice({
  name: 'Box',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoxes.fulfilled, (state, action) =>
        boxesAdapter.upsertMany(state, action.payload.boxes)
      )
      .addCase(fetchBoxes.rejected, (state, action) =>
        console.log(action.payload)
      )
  },
})

export default boxSlice
