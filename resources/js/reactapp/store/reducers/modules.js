import { LOAD_MODULES } from "../actionTypes";

export const modules = (state = null, action) => {
  switch (action.type) {
    case LOAD_MODULES:
      return [...action.modules];
    default:
      return state;
  }
};
