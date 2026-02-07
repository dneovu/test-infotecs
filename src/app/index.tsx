import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/AppRouter';
import { AntdProvider } from './providers/antd/AntdProvider';

export const App = () => (
  <AntdProvider>
    <RouterProvider router={router} />
  </AntdProvider>
);
