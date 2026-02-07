import React from 'react';
import { useUsersQuery } from '../model/queries';
import { Avatar, List } from 'antd';
import { formatDate } from '../../../shared/lib/formatDate';
import { User } from '../model/types';

type Props = {
  onUserClick: (user: User) => void;
};

export const UsersList = ({ onUserClick }: Props) => {
  const { data } = useUsersQuery();

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(user, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                onClick={() => onUserClick(user)}
                style={{ cursor: 'pointer' }}
              />
            }
            title={
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => onUserClick(user)}
              >
                {user.name}
              </span>
            }
            description={`Зарегистрирован ${formatDate(user.createdAt)}`}
          />
        </List.Item>
      )}
    />
  );
};
