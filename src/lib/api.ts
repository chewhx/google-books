import axios from "axios";
import { baseURL } from "../constants/baseURL";

const api = axios.create({
  baseURL
});

export default api;

export const apiGetWithParams = <T>(params: T) =>
  api({ method: "get", params });
