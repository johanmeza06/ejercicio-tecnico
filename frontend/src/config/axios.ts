import axios from "axios";

export const apiPublic = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND_URL,
});

export default apiPublic;
