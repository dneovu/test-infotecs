import React from 'react';

import { Button, Result, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Result
        status="404"
        title="404"
        subTitle="Извините, эта страница не существует."
        extra={
          <Button type="primary" onClick={() => navigate('/login')}>
            На главную
          </Button>
        }
      />
    </Row>
  );
};

export default NotFoundPage;
