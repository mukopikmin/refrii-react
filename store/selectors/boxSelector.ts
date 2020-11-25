import { useSelector } from 'react-redux'
import { BoxState } from '../slices/boxSlice'

export const useBoxState = () => {
  return useSelector((state: { box: BoxState }) => state.box)
}
