"use client";

import { BottomArrow, Logo } from "@moija/ui";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ActionMenu } from "@moija/ui";
import { instance } from "../../apis";
import { useQuery } from "@tanstack/react-query";
import cookies from "js-cookie";
import { CombinedDialog } from "../../app/my/dialog/CombinedDialog";

export const Header = () => {
  const [type, setType] = useState<null | `removeResume_${string}` | "removeAccount" | "logout">(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (cookies.get("accessToken")) {
        const data = await instance.get("/users");

        return data?.data;
      }
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (cookies.get("accessToken")) {
      setIsLoggedIn(true);
    }
  }, []);

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
            {isLoggedIn && data ? (
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
                  <div className="relative w-[42px] h-[42px] shrink-0">
                    <Image src={data?.profile} alt="프로필" fill className="object-cover rounded-full w-[42px_!important] h-[42px_!important]" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="text-p3 text-black">{data?.nickname}님</div>
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
