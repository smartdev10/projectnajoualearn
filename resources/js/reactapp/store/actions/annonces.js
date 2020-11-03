import { dataProvider } from "../api";
import { LOAD_ANNONCES } from "../actionTypes";
import {handleTokenErrors} from '../api/errorHandlers'


export const loadAnnonces = annonces => ({
  type: LOAD_ANNONCES,
  annonces
});

export const CreateAnnonces = (params) => {
  return dispatch => {
    return dataProvider("CREATE", "annonces/create", params)
  };
};

export const DeleteAnnonces = (params) => {
  return dispatch => {
    return dataProvider("DELETE_MANY", "annonces/delete", params)
  };
};

export const fetchAnnonces = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return dispatch => {
    return dataProvider("GET_LIST", "annonces", params).then((res)=>{
      dispatch(loadAnnonces(res))
    }).catch(err => {
      handleTokenErrors(err)
    });
  };
};


export const fetchOneSeed = (params) => {
  return dispatch => {
    return dataProvider("GET_ONE", "annonces", params)
  };
};

