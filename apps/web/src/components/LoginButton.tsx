import { Icon } from "@repo/ui/src";

export const LoginButton = () => {
  return (
    <button
      className="relative flex bg-white rounded-lg justify-center items-center"
      style={{
        boxShadow: "0px 2px 12px rgba(171, 190, 209, 0.25)",
      }}
    >
      <div className="absolute left-7">
        <Icon.Google />
      </div>
      <div className="text-center text-p1 px-[70px] py-3.5">
        Google 계정으로 로그인
      </div>
    </button>
  );
};
