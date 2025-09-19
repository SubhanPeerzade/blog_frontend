import axios from "axios";

// Prefer Vite env var in production. Fallback to "/api" for local dev with proxy.
const resolvedBaseURL =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_BASE_URL)
    ? import.meta.env.VITE_API_BASE_URL
    : "/api";

const axiosInstance = axios.create({
  baseURL: resolvedBaseURL,
});

// Hydrate default header on initial load
const bootToken = localStorage.getItem("token");
if (bootToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${bootToken}`;
}

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
