import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL = "https://gamers-store.onrender.com/api"; // Update if needed

export const useAuth = () => {
  const loginMutation = useMutation(async (userData) => {
    const { data } = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    return data;
  });

  const signupMutation = useMutation(async (userData) => {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    return data;
  });

  return { loginMutation, signupMutation };
};
