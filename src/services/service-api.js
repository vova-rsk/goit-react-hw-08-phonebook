import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = async userData => {
  return await axios.post('users/signup', userData);
};

const getCurrentUser = async () => {
  return await axios.get('/users/current');
};

const loginUser = async userAuthData => {
  return await axios.post('/users/login', userAuthData);
};

const logoutUser = async () => {
  return await axios.post('/users/logout');
};

const getContacts = async () => {
  return await axios.get('/contacts');
};

const postContact = async contactData => {
  return await axios.post('/contacts', contactData);
};

const deleteContact = async contactId => {
  return await axios.delete(`/contacts/${contactId}`);
};

const patchContact = async (contactId, contactData) => {
  return await axios.patch(`/contacts/${contactId}`, contactData);
};

const api = {
  user: {
    registerUser,
    getCurrentUser,
    loginUser,
    logoutUser,
  },
  contacts: {
    getContacts,
    postContact,
    deleteContact,
    patchContact,
  },
  token,
};

export default api;
