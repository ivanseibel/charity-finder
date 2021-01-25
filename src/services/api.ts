import axios from 'axios';

const api = axios.create({
  baseURL: 'http://35.226.206.75:3000',
});

export default api;
