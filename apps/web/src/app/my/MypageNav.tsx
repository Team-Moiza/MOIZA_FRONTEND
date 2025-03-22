"use client";

import { Stack } from "@moija/ui";

interface MyPageNavProps {
  activeTab: "profile" | "liked";
  setActiveTab: React.Dispatch<React.SetStateAction<"profile" | "liked">>;
  userLogout: () => void;
  setType: React.Dispatch<
    React.SetStateAction<null | `removeResume_${string}` | "removeAccount">
  >;
}

export const MyPageNav = ({
  activeTab,
  setActiveTab,
  userLogout,
  setType,
}: MyPageNavProps) => {
  return (
    <nav className="w-[216px] py-28 px-6">
      <Stack gap={20}>
        <span
          className={`
            text-p4 cursor-pointer
            transition-colors
            ${
              activeTab === "profile"
                ? "text-black font-bold"
                : "text-gray-400 hover:text-black"
            }
          `}
          onClick={() => setActiveTab("profile")}
        >
          내 프로필
        </span>
        <span
          className={`
            text-p4 cursor-pointer
            transition-colors
            ${
              activeTab === "liked"
                ? "text-black font-bold"
                : "text-gray-400 hover:text-black"
            }
          `}
          onClick={() => setActiveTab("liked")}
        >
          좋아요 목록
        </span>
        <div className="w-full h-px bg-gray-200" />
        <button
          className="text-p4 text-gray-500 w-fit hover:text-black transition-colors"
          onClick={userLogout}
        >
          로그아웃
        </button>
        <button
          className="text-p4 text-sub-red w-fit hover:text-red-600 transition-colors"
          onClick={() => setType("removeAccount")}
        >
          회원탈퇴
        </button>
      </Stack>
    </nav>
  );
};
