import React from 'react';
import { Modal } from 'antd';
import { User } from '../../../entities/user';

type Props = {
  open: boolean;
  user: User | null;
  onCancel: () => void;
  onOk: () => void;
};

export const UserModal = ({ open, user, onCancel, onOk }: Props) => {
  const isEdit = Boolean(user);

  return (
    <Modal
      title={isEdit ? 'Редактирование пользователя' : 'Создание пользователя'}
      open={open}
      onCancel={onCancel}
      onOk={onOk}
    >
      <p>Text</p>
    </Modal>
  );
};
