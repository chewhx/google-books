import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes`,
});

export default api;
