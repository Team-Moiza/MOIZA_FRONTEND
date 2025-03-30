"use client";

import { useEffect } from "react";
import { instance } from "../../../apis/instance";
import cookies from "js-cookie";

const GoogleCallback = () => {
    useEffect(() => {
        const handleAuth = async () => {
            const hash = window.location.hash;
            if (!hash) return window.location.replace("/login");

            const params = new URLSearchParams(hash.substring(1));
            const accessToken = params.get("access_token");
            if (!accessToken) return window.location.replace("/login");

            const authResponse = await instance.post("/auth", {
                token: accessToken,
            });
            const { accessToken: newAccessToken, refreshToken } =
                authResponse.data;

            cookies.set("accessToken", newAccessToken);
            cookies.set("refreshToken", refreshToken);

            const { data: userData } = await instance.get("/users");

            window.location.replace(
                !userData.school || !userData.major || !userData.educationStatus
                    ? "/register"
                    : "/"
            );
        };

        handleAuth();
    }, []);

    return <div>로그인 중...</div>;
};

export default GoogleCallback;
