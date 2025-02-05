const config = {
  apiUrl: import.meta.env.PROD 
    ? 'https://aspira-webapp.onrender.com/api'
    : 'http://localhost:5001/api'
};

export default config;
