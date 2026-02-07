import { useMutation } from '@tanstack/react-query';
import { loginRequest } from './login';

type LoginPayload = {
  login: string;
  password: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ login, password }: LoginPayload) =>
      loginRequest(login, password),

    onSuccess: (token) => {
      localStorage.setItem('token', token);
    },
  });
};
