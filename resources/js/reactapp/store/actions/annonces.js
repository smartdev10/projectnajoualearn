import { dataProvider } from "../api";
import { LOAD_ANNONCES } from "../actionTypes";
import { Notyf } from 'notyf';
const notyf = new Notyf();


export const loadAnnonces = annonces => ({
  type: LOAD_ANNONCES,
  annonces
});


export const UpdateAnnonce = (params) => {
  return () => {
    return dataProvider("UPDATE", "annonces/update", params)
  };
};

export const CreateAnnonces = (params) => {
  return () => {
    return dataProvider("CREATE", "annonces/create", params)
  };
};

export const DeleteAnnonces = (params) => {
  return () => {
    return dataProvider("DELETE", "annonces/delete", params)
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
    }).catch(() => {
      notyf.error('Error while Fetching');
    });
  };
};


export const fetchOneSeed = (params) => {
  return () => {
    return dataProvider("GET_ONE", "annonces", params)
  };
};

