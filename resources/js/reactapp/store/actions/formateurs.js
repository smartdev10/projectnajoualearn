import { dataProvider } from "../api";
import { LOAD_FORMATEURS } from "../actionTypes";
import { Notyf } from 'notyf';
const notyf = new Notyf();


export const loadFormateurs = formateurs => ({
    type: LOAD_FORMATEURS,
    formateurs
});

export const CreateFormateur = (params) => {
  return () => {
    return dataProvider("CREATE", "formateurs", params)
  };
};

export const UpdateFormateur = (params) => {
  return () => {
    return dataProvider("UPDATE", "formateurs", params)
  };
};


export const DeleteFormateur = (params) => {
  return () => {
    return dataProvider("DELETE", "formateurs", params)
  };
};

export const fetchFormateurs = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return async dispatch => {
    try {
      const res = await dataProvider("GET_LIST", "formateurs", params);
      dispatch(loadFormateurs(res));
    } catch (e) {
      notyf.error('Error While fetching');
    }
  };
};


export const fetchOneFormateur = (params) => {
  return () => {
    return dataProvider("GET_ONE", "formateurs", params)
  };
};