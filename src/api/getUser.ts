import { APIFetch } from './APIFetch';
import { IUser } from '../models/User';

export const getUser = () => APIFetch
  .get<IUser>('/user')
  .then((result) => result.data);
