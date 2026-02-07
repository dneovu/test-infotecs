import React from 'react';
import { UsersList, useUsersQuery } from '../../entities/user';
import { Col, Row } from 'antd';
import { LogoutButton } from '../../features/auth';
import { useNavigate } from 'react-router-dom';

export const UsersPage = () => {
  const navigate = useNavigate();
  const { isLoading, error } = useUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col
        style={{
          width: '100%',
          maxWidth: 1440,
          padding: '16px 8px',
        }}
      >
        <Row justify="end">
          <LogoutButton onLogout={() => navigate('/login')} />
        </Row>

        <Col style={{ maxWidth: 1200, width: '100%', marginTop: -48 }}>
          <UsersList />
        </Col>
      </Col>
    </Row>
  );
};

export default UsersPage;
