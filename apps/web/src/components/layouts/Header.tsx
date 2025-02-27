"use client";

import { Logo } from "@moija/ui";
import { useEffect, useState } from "react";
import { instance } from "../../apis/instance";
import Link from "next/link";
import Image from "next/image";

type User = {
    profile: string;
    nickname: string;
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userProfile = async () => {
            const token = localStorage.getItem("accessToken");
            if (token) {
                try {
                    const response = await instance.get("/users");
                    setUser(response.data);
                    setIsLoggedIn(true);
                    console.log("유저 데이터:", response.data);
                } catch (error) {
                    console.error("유저 정보 조회 실패:", error);
                    setIsLoggedIn(false);
                }
            } else {
                setIsLoggedIn(false);
            }
        };
        userProfile();
    }, []);

    return (
        <header className="z-10 w-[100vw] fixed justify-center bg-white h-[80px] px-[200px] py-[25px] shadow-custom">
            <div className="h-full flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className="flex items-center gap-5">
                    {isLoggedIn && user ? (
                        <div className="flex items-center gap-[14px]">
                            <Image
                                src={user.profile}
                                alt="프로필"
                                width={42}
                                height={42}
                                className="rounded-full flex-shrink-0"
                            />
                            <div className="text-p3 text-black">
                                {user.nickname}님
                            </div>
                        </div>
                    ) : (
                        <Link href="/login" className="gap-[50px] flex">
                            <div className="text-p3 text-black">로그인</div>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
