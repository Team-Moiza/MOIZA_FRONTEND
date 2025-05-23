import axios from "axios";
import cookies from "js-cookie";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
});

const refreshInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 3000,
});

export const forceRefreshIfTokenMissing = async () => {
    const accessToken = cookies.get("accessToken");
    const refreshToken = cookies.get("refreshToken");

    if (!accessToken && refreshToken) {
        try {
            const { data } = await refreshInstance.post("/auth/refresh", {
                token: refreshToken,
            });

            cookies.set("accessToken", data.accessToken, {
                expires: 7,
                path: "/",
                sameSite: "Lax",
                secure: true,
            });
        } catch {
            cookies.remove("accessToken");
            cookies.remove("refreshToken");
            window.location.replace("/login");
        }
    }
};

instance.interceptors.request.use((config) => {
    const token = cookies.get("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

instance.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalRequest = err.config;

        if (
            !originalRequest ||
            originalRequest._retry ||
            originalRequest.url?.includes("/auth/refresh")
        ) {
            cookies.remove("accessToken");
            cookies.remove("refreshToken");
            window.location.replace("/login");
            return Promise.reject(err);
        }

        if (err.response?.status === 401) {
            try {
                originalRequest._retry = true;

                const refreshToken = cookies.get("refreshToken");

                const { data } = await refreshInstance.post("/auth/refresh", {
                    token: refreshToken,
                });
                
                cookies.set("accessToken", data.accessToken, {
                    expires: 7,
                    path: "/",
                    sameSite: "Lax",
                    secure: true,
                });

                instance.defaults.headers.common["Authorization"] =
                    `Bearer ${data.accessToken}`;
                originalRequest.headers["Authorization"] =
                    `Bearer ${data.accessToken}`;

                return instance(originalRequest);
            } catch (error) {
                cookies.remove("accessToken");
                cookies.remove("refreshToken");
                window.location.replace("/login");
                return Promise.reject(error);
            }
        }

        return Promise.reject(err);
    }
);
