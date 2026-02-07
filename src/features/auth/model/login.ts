import { AxiosResponse, AxiosHeaders } from 'axios';

type LoginResponse = {
  token: string;
};

export const loginRequest = async (
  login: string,
  password: string,
): Promise<string> => {
  // имитация задержки
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (login !== 'admin' || password !== 'admin') {
    throw new Error('Неверный логин или пароль');
  }

  // имитация axios response
  const response: AxiosResponse<LoginResponse> = {
    data: { token: 'fake-token' },
    status: 200,
    statusText: 'OK',
    headers: new AxiosHeaders(),
    config: {
      headers: new AxiosHeaders(),
    },
  };

  return response.data.token;
};
