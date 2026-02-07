import React from 'react';
import { UsersList, useUsersQuery } from '../../entities/user';
import { Col, Row } from 'antd';

export const UsersPage = () => {
  const { isLoading, error } = useUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Row justify="center" style={{ height: '100vh' }}>
      <Col style={{ width: 1440, paddingLeft: 8, paddingRight: 8 }}>
        <UsersList />
      </Col>
    </Row>
  );
};

export default UsersPage;
