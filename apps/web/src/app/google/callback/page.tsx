"use client";
import { useEffect } from "react";
import { instance } from "../../../apis/instance";

const GoogleCallback = () => {
    useEffect(() => {
        const handleAuth = async () => {
            try {
                const hash = window.location.hash;
                if (!hash) {
                    window.location.replace("/login");
                    return;
                }

                const params = new URLSearchParams(hash.substring(1));
                const accessToken = params.get("access_token");

                if (!accessToken) {
                    window.location.replace("/login");
                    return;
                }

                const authResponse = await instance.post("/auth", {
                    token: accessToken,
                });
                const { accessToken: newAccessToken, refreshToken } =
                    authResponse.data;

                localStorage.setItem("accessToken", newAccessToken);
                localStorage.setItem("refreshToken", refreshToken);

                const userResponse = await instance.get("/users");
                const userData = userResponse.data;

                const isNewUser =
                    !userData.school ||
                    !userData.major ||
                    !userData.educationStatus;
                window.location.replace(isNewUser ? "/register" : "/");
            } catch (error) {
                window.location.replace("/login");
            }
        };

        handleAuth();
    }, []);

    return <div>로그인 중...</div>;
};

export default GoogleCallback;
