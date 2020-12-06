import { dataProvider } from "../api";
import { LOAD_MESSAGES } from "../actionTypes";
import { Notyf } from 'notyf';
const notyf = new Notyf();

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const CreateMessage = (params) => {
  return () => {
    return dataProvider("CREATE", "messages/create", params)
  };
};

export const DeleteMessage = (params) => {
  return () => {
    return dataProvider("DELETE", "messages/create", params)
  };
};


export const fetchMessages = (params = {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'name' , order: 'ASC' },
  filter: {},
}) => {
  return async dispatch => {
    try {
      const res = await dataProvider("GET_LIST", "messages", params);
      dispatch(loadMessages(res));
    } catch (err) {
      notyf.error('Error While fetching')
    }
  };
};


export const fetchOneMessage = (params) => {
  return () => {
    return dataProvider("GET_ONE", "messages", params)
  };
};

