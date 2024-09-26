import { Icon } from "@repo/ui/src";

export const LoginButton = () => {
  return (
    <button
      className="flex bg-white rounded-lg justify-center items-center px-[50px] py-[14px] gap-[20px]"
      style={{
        boxShadow: "0px 2px 12px rgba(171, 190, 209, 0.25)",
      }}
    >
        <Icon.Google />
      <div className="text-center text-p2">
        Google 계정으로 로그인
      </div>
    </button>
  );
};
