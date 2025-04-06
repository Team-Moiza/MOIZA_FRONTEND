"use client";

import { useMutation } from "@tanstack/react-query";
import { logout } from "../../../apis";
import { useRouter } from "next/navigation";
import { Dialog } from ".";
import cookies from "js-cookie";

interface DialogProps {
    type: null | `removeResume_${string}` | "removeAccount" | "logout";
    setType: React.Dispatch<
        React.SetStateAction<
            null | `removeResume_${string}` | "removeAccount" | "logout"
        >
    >;
    removeAccount?: () => void;
    removeResume?: (resumeId: string) => void;
    refetch?: () => void;
}

export const CombinedDialog = ({
    type,
    setType,
    removeAccount,
    removeResume,
    refetch,
}: DialogProps) => {
    if (!type) return null;

    const router = useRouter();

    const { mutate: userLogout } = useMutation({
        mutationFn: logout,
        onSuccess: () => {
            cookies.remove("accessToken");
            cookies.remove("refreshToken");
            router.replace("/login");
        },
    });

    const isAccountRemoval = type === "removeAccount";
    const isResumeRemoval = type.startsWith("removeResume_");
    const isLogout = type === "logout";

    const handleConfirm = () => {
        if (isAccountRemoval && removeAccount) {
            removeAccount();
        } else if (isResumeRemoval && removeResume) {
            const resumeId = type.split("_")[1];
            if (resumeId) {
                removeResume(resumeId);
            }
        } else if (isLogout) {
            userLogout();
        }
        setType(null);
        if (refetch) {
            refetch();
        }
    };

    return (
        <Dialog>
            <div className="flex flex-col gap-4 items-center">
                <span className="text-h4">
                    {isLogout
                        ? "로그아웃"
                        : isAccountRemoval
                            ? "정말 탈퇴하시겠어요?"
                            : "이력서를 삭제하시겠습니까?"}
                </span>
                {(isLogout || !isLogout) && (
                    <span className="text-p3 text-gray-500">
                        {isLogout
                            ? "로그아웃하시겠습니까?"
                            : isAccountRemoval
                                ? "탈퇴 시 계정 정보 및 이용 기록이 삭제됩니다"
                                : "이력서의 내용이 모두 삭제됩니다"}
                    </span>
                )}
            </div>
            <div className="flex gap-3 items-center justify-center">
                <button
                    className="text-gray-500 bg-gray-100 rounded-lg w-[128px] h-[44px] py-2 text-p2"
                    onClick={() => setType(null)}
                >
                    닫기
                </button>
                <button
                    className="text-red-400 bg-red-100 rounded-lg w-[128px] h-[44px] py-2 text-p2"
                    onClick={handleConfirm}
                >
                    {isLogout ? "확인" : isAccountRemoval ? "회원탈퇴" : "삭제"}
                </button>
            </div>
        </Dialog>
    );
};
