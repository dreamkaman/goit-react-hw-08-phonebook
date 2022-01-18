import axios from 'axios';

const BASE_URL = 'https://61e5892ac14c7a0017124d04.mockapi.io/contacts/contacts/';

const getContacts = () =>
  axios({
    method: 'get',
    url: BASE_URL,
  });

const addContact = ({ name, phone }) => {
  // console.log(phone);

  return axios({
    method: 'post',
    url: BASE_URL,
    data: {
      name,
      phone,
    },
  });
};

const deleteContact = id =>
  axios({
    method: 'delete',
    url: `${BASE_URL}${id}`,
  });

export const mockapi = {
  getContacts,
  addContact,
  deleteContact,
};
