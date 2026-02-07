import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../../shared/lib/auth';

type Props = {
  children: JSX.Element;
};

export const PublicRoute = ({ children }: Props) => {
  if (isAuthenticated()) {
    return <Navigate to="/users" replace />;
  }

  return children;
};
