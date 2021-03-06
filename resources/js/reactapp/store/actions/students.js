import { dataProvider } from "../api/";
import { LOAD_STUDENTS } from "../actionTypes";
import { handleTokenErrors } from '../api/errorHandlers'


export const loadStudents = students => ({
    type: LOAD_STUDENTS,
    students
});

export const CreateStudent = (params) => {
  return () => {
    return dataProvider("CREATE", "students/create", params)
  };
};


export const UpdateStudent = (params) => {
  return () => {
    return dataProvider("UPDATE", "students", params)
  };
};


export const DeleteStudent = (params) => {
  return () => {
    return dataProvider("DELETE", "students/delete", params)
  };
};

export const fetchStudents = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return dispatch => {
    return dataProvider("GET_LIST", "students", params).then((res)=>{
      dispatch(loadStudents(res))
    }).catch(err => {
      handleTokenErrors(err)
    });
  };
};


export const fetchOneStudent = (params) => {
  return () => {
    return dataProvider("GET_ONE", "students", params)
  };
};