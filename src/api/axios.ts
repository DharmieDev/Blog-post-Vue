import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";


export const api = axios.create({
  baseURL: 'https://api.oluwasetemi.dev'
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})