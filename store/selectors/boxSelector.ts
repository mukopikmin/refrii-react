import { useSelector } from "react-redux";
import { StoreState } from "../createStore";
import { boxesAdapter, BoxState } from "../slices/boxSlice";

export const boxSelector = boxesAdapter.getSelectors(
  (state: StoreState) => state.box
);

export const useBoxState = () => {
  return useSelector(boxSelector.selectAll);
};
