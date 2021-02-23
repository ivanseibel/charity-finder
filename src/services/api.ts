import axios, { AxiosInstance } from 'axios';

const baseURLs = {
  userservice: 'https://api.globalgiving.org/api/userservice/',
  orgservice: 'https://api.globalgiving.org/api/public/orgservice/',
  projectservice: 'https://api.globalgiving.org/api/public/projectservice/',
};

const getApi = (
  source: 'orgservice' | 'userservice' | 'projectservice',
): AxiosInstance => {
  return axios.create({ baseURL: baseURLs[source] });
};

export { getApi };
