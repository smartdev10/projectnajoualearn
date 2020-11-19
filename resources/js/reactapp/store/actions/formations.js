import { LOAD_FORMATIONS } from "../actionTypes";
import { dataProvider } from "../api";
import { Notyf } from 'notyf';
const notyf = new Notyf();

export const loadFormations = formations => ({
  type: LOAD_FORMATIONS,
  formations
});

export const CreateFormation = (params) => {
  return () => {
    return dataProvider("CREATE", "formations/create", params)
  };
};

export const UpdateFormation = (params) => {
  return () => {
    return dataProvider("UPDATE", "formations/update", params)
  };
};

export const DeleteFormation = (params) => {
  return () => {
    return dataProvider("DELETE_MANY", "formations/delete", params)
  };
};


export const fetchFormations = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return async dispatch => {
   try {
    const res = await dataProvider("GET_LIST", "formations", params)
    dispatch(loadFormations(res))
   } catch (error) {
    notyf.error('Error while Fetching');
   }
  }
};


export const fetchOneFormation = (params) => {
  return () => {
    return dataProvider("GET_ONE", "formations", params)
  };
};

