// API Configuration
export const API_CONFIG = {
  // Development
  DEV: {
    API_URL: 'http://localhost:5000/api',
    SOCKET_URL: 'http://localhost:5000'
  },
  // Production (update this after deployment)
  PROD: {
    API_URL: 'https://your-backend-url.onrender.com/api',
    SOCKET_URL: 'https://your-backend-url.onrender.com'
  }
};

// Current environment
export const IS_DEV = import.meta.env.DEV || true; // Change to false for production

// Export current config
export const API_URL = IS_DEV ? API_CONFIG.DEV.API_URL : API_CONFIG.PROD.API_URL;
export const SOCKET_URL = IS_DEV ? API_CONFIG.DEV.SOCKET_URL : API_CONFIG.PROD.SOCKET_URL;

// Axios default configuration
export const axiosDefaults = {
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
};