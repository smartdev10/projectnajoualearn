import { dataProvider } from "../api";
import { LOAD_COURSES } from "../actionTypes";
import { Notyf } from 'notyf';
const notyf = new Notyf();

export const loadCourses = courses => ({
  type: LOAD_COURSES,
  courses
});

export const CreateCourse = (params) => {
  return () => {
    return dataProvider("CREATE", "courses/create", params)
  };
};

export const UpdateCourse = (params) => {
  return () => {
    return dataProvider("UPDATE", "courses/update", params)
  };
};

export const DeleteCourse = (params) => {
  return () => {
    return dataProvider("DELETE", "courses/delete", params)
  };
};

export const fetchCourses = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return async (dispatch) => {
    try {
      const res = await dataProvider("GET_LIST", "courses", params)
      dispatch(loadCourses(res))
    } catch (error) {
     notyf.error('Error while Fetching');
    }
  };
};


export const fetchOneCourse = (params) => {
  return () => {
    return dataProvider("GET_ONE", "courses", params)
  };
};

