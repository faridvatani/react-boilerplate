import axios, { InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default api;
