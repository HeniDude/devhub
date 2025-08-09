import { authApi } from "@/api/auth/authApi.ts";
import type {LoginUserPayload} from "@/types/auth/login-user-payload.interface.ts";

export const loginService = () => {
    const handleLogin = async (formData:LoginUserPayload) => {
        try {
            const res = await authApi.login(formData);
            return res.data
        } catch (err) {
            return false
        }
    };

    return {
        handleLogin,
    };
};
