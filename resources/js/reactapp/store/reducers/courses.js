import { LOAD_COURSES } from "../actionTypes";

export const courses = (state = [] , action) => {
    switch(action.type){
        case LOAD_COURSES :
          return [...action.courses];
        default :
         return state; 
    }
}
