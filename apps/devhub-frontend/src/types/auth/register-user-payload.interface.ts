import type { EUserRole } from "@/constants/user-role";

export interface IRegisterUserPayload {
  firstName: string;
  lastName: string;
  login: string;
  role: EUserRole;
  password: string;
}

export interface IRegisterForm extends IRegisterUserPayload {
  confirmPassword: string;
  agree: string;
}
