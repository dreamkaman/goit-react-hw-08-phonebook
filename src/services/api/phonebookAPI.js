import axios from 'axios';
// import { unstable_batchedUpdates } from 'react-dom';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const signupUser = ({ name, email, password }) =>
  axios({
    method: 'post',
    url: '/users/signup',
    data: {
      name,
      email,
      password,
    },
  });

const loginUser = ({ email, password }) =>
  axios({
    method: 'post',
    url: '/users/login',
    data: {
      email,
      password,
    },
  });

const logoutUser = () =>
  axios({
    method: 'post',
    url: '/users/logout',
  });

const getContacts = () =>
  axios({
    method: 'get',
    url: '/contacts',
  });

const addContact = ({ name, number }) =>
  axios({
    method: 'post',
    url: '/contacts',
    data: {
      name,
      number,
    },
  });

const deleteContact = id =>
  axios({
    method: 'delete',
    url: `/contacts/${id}`,
  });

const getCurrentUser = () =>
  axios({
    method: 'get',
    url: '/users/current',
  });

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const phonebookAPI = {
  signupUser,
  loginUser,
  logoutUser,
  getContacts,
  addContact,
  deleteContact,
  getCurrentUser,
};
