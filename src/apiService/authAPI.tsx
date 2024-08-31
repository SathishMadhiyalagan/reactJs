import axios from 'axios';

// Configure axios instance if needed
const api = axios.create({
  baseURL: 'http://localhost:8000', // Your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token if needed
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const login = async (username: string, password: string) => {
  try {
    return await api.post('/token/', { username, password });
  } catch (error) {
    console.error('Login failed:', error.message);
    throw error;
  }
};

export const getHomeData = async () => {
  try {
    const response = await api.get('/'); // Ensure the endpoint is correct
    return response.data; // Return data directly
  } catch (error) {
    console.error('Failed to fetch home data:', error.message);
    throw error;
  }
};

export const logout = async (refreshToken: string) => {
  try {
    return await api.post('/logout/', { refresh_token: refreshToken });
  } catch (error) {
    console.error('Logout failed:', error.message);
    throw error;
  }
};
