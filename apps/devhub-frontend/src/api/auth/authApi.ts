import { apiClient } from "../api";
import type {LoginUserPayload} from "@/types/auth/login-user-payload.interface.ts";
import type {IRegisterUserPayload} from "@/types/auth/register-user-payload.interface.ts";

export const authApi = {
  login: (payload: LoginUserPayload) =>
    apiClient.post("/auth/login", payload),
  register: (payload: IRegisterUserPayload) => apiClient.post("/auth/register", payload),
  logout: () => apiClient.post("/auth/logout"),
};
