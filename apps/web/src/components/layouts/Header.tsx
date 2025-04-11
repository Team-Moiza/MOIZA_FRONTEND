"use client";

import { BottomArrow, Logo } from "@moija/ui";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import cookies from "js-cookie";

import { instance } from "../../apis";
import { CombinedDialog } from "../../app/my/dialog/CombinedDialog";
import { ActionMenu } from "@moija/ui";

export const Header = () => {
  const [type, setType] = useState<
    null | `removeResume_${string}` | "removeAccount" | "logout"
  >(null);
  const queryClient = useQueryClient();
  const router = useRouter();

  const token = cookies.get("accessToken");

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await instance.get("/users");
      return res.data;
    },
    enabled: !!token,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <CombinedDialog
        type={type}
        setType={setType}
        refetch={() => {
          queryClient.removeQueries({ queryKey: ["user"] });
        }}
      />
      <header className="z-[100] w-full fixed bg-white h-[80px] px-4 sm:px-12 lg:px-[200px] py-[25px] shadow-custom">
        <div className="h-full flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            {data ? (
              <ActionMenu
                items={[
                  {
                    label: "프로필 보기",
                    onClick: () => router.push("/my"),
                  },
                  {
                    label: "좋아요 목록",
                    onClick: () => router.push("/my?tab=liked"),
                  },
                  {
                    label: "이력서 목록",
                    onClick: () => router.push("/"),
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
                    <Image
                      src={data.profile}
                      alt="프로필"
                      fill
                      className="object-cover rounded-full"
                      unoptimized
                    />
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5">
                    <div className="text-p3 text-black">{data.nickname}님</div>
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