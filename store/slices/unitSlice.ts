import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Unit } from '../../models/unit'
import { fetchFood, fetchFoodsByBox } from '../effects/foodEffect'

export const unitsAdapter = createEntityAdapter<Unit>({
  selectId: (unit) => unit.id,
})

export const initialState = unitsAdapter.getInitialState({
  loading: false,
})

const unitSlice = createSlice({
  name: 'Unit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodsByBox.fulfilled, (state, { payload }) => {
        unitsAdapter.upsertMany(state, payload.unit)
      })
      .addCase(fetchFood.fulfilled, (state, { payload }) => {
        unitsAdapter.upsertMany(state, payload.unit)
      })
  },
})

export default unitSlice
