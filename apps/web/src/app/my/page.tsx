"use client";

import { Center } from "@moija/ui";
import { useEffect, useState } from "react";
import { ProfilePage } from "./ProfilePage";
import { LikedList } from "./LikedList";
import { useMutation, useQuery } from "@tanstack/react-query";
import { logout, removeAccount, user } from "../../apis/user";
import { useRouter } from "next/navigation";
import { deletePortFolio, myPortFolio } from "../../apis";
import { toast } from "react-toastify";
import { FormType } from "./edit/page";
import { MyPageNav } from "./MypageNav";

export default function MyPage() {
    const { data: userData } = useQuery<FormType>({
        queryKey: ["user"],
        queryFn: async () => (await user()).data,
    });
    const [activeTab, setActiveTab] = useState<"profile" | "liked">("profile");
    const [type, setType] = useState<
        null | `removeResume_${string}` | "removeAccount"
    >(null);
    const { data, refetch } = useQuery({
        queryKey: ["my", "portfolio"],
        queryFn: myPortFolio,
    });
    const { replace } = useRouter();

    const { mutate: remove } = useMutation({
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
        onSuccess: () => replace("/"),
    });

    return (
        <>
            {type && (
                <div className="fixed z-[101] top-0 w-full h-screen bg-[#00000030] flex justify-center items-center">
                    <div className="w-[438px] h-[280px] py-[52px] items-center justify-center bg-white rounded-2xl flex-col flex z-20 gap-[40px]">
                        <div className="flex flex-col gap-4 items-center">
                            <span className="text-h4">
                                {type === "removeAccount"
                                    ? "정말 탈퇴하시겠어요?"
                                    : "이력서를 삭제하시겠습니까?"}
                            </span>
                            <span className="text-p3 text-gray-500">
                                {type === "removeAccount"
                                    ? "탈퇴 시 계정 정보 및 이용 기록이 삭제됩니다"
                                    : "이력서의 내용이 모두 삭제됩니다"}
                            </span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <button
                                className="text-gray-500 bg-gray-100 rounded-lg w-[128px] h-[44px] py-2 text-p2"
                                onClick={() => setType(null)}
                            >
                                닫기
                            </button>
                            <button
                                className="text-red-400 bg-red-100 rounded-lg w-[128px] h-[44px] py-2 text-p2"
                                onClick={() => {
                                    if (type !== "removeAccount") {
                                        remove(type.split("_")[1] as string);
                                    } else {
                                        removeA();
                                    }
                                    setType(null);
                                }}
                            >
                                {type === "removeAccount" ? "회원탈퇴" : "삭제"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Center>
                <div className="pt-[80px] w-[1040px] h-screen flex gap-[10px]">
                    <MyPageNav
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        userLogout={() => userLogout()}
                        setType={setType}
                    />
                    <div className="w-full mt-10 flex flex-col gap-6">
                        {activeTab === "profile" ? (
                            <ProfilePage />
                        ) : (
                            <LikedList />
                        )}
                    </div>
                </div>
            </Center>
        </>
    );
}
