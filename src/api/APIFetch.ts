import axios from 'axios';

const BACKEND_URL = 'http://95.216.159.188:7003/api';
const REQUEST_TIMEOUT = 5000;

export const APIFetch = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
  withCredentials: true,
});
