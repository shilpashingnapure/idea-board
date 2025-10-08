import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
const apiService = axios.create({
  baseURL: URL
});

export default apiService;
