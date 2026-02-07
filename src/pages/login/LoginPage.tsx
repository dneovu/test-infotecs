import React from 'react';
import { Row, Col } from 'antd';
import { LoginForm } from '../../features/auth';

export const LoginPage = () => (
  <Row justify="center" align="middle" style={{ height: '100vh' }}>
    <Col style={{ width: 360 }}>
      <LoginForm />
    </Col>
  </Row>
);

export default LoginPage;
