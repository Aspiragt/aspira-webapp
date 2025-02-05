const config = {
  apiUrl: import.meta.env.PROD 
    ? 'https://aspira-backend.onrender.com/api'
    : 'http://localhost:5001/api'
};

export default config;
