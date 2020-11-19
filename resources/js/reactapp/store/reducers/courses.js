import { LOAD_COURSES } from "../actionTypes";

export const courses = (state = null , action) => {
    switch(action.type){
        case LOAD_COURSES :
          return [...action.courses];
        default :
         return state; 
    }
}
