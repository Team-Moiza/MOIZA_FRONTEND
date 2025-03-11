import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 3000,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
instance.interceptors.response.use(
    (res) => res,
    async (err) => {
        if (err.response?.status !== 401) {
            return Promise.reject(err);
        }

        try {
            const refreshToken = localStorage.getItem("refreshToken");
            const { data } = await instance.post("/auth/refresh", {
                token: refreshToken,
            });

            localStorage.setItem("accessToken", data.accessToken);
            err.config.headers.Authorization = `Bearer ${data.accessToken}`;

            return instance(err.config);
        } catch (error) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            window.location.replace("/login");
            return Promise.reject(error);
        }
    }
);
