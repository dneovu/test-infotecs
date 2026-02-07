import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../../../pages/login/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import NotFoundPage from '../../../pages/not-found/NotFoundPage';
import UsersPage from '../../../pages/users/UsersPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/users',
    element: (
      <ProtectedRoute>
        <UsersPage />
      </ProtectedRoute>
    ),
  },
]);
