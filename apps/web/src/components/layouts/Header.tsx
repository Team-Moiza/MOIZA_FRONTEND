"use client";

import { BottomArrow, Logo } from "@moija/ui";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ActionMenu } from "@moija/ui";
import { user, logout } from "../../apis/user";
import { instance } from "../../apis";
import { useMutation } from "@tanstack/react-query";

type User = {
  profile: string;
  nickname: string;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();
  useEffect(() => {
    const userProfile = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const response = await instance.get("/users");
        setUser(response.data);
        setIsLoggedIn(true);
      }
    };
    userProfile();
  }, []);

  const { mutate: userLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      setUser(null);
      localStorage.removeItem("refreshToken");
      router.replace("/login");
    },
  });

  return (
    <header className="z-[100] w-[100vw] fixed justify-center bg-white h-[80px] px-[200px] py-[25px] shadow-custom">
      <div className="h-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {isLoggedIn && user ? (
            <ActionMenu
              items={[
                {
                  label: "프로필 보기",
                  onClick: () => router.push("/my"),
                },
                {
                  label: "이력서 목록",
                  onClick: () => router.push("/"),
                },
                {
                  label: "로그아웃",
                  onClick: userLogout,
                  fontColor: "text-red-500",
                },
              ]}
            >
              <div className="flex items-center gap-3 cursor-pointer">
                <Image
                  src={user.profile}
                  alt="프로필"
                  width={42}
                  height={42}
                  className="rounded-full flex-shrink-0"
                />
                <div className="flex items-center gap-1.5">
                  <div className="text-p3 text-black">{user.nickname}님</div>
                  <BottomArrow size="18" />
                </div>
              </div>
            </ActionMenu>
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
