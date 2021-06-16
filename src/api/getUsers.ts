import { APIFetch } from './APIFetch';

export const getUsers = (count: number, page: number) => APIFetch
  .get(`/illustration?count=${count}&page=${page}`)
  .then((data) => console.log(data));
