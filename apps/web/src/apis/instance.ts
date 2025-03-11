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
                refreshToken,
            });
            localStorage.setItem("accessToken", data.accessToken);

            const newConfig = { ...err.config };
            newConfig.headers.Authorization = `Bearer ${data.accessToken}`;

            return instance(newConfig);
        } catch (refreshErr) {
            alert("토큰이 만료되거나 존재하지 않습니다. 다시 로그인 해주세요.");
            localStorage.clear();
            window.location.replace("/login");
            return Promise.reject(refreshErr);
        }
    }
);
