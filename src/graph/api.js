import axios from 'axios';

const apiRequest = (method, url, options = {}) => {
  const config = { method, url };

  if (options.body) {
    config.data = options.body;
  }
  config.headers = { 'Content-Type': 'application/json' };
  return axios(config);
};

const getGraphData = (url, params = {}) => apiRequest('get', url, params);

export default getGraphData;
