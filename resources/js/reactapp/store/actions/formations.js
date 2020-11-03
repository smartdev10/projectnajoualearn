import { LOAD_FORMATIONS } from "../actionTypes";
import { dataProvider } from "../api";


export const loadFormations = formations => ({
  type: LOAD_FORMATIONS,
  formations
});

export const CreateFormation = (params) => {
  return dispatch => {
    return dataProvider("CREATE", "formations/create", params)
  };
};

export const UpdateFormation = (params) => {
  return dispatch => {
    return dataProvider("UPDATE", "formations/update", params)
  };
};

export const DeleteFormation = (params) => {
  return dispatch => {
    return dataProvider("DELETE_MANY", "formations/delete", params)
  };
};


export const fetchFormations = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return async dispatch => {
    const res = await dataProvider("GET_LIST", "formations", params)
    return dispatch(loadFormations(res[0]))
  }
};


export const fetchOneFormation = (params) => {
  return dispatch => {
    return dataProvider("GET_ONE", "formations", params)
  };
};

