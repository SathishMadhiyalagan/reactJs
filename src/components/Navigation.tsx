import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/store/store';

const Navigation: React.FC = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/home" className="text-white text-xl font-semibold hover:text-gray-200">
            Home
          </Link>
        </div>
        <div>
          {accessToken ? (
            <Link
              to="/logout"
              className="text-white text-xl font-semibold hover:text-gray-200 ml-4"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-white text-xl font-semibold hover:text-gray-200 ml-4"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
