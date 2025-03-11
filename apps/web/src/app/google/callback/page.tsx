"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { instance } from "../../../apis/instance";

const GoogleCallback = () => {
    const router = useRouter();

    useEffect(() => {
        const handleAuth = async () => {
            try {
                const hash = window.location.hash;
                if (!hash) {
                    throw new Error("URL 해시가 없습니다.");
                }

                const params = new URLSearchParams(hash.substring(1));
                const accessToken = params.get("access_token");
                if (!accessToken) {
                    throw new Error("accessToken이 없습니다.");
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
    }, [router]);

    return <div>로그인 중...</div>;
};

export default GoogleCallback;
