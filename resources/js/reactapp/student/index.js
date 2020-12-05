import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from './App'
import { configureStore } from "../store"
import { setCurrentUser } from "../store/actions/user_auth";
import axios from 'axios'
const store = configureStore();
import 'notyf/notyf.min.css';

const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
axios.post('/auth/me', {
   headers: {
     'X-CSRF-TOKEN': csrf_token,
     'Content-Type': 'application/json',
   }
}).then(({data}) => {
   store.dispatch(setCurrentUser(data.user))
}).catch(() =>{
  store.dispatch(setCurrentUser({}))
})

if (document.getElementById('root')) {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>, document.getElementById('root')
  );
}
