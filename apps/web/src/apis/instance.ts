import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 3000,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

instance.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalRequest = err.config;

        if (originalRequest._retry) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            window.location.replace("/login");
            return Promise.reject(err);
        }

        if (err.response?.status !== 401) return Promise.reject(err);

        try {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) {
                throw new Error("리프레시 토큰이 없습니다.");
            }

            const { data } = await axios.post("/auth/refresh", {
                token: refreshToken,
            });

            localStorage.setItem("accessToken", data.accessToken);
            instance.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;

            return instance(originalRequest);
        } catch (error) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            window.location.replace("/login");
            return Promise.reject(error);
        }
    }
);
