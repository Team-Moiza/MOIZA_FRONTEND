"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { instance } from "../../../apis/instance";

const GoogleCallback = () => {
    const router = useRouter();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const params = new URLSearchParams(hash.substring(1));
            const accessToken = params.get("access_token");

            if (accessToken) {
                instance
                    .post("/auth", { token: accessToken })
                    .then((response) => {
                        const { accessToken: newAccessToken, refreshToken } =
                            response.data;

                        if (newAccessToken) {
                            localStorage.setItem("accessToken", newAccessToken);
                        }
                        if (refreshToken) {
                            localStorage.setItem("refreshToken", refreshToken);
                        }
                        return instance.get("/users");
                    })
                    .then((userResponse) => {
                        const userData = userResponse.data;

                        const isNewUser =
                            !userData.school ||
                            !userData.major ||
                            !userData.educationStatus;

                        if (isNewUser) {
                            router.push("/register");
                        } else {
                            router.push("/");
                        }
                    })
                    .catch((error) => {
                        console.error("인증 실패:", error);
                        router.push("/login");
                    });
            } else {
                console.error("accessToken이 없습니다.");
                router.push("/login");
            }
        } else {
            console.error("URL 해시가 없습니다.");
            router.push("/login");
        }
    }, [router]);

    return <div>로그인 중...</div>;
};

export default GoogleCallback;
