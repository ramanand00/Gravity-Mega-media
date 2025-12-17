import axios from 'axios';
import { API_URL, axiosDefaults } from '../config';

// Apply default configuration
axios.defaults.baseURL = axiosDefaults.baseURL;
axios.defaults.timeout = axiosDefaults.timeout;
axios.defaults.headers.common['Content-Type'] = axiosDefaults.headers['Content-Type'];

// Add request interceptor for auth token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle 401 Unauthorized
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('admin');
        window.location.href = '/admin/login';
      }
      
      // Handle 500 Internal Server Error
      if (error.response.status === 500) {
        console.error('Server Error:', error.response.data);
      }
    }
    
    return Promise.reject(error);
  }
);

// Export configured axios instance
export default axios;