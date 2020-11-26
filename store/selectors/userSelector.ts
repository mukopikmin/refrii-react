import { useSelector } from "react-redux";
import { StoreState } from "../createStore";
import { usersAdapter, UserState } from "../slices/userSlice";

export const userSelctor = usersAdapter.getSelectors(
  (state: StoreState) => state.user
);

export const useUserState = () => {
  return useSelector(userSelctor.selectAll);
};
