import { dataProvider } from "../api";
import { LOAD_MODULES } from "../actionTypes";
import {handleTokenErrors} from '../api/errorHandlers'

export const loadModules = modules => ({
  type: LOAD_MODULES,
  modules
});

export const CreateModule = (params) => {
  return () => {
    return dataProvider("CREATE", "modules/create", params)
  };
};


export const UpdateModule = (params) => {
  return () => {
    return dataProvider("UPDATE", "modules/update", params)
  };
};

export const DeleteModule = (params) => {
  return () => {
    return dataProvider("DELETE", "modules/delete", params)
  };
};

export const fetchModules = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return dispatch => {
    return dataProvider("GET_LIST", "modules", params).then((res)=>{
      dispatch(loadModules(res))
    }).catch(err => {
      handleTokenErrors(err)
    });
  };
};


export const fetchOneModule = (params) => {
  return () => {
    return dataProvider("GET_ONE", "modules", params)
  };
};

