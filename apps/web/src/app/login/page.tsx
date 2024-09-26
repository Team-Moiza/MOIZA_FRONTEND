"use client";
import React from "react";
import { Icon } from "@repo/ui/src";
import { Assets } from "@repo/ui/src";

const Login = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative bg-background pt-[200px]">
      <div className="flex flex-col items-center h-full z-10">
        <div className="gap-[30px]">
          <div
            className="relative bg-white px-[16px] py-[10px] rounded-full text-center text-p1 mb-[30px] "
            style={{
              boxShadow: "0px 2px 12px rgba(171, 190, 209, 0.25)",
            }}
          >
            소마생들 다 여기 모여라! 🚀
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
          </div>
          <div className="flex flex-col items-center gap-[15px]">
            <Icon.Logo size={265} />
            <div className="text-subText1 text-[20px]">
              4대 소마고 연합 커뮤니티 모이자
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[70px] top-1/2 transform -translate-y-1/2">
        <Assets.Bubble />
      </div>
      <div className="absolute right-[70px] top-1/2 transform -translate-y-1/2 scale-x-[-1]">
        <Assets.Bubble />
      </div>

      <div className="absolute left-1/2 top-[420px] transform -translate-x-1/2 bg-primary-400 w-[115vw] h-[100vw] rounded-[50%]">
        <div className="flex flex-col justify-start items-center h-full pt-[5%]">
          <button
            className="relative flex bg-white rounded-lg justify-center items-center "
            style={{
              boxShadow: "0px 2px 12px rgba(171, 190, 209, 0.25)",
            }}
          >
            <div className="absolute left-5">
              <Icon.Google />
            </div>
            <span className="text-center text-bnt1 px-[100px] py-3">
              구글로 로그인
            </span>
          </button>
          <div className="text-accent text-sm mt-[50px]">
            dsm.hs.kr, gsm.hs.kr, dgws.hs.kr, bssm.hs.kr 이메일만 로그인 할 수
            있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;