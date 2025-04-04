import axios from "axios";
import cookies from "js-cookie";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
});

instance.interceptors.request.use((config) => {
    const token = cookies.get("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

instance.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalRequest = err.config;

        if (originalRequest._retry) {
            cookies.remove("accessToken");
            cookies.remove("refreshToken");
            window.location.replace("/login");
            return Promise.reject(err);
        }

        if (err.response?.status !== 401) return Promise.reject(err);

        try {
            originalRequest._retry = true;
            const refreshToken = cookies.get("refreshToken");
            if (!refreshToken) {
                throw new Error("리프레시 토큰이 없습니다.");
            }

            const { data } = await axios.post("/auth/refresh", {
                token: refreshToken,
            });

            cookies.set("accessToken", data.accessToken);
            instance.defaults.headers.common["Authorization"] =
                `Bearer ${data.accessToken}`;

            return instance(originalRequest);
        } catch (error) {
            cookies.remove("accessToken");
            cookies.remove("refreshToken");
            window.location.replace("/login");
            return Promise.reject(error);
        }
    }
);
