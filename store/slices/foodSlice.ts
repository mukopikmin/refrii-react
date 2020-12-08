import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Food } from '../../models/food'
import { fetchFood, fetchFoodsByBox } from '../effects/foodEffect'

export const foodsAdapter = createEntityAdapter<Food>({
  selectId: (food) => food.id,
})

export const initialState = foodsAdapter.getInitialState({
  loading: false,
})

const foodSlice = createSlice({
  name: 'Food',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodsByBox.pending, (state, _) => {
        state.loading = true
      })
      .addCase(fetchFoodsByBox.fulfilled, (state, { payload }) => {
        foodsAdapter.upsertMany(state, payload.foods)
        state.loading = false
      })
      .addCase(fetchFoodsByBox.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
      .addCase(fetchFood.pending, (state, _) => {
        state.loading = true
      })
      .addCase(fetchFood.fulfilled, (state, { payload }) => {
        foodsAdapter.upsertMany(state, payload.foods)
      })
      .addCase(fetchFood.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
  },
})

export default foodSlice
