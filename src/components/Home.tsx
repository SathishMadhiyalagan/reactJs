import React, { useEffect, useState } from 'react';
import { getHomeData } from '../apiService/authAPI';
import { useAppSelector } from '../redux/store/store';

const Home: React.FC = () => {
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const [message, setMessage] = useState('');
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (!accessToken) {
      window.location.href = '/login';
      return;
    }

    (async () => {
      try {
        const data = await getHomeData();
        console.log(data); // For debugging purposes
        setMessage(data.message);
        setUser(data.user); // Set user data
      } catch (error) {
        console.error('Failed to fetch home data', error);
      }
    })();
  }, [accessToken]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome Home!</h1>
        {user ? (
          <p className="text-lg text-gray-700">Hi {user.username}</p>
        ) : (
          <p className="text-lg text-gray-700">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
