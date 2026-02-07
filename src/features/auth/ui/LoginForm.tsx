import React, { useEffect } from 'react';
import { Input, Form, Button, Typography } from 'antd';
import { notification } from 'antd';
import { useLogin } from '../model/useLogin';

export const LoginForm = () => {
  const { mutate, isPending, error } = useLogin();

  useEffect(() => {
    if (error instanceof Error) {
      notification.error({ message: error.message });
    }
  }, [error]);

  const onFinish = (values: { login: string; password: string }) => {
    mutate(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Typography.Title level={5} style={{ marginBottom: 24 }}>
        Авторизация
      </Typography.Title>
      <Form.Item
        name="login"
        style={{ marginBottom: 16 }}
        rules={[{ required: true, message: 'Введите логин' }]}
      >
        <Input placeholder="Логин" />
      </Form.Item>

      <Form.Item
        style={{ marginBottom: 16 }}
        name="password"
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        <Input.Password placeholder="Пароль" />
      </Form.Item>

      <Form.Item style={{ textAlign: 'right' }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={isPending}
          disabled={isPending}
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
