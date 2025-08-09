import { authApi } from "@/api/auth/authApi.ts";
import { type IRegisterUserPayload } from "@/types/auth/register-user-payload.interface";

export const registerService = () => {
  const handleRegister = async (formData: IRegisterUserPayload) => {
    try {
      const res = await authApi.register(formData);
      return res.data;
    } catch (err) {
      return false;
    }
  };

  return {
    handleRegister,
  };
};
