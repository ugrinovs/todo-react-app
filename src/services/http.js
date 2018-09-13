import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://localhost:1337',
  proxy: {
    host: '127.0.0.1',
    port: 1337
  }
});

request.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers.common = {
        ...config.headers.common,
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
      };
    }

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

window.testReq = request;
