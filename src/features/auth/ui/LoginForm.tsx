import React from 'react';
import { Input, Form, Button, Typography } from 'antd';

export const LoginForm = () => {
  return (
    <Form>
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
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
