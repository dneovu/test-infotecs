import React from 'react';
import { useUsersQuery } from '../model/queries';
import { Avatar, List } from 'antd';
import { formatDate } from '../../../shared/lib/formatDate';

export const UsersList = () => {
  const { data } = useUsersQuery();

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={item.name}
            description={`Зарегистрирован ${formatDate(item.createdAt)}`}
          />
        </List.Item>
      )}
    />
  );
};
