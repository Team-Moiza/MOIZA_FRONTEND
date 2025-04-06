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
import cookies from "js-cookie";
import { CombinedDialog } from "../../app/my/dialog/CombinedDialog";

type User = {
  profile: string;
  nickname: string;
};

const Header = () => {
  const [type, setType] = useState<
    null | `removeResume_${string}` | "removeAccount" | "logout"
  >(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = cookies.get("accessToken");
      if (token) {
        const response = await instance.get("/users");
        setUserData(response.data);
        setIsLoggedIn(true);
      }
    };
    fetchUserProfile();
  }, []);

  const { mutate: userLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      cookies.remove("accessToken");
      cookies.remove("refreshToken");
      setUserData(null);
      router.replace("/login");
    },
  });

  return (
    <>
      <CombinedDialog type={type} setType={setType} />
      <header className="z-[100] w-[100vw] fixed justify-center bg-white h-[80px] px-[200px] py-[25px] shadow-custom">
        <div className="h-full flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            {isLoggedIn && userData ? (
              <ActionMenu
                items={[
                  {
                    label: "이력서 목록",
                    onClick: () => router.push("/"),
                  },
                  {
                    label: "프로필 보기",
                    onClick: () => router.push("/my"),
                  },
                  {
                    label: "좋아요 목록",
                    onClick: () => router.push("/my?tab=liked"),
                  },
                  {
                    label: "로그아웃",
                    onClick: () => setType("logout"),
                    fontColor: "text-red-500",
                  },
                ]}
              >
                <div className="flex items-center gap-3 cursor-pointer">
                  <Image
                    src={userData.profile}
                    alt="프로필"
                    width={42}
                    height={42}
                    className="rounded-full flex-shrink-0"
                  />
                  <div className="flex items-center gap-1.5">
                    <div className="text-p3 text-black">
                      {userData.nickname}님
                    </div>
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
    </>
  );
};

export default Header;