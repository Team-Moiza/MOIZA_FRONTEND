import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 3000,
});

console.log(process.env.NEXT_PUBLIC_BASE_URL)

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
            // 별도의 Axios 인스턴스를 생성하여 리프레시 토큰 요청
            const refreshInstance = axios.create({
                baseURL: process.env.NEXT_PUBLIC_BASE_URL,
                timeout: 3000,
            });

            const { data } = await refreshInstance.post("/auth/refresh", {
                token: refreshToken,
            });
            localStorage.setItem("accessToken", data.accessToken);

            const newConfig = { ...err.config };
            newConfig.headers.Authorization = `Bearer ${data.accessToken}`;

            return instance(newConfig);
        } catch (refreshErr) {
            alert("토큰이 만료되거나 존재하지 않습니다. 다시 로그인 해주세요.");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            window.location.replace("/login");
            return Promise.reject(refreshErr);
        }
    }
);
