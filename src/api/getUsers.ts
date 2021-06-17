import { APIFetch } from './APIFetch';
import { IUser } from '../models/User';

export const getUsers = (count: number, page: number) => APIFetch
  .get<{users: IUser[]}>('/users', { params: { count, page } })
  .then((result) => result.data);
