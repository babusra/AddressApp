import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://670a88b1ac6860a6c2c9cb36.mockapi.io/api/addressApp', // API base URL
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});


export default apiClient;
