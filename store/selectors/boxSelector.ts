import { useSelector } from 'react-redux'
import { StoreState } from '../createStore'
import { boxesAdapter } from '../slices/boxSlice'

export const boxSelector = boxesAdapter.getSelectors(
  (state: StoreState) => state.box
)

export const useBoxesState = () => useSelector(boxSelector.selectAll)

export const useBoxState = (id: number) =>
  useSelector((state: StoreState) => boxSelector.selectById(state, id))

export const useBoxLoadingState = () =>
  useSelector((state: StoreState) => state.box.loading)
