import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../../../pages/login/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
