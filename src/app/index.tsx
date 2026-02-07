import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/AppRouter';
import { AntdProvider } from './providers/antd/AntdProvider';
import { QueryProvider } from './providers/query/QueryProvider';

export const App = () => (
  <AntdProvider>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </AntdProvider>
);
