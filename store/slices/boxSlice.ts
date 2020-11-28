import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Box } from '../../models/box'
import { fetchBox, fetchBoxes } from '../effects/boxEffect'

export type BoxState = {
  boxes: Box[]
  loading: boolean
}

export const boxesAdapter = createEntityAdapter<Box>({
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
      .addCase(fetchBoxes.pending, (state, _) => {
        state.loading = true
      })
      .addCase(fetchBoxes.fulfilled, (state, action) => {
        boxesAdapter.upsertMany(state, action.payload.boxes)
        state.loading = false
      })
      .addCase(fetchBoxes.rejected, (state, action) => {
        state.loading = false
        console.log(action.payload)
      })
      .addCase(fetchBox.pending, (state, _) => {
        state.loading = true
      })
      .addCase(fetchBox.fulfilled, (state, action) => {
        boxesAdapter.upsertMany(state, action.payload.boxes)
        state.loading = false
      })
  },
})

export default boxSlice
