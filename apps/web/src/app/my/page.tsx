"use client";

import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { removeAccount, deletePortFolio, myPortFolio } from "../../apis";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { ProfilePage } from "./ProfilePage";
import { LikedList } from "./like/like";
import { MyPageNav } from "./MypageNav";
import { Center } from "@moija/ui";
import Cookies from "js-cookie";
import { CombinedDialog } from "./dialog/CombinedDialog";

const MyPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"profile" | "liked">("profile");
    const [type, setType] = useState<
        null | `removeResume_${string}` | "removeAccount" | "logout"
    >(null);

    const { mutate: removeResume } = useMutation({
        mutationFn: deletePortFolio,
        onSuccess: () => {
            toast.success("이력서를 성공적으로 제거하였습니다!");
            refetch();
        },
    });

    const { mutate: removeA } = useMutation({
        mutationFn: removeAccount,
        onSuccess: () => {
            Cookies.remove("refreshToken");
            Cookies.remove("accessToken");
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
            {type && (
                <CombinedDialog
                    type={type}
                    setType={setType}
                    removeAccount={removeA}
                    removeResume={(resumeId: string) => removeResume(resumeId)}
                    refetch={refetch}
                />
            )}

            <Center>
                <div className="pt-[80px] w-[1040px] h-screen flex gap-[10px]">
                    <MyPageNav
                        activeTab={activeTab}
                        setActiveTab={handleTabChange}
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

export default MyPage;