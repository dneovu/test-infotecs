import React, { useState } from 'react';
import { User, UsersList, useUsersQuery } from '../../entities/user';

import { Col, Row } from 'antd';
import { LogoutButton } from '../../features/auth';
import { useNavigate } from 'react-router-dom';
import { CreateUserButton, UserModal } from '../../features/users';

export const UsersPage = () => {
  const navigate = useNavigate();
  const { isLoading, error } = useUsersQuery();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
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
            <UsersList
              onUserClick={(user) => {
                setEditingUser(user);
                setModalOpen(true);
              }}
            />

            <div style={{ marginTop: 24 }}>
              <CreateUserButton onCreate={() => setModalOpen(true)} />
            </div>
          </Col>
        </Col>
      </Row>
      <UserModal
        user={editingUser}
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingUser(null);
        }}
      />
    </>
  );
};

export default UsersPage;
