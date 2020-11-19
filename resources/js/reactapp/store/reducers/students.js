import { LOAD_STUDENTS } from "../actionTypes";

export const students = (state = null, action) => {
  switch (action.type) {
    case LOAD_STUDENTS:
      return [...action.students];
    default:
      return state;
  }
};


