import axios from 'axios';

axios.defaults.baseURL = 'https://gateway.marvel.com/v1/public';
axios.defaults.params = {};
axios.defaults.params.apikey = process.env.REACT_APP_PUBLICKEY;

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
