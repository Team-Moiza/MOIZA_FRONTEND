"use client";

import { Dialog } from "./Dialog";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
    logout,
    removeAccount,
    deletePortFolio,
    myPortFolio,
} from "../../apis";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { ProfilePage } from "./ProfilePage";
import { LikedList } from "./like/page";
import { MyPageNav } from "./MypageNav";
import { Center } from "@moija/ui";

export default function MyPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"profile" | "liked">("profile");
    const [type, setType] = useState<
        null | `removeResume_${string}` | "removeAccount"
    >(null);

    const { mutate: removeResume } = useMutation({
        mutationFn: deletePortFolio,
        onSuccess: () => {
            toast.success("이력서를 성공적으로 제거하였습니다!");
            refetch();
        },
    });

    const { mutate: userLogout } = useMutation({
        mutationFn: logout,
        onSuccess: () => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            router.replace("/login");
        },
    });

    const { mutate: removeA } = useMutation({
        mutationFn: removeAccount,
        onSuccess: () => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            router.replace("/");
        },
    });

    const { data, refetch } = useQuery({
        queryKey: ["my", "portfolio"],
        queryFn: myPortFolio,
    });

    useEffect(() => {
        const tabParam = searchParams.get("tab");
        if (tabParam === "liked") {
            setActiveTab("liked");
        } else {
            setActiveTab("profile");
        }
    }, [searchParams]);

    const handleTabChange = (tab: "profile" | "liked") => {
        router.push(`/my?tab=${tab}`);
        setActiveTab(tab);
    };

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
                        setActiveTab={handleTabChange}
                        userLogout={userLogout}
                        setType={setType}
                    />
                    <div className="w-full mt-10 flex flex-col gap-6">
                        {activeTab === "profile" ? (
                            <ProfilePage setType={setType} />
                        ) : (
                            <LikedList />
                        )}
                    </div>
                </div>
            </Center>
        </>
    );
}