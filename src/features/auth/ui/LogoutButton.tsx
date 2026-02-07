import React from 'react';
import { Button } from 'antd';
import { logout } from '../model/logout';

type Props = {
  onLogout?: () => void;
};

export const LogoutButton = ({ onLogout }: Props) => {
  const handleClick = () => {
    logout();
    onLogout?.();
  };

  return (
    <Button type="primary" onClick={handleClick}>
      Выйти
    </Button>
  );
};
