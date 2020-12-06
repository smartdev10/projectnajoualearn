import { LOAD_MESSAGES  } from "../actionTypes";

export const messages = (state = null, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return [...action.messages];
    default:
      return state;
  }
};

