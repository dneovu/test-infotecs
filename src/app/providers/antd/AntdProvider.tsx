import React from 'react';
import { ConfigProvider } from 'antd';

type Props = {
  children: React.ReactNode;
};

export const AntdProvider = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#216393',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
