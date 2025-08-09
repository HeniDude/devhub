import { authApi } from "@/api/auth/authApi.ts";

export const loginService = () => {
    const handleLogin = async (login: string, password: string) => {
        try {
            const res = await authApi.login(login, password);
            return res.data
        } catch (err) {
            return false
        }
    };

    return {
        handleLogin,
    };
};
