import { LOAD_ANNONCES  } from "../actionTypes";

export const annonces = (state = null, action) => {
  switch (action.type) {
    case LOAD_ANNONCES:
      return [...action.annonces];
    default:
      return state;
  }
};

