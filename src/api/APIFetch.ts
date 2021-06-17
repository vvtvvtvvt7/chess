import axios from 'axios';

const BACKEND_URL = 'http://localhost:7000';
const REQUEST_TIMEOUT = 5000;

export const APIFetch = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});
