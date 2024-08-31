import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import Logout from '../components/Logout';
import Navigation from '../components/Navigation';
import PrivateRoute from './PrivateRoute'; // If using protected routes

const AppRoutes: React.FC = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </Router>
);

export default AppRoutes;
