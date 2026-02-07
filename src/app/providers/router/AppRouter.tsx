import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../../../pages/login/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
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
        <div>users page</div>
      </ProtectedRoute>
    ),
  },
]);
