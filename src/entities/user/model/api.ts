import { mock } from '../../../shared/api/mock';
import { User } from '../../user/model/types';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await mock.get<User[]>('/users');
  return data;
};
