import { LOAD_FORMATEURS } from "../actionTypes";

export const formateurs = (state = null, action) => {
  switch (action.type) {
    case LOAD_FORMATEURS:
      return [...action.formateurs];
    default:
      return state;
  }
};


