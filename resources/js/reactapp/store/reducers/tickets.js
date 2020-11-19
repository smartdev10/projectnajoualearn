import { LOAD_TICKETS  } from "../actionTypes";

export const tickets = (state = null, action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return [...action.tickets];
    default:
      return state;
  }
};

