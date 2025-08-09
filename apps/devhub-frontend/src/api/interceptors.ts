import { apiClient } from "./api";

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                // TODO: скинуть на LoginPage
                console.warn("Unauthorized! Redirect to login.");
            }
        }
        return Promise.reject(error);
    }
);
