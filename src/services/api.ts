import axios, { AxiosInstance } from 'axios';

const baseURLs = {
  userservice: 'https://api.globalgiving.org/api/userservice/',
  orgservice: 'https://api.globalgiving.org/api/public/orgservice/',
};

const getApi = (source: 'orgservice' | 'userservice'): AxiosInstance => {
  return axios.create({ baseURL: baseURLs[source] });
};

export { getApi };
