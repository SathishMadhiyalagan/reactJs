import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/store/store';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  return accessToken ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
