"use client";

import { Dialog } from "./Dialog";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { logout, removeAccount, deletePortFolio, myPortFolio } from "../../apis";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ProfilePage } from "./ProfilePage";
import { LikedList } from "./LikedList";
import { MyPageNav } from "./MypageNav";
import { Center } from "@moija/ui";

export default function MyPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "liked">("profile");
  const [type, setType] = useState<null | `removeResume_${string}` | "removeAccount">(null);
  const { replace } = useRouter();

  const { mutate: removeResume } = useMutation({
    mutationFn: deletePortFolio,
    onSuccess: () => {
      toast.success("이력서를 성공적으로 제거하였습니다!");
      refetch();
    },
  });

  const { mutate: userLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => replace("/login"),
  });

  const { mutate: removeA } = useMutation({
    mutationFn: removeAccount,
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      replace("/");
    },
  });

  const { data, refetch } = useQuery({
    queryKey: ["my", "portfolio"],
    queryFn: myPortFolio,
  });

  return (
    <>
      <Dialog
        type={type}
        setType={setType}
        removeAccount={removeA}
        removeResume={(resumeId: string) => removeResume(resumeId)}
        refetch={refetch}
      />

      <Center>
        <div className="pt-[80px] w-[1040px] h-screen flex gap-[10px]">
          <MyPageNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            userLogout={userLogout}
            setType={setType}
          />
          <div className="w-full mt-10 flex flex-col gap-6">
            {activeTab === "profile" ? <ProfilePage setType={setType} /> : <LikedList />}
          </div>
        </div>
      </Center>
    </>
  );
}
