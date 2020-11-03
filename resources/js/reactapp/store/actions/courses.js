import { dataProvider } from "../api";
import { LOAD_COURSES } from "../actionTypes";

export const loadCourses = courses => ({
  type: LOAD_COURSES,
  courses
});

export const CreateCourse = (params) => {
  return dispatch => {
    return dataProvider("CREATE", "courses/create", params)
  };
};

export const UpdateCourse = (params) => {
  return dispatch => {
    return dataProvider("UPDATE", "courses/update", params)
  };
};

export const DeleteCourse = (params) => {
  return dispatch => {
    return dataProvider("DELETE_MANY", "courses/delete", params)
  };
};

export const fetchCourses = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return dispatch => {
    return dataProvider("GET_LIST", "courses", params)
  };
};


export const fetchOneCourse = (params) => {
  return dispatch => {
    return dataProvider("GET_ONE", "courses", params)
  };
};

