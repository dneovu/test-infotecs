import React from 'react';
import { Button } from 'antd';

type Props = {
  onCreate?: () => void;
};

export const CreateUserButton = ({ onCreate }: Props) => {
  const handleClick = () => {
    onCreate?.();
  };

  return (
    <Button type="primary" onClick={handleClick}>
      Создать пользователя
    </Button>
  );
};
