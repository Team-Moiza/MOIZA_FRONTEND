interface DialogProps {
    type: null | `removeResume_${string}` | "removeAccount";
    setType: React.Dispatch<React.SetStateAction<null | `removeResume_${string}` | "removeAccount">>;
    removeAccount: () => void;
    removeResume: (resumeId: string) => void;
    refetch: () => void;
}

export const Dialog = ({ type, setType, removeAccount, removeResume, refetch }: DialogProps) => {
    if (!type) return null;

    const isAccountRemoval = type === "removeAccount";
    const isResumeRemoval = type.startsWith("removeResume_");

    const handleConfirm = () => {
        if (isAccountRemoval) {
            removeAccount();
        } else if (isResumeRemoval) {
            const resumeId = type.split("_")[1];
            if (resumeId) {
                removeResume(resumeId);
            }
        }
        setType(null);
        refetch();
    };

    return (
        <div className="fixed z-[101] top-0 w-full h-screen bg-[#00000030] flex justify-center items-center">
            <div className="w-[438px] h-[280px] py-[52px] items-center justify-center bg-white rounded-2xl flex-col flex z-20 gap-[40px]">
                <div className="flex flex-col gap-4 items-center">
                    <span className="text-h4">{isAccountRemoval ? "정말 탈퇴하시겠어요?" : "이력서를 삭제하시겠습니까?"}</span>
                    <span className="text-p3 text-gray-500">
                        {isAccountRemoval ? "탈퇴 시 계정 정보 및 이용 기록이 삭제됩니다" : "이력서의 내용이 모두 삭제됩니다"}
                    </span>
                </div>
                <div className="flex gap-3 items-center">
                    <button className="text-gray-500 bg-gray-100 rounded-lg w-[128px] h-[44px] py-2 text-p2" onClick={() => setType(null)}>
                        닫기
                    </button>
                    <button className="text-red-400 bg-red-100 rounded-lg w-[128px] h-[44px] py-2 text-p2" onClick={handleConfirm}>
                        {isAccountRemoval ? "회원탈퇴" : "삭제"}
                    </button>
                </div>
            </div>
        </div>
    );
};
