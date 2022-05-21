import axios from 'axios';
import { baseURL } from '../constants/baseURL';

const api = axios.create({
  baseURL,
});

export default api;
