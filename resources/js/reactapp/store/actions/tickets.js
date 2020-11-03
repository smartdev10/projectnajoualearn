import { dataProvider } from "../api";
import { LOAD_TICKETS } from "../actionTypes";
import {handleTokenErrors} from '../api/errorHandlers'


export const loadTickets = tickets => ({
  type: LOAD_TICKETS,
  tickets
});

export const CreateTicket = (params) => {
  return dispatch => {
    return dataProvider("CREATE", "tickets/create", params)
  };
};


export const DeleteTicket = (params) => {
  return dispatch => {
    return dataProvider("DELETE_MANY", "tickets/delete", params)
  };
};

export const fetchTickets = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return dispatch => {
    return dataProvider("GET_LIST", "tickets", params).then((res)=>{
      dispatch(loadTickets(res))
    }).catch(err => {
      handleTokenErrors(err)
    });
  };
};


export const fetchOneTicket = (params) => {
  return dispatch => {
    return dataProvider("GET_ONE", "tickets", params)
  };
};

