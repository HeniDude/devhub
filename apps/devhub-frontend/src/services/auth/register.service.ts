import { authApi } from "../../api/auth/authApi";

export const registerService = () => {
    const handleRegister = async (login: string, password: string) => {
        try {
            const res = await authApi.register(login, password);
            return res.data;
        } catch (err) {
            return false
        }
    };

    return {
        handleRegister,
    };
};
