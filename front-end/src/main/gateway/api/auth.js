import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

export const signup = async (data) => {
  const response = await axios.post(`${API_BASE}/users/register`, data); // ✅ Corrected route
  return response.data;
};

export const login = async (data) => {
  const response = await axios.post(`${API_BASE}/users/login`, data); // ✅ Corrected route
  return response.data;
};


// working good no need to change 
export const adminLogin = async (data) => {
  const response = await axios.post(`${API_BASE}/admin/user`, data);
  return response.data;
};
