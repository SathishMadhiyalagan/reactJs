import React, { useEffect } from 'react';
import { logout } from '../apiService/authAPI';
import { useAppDispatch } from '../redux/store/store';
import { clearTokens } from '../redux/slices/authSlice';

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          await logout(refreshToken);
        }
        dispatch(clearTokens());
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
      } catch (error) {
        console.error('Logout failed', error);
      }
    })();
  }, [dispatch]);

  return <div>Logging out...</div>;
};

export default Logout;
