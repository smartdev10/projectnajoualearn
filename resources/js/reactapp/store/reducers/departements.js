import { LOAD_DEPARTEMENT } from "../actionTypes";

export const departements = (state = null, action) => {
  switch (action.type) {
    case LOAD_DEPARTEMENT:
      return [...action.departements];
    default:
      return state;
  }
};


