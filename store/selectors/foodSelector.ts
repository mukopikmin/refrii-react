import { useSelector } from 'react-redux'
import { StoreState } from '../createStore'
import { foodsAdapter } from '../slices/foodSlice'

export const foodSelector = foodsAdapter.getSelectors(
  (state: StoreState) => state.food
)

export const useFoodsState = () => useSelector(foodSelector.selectAll)

export const useFoodByBoxState = (boxId: number) =>
  useSelector((state: StoreState) =>
    state.food.ids
      .map((id) => state.food.entities[id])
      .filter((food) => food && food.box.id === boxId)
  )

export const useFoodState = (id: number) =>
  useSelector((state: StoreState) => foodSelector.selectById(state, id))

export const useFoodLoadingState = () =>
  useSelector((state: StoreState) => state.food.loading)
