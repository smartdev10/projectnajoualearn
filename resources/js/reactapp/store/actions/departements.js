import { dataProvider } from "../api";
import { LOAD_DEPARTEMENT } from "../actionTypes";
import {handleTokenErrors} from '../api/errorHandlers'

export const loadDepartements = departements => ({
  type: LOAD_DEPARTEMENT,
  departements
});

export const CreateDepartement = (params) => {
  return () => {
    return dataProvider("CREATE", "departements/create", params)
  };
};


export const UpdateDepartement = (params) => {
  return () => {
    return dataProvider("UPDATE", "departements/update", params)
  };
};

export const DeleteDepartement = (params) => {
  return () => {
    return dataProvider("DELETE_MANY", "departements/delete", params)
  };
};

export const fetchDepartement = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return dispatch => {
    return dataProvider("GET_LIST", "departements", params).then((res)=>{
      dispatch(loadDepartements(res))
    }).catch(err => {
      handleTokenErrors(err)
    });
  };
};


export const fetchOneDepartement = (params) => {
  return () => {
    return dataProvider("GET_ONE", "departements", params)
  };
};

