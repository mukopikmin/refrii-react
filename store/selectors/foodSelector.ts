import { useSelector } from 'react-redux'
import { StoreState } from '../createStore'
import { foodsAdapter } from '../slices/foodSlice'
import { denormalize, schema } from 'normalizr'
import { Food } from '../../models/food'

const boxEntity = new schema.Entity('boxes')
const userEntity = new schema.Entity('users')
const unitEntity = new schema.Entity('units')
const foodEntity = new schema.Entity<Food>('foods', {
  createdUser: userEntity,
  updatedUser: userEntity,
  unit: unitEntity,
  box: boxEntity,
})

const denormalizeFoods = (state: StoreState): Food[] => {
  return denormalize(
    { foods: state.food.ids },
    { foods: [foodEntity] },
    {
      foods: state.food.entities,
      units: state.unit.entities,
      boxes: state.box.entities,
      users: state.user.entities,
    }
  ).foods
}

export const foodSelector = foodsAdapter.getSelectors(
  (state: StoreState) => state.food
)

export const useFoodsState = () => useSelector(foodSelector.selectAll)

export const useFoodByBoxState = (boxId: number) =>
  useSelector((state: StoreState) =>
    denormalizeFoods(state).filter((food: Food) => food.box.id === boxId)
  )

export const useFoodState = (id: number) =>
  useSelector((state: StoreState) => foodSelector.selectById(state, id))

export const useFoodLoadingState = () =>
  useSelector((state: StoreState) => state.food.loading)
