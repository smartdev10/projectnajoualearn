import { dataProvider } from "../api";
import { LOAD_FORMATEURS } from "../actionTypes";
import {handleTokenErrors} from '../api/errorHandlers'


export const loadFormateurs = formateurs => ({
    type: LOAD_FORMATEURS,
    formateurs
});

export const CreateFormateur = (params) => {
  return dispatch => {
    return dataProvider("CREATE", "formateurs", params)
  };
};


export const DeleteFormateur = (params) => {
  return dispatch => {
    return dataProvider("DELETE", "formateurs", params)
  };
};

export const fetchFormateurs = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return dispatch => {
    return dataProvider("GET_LIST", "formateurs", params).then((res)=>{
      dispatch(loadFormateurs(res))
    }).catch(err => {
      handleTokenErrors(err)
    });
  };
};


export const fetchOneFormateur = (params) => {
  return dispatch => {
    return dataProvider("GET_ONE", "formateurs", params)
  };
};