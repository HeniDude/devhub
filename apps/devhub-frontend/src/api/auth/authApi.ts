import { apiClient } from "../api";

export const authApi = {
  login: (login: string, password: string) =>
    apiClient.post("/auth/login", { login, password }),
  register: (payload: any) => apiClient.post("/auth/register", payload),
  logout: () => apiClient.post("/auth/logout"),
};
