import { LOAD_FORMATIONS } from "../actionTypes";

export const formations = (state = null, action) => {
  switch (action.type) {
    case LOAD_FORMATIONS:
      return [...action.formations];
    default:
      return state;
  }
};


