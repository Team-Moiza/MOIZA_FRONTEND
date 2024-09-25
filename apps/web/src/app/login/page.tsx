"use client";
import React from "react";
import { Assets } from "@repo/ui/src";
import { Icon } from "@repo/ui/src";

const Login = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full bg-background">
        <div className="gap-[30px] flex flex-col items-center mb-10">
          <div
            className="relative bg-white px-[18px] py-[10px] rounded-full text-center text-p1"
            style={{
              boxShadow: "0px 2px 12px rgba(171, 190, 209, 0.25)",
            }}
          >
            소마생들 다 여기 모여라! 🚀
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
          </div>
          <Icon.Logo size={258} />
          <div className="text-subText1 text-[20px]">4대 소마고 연합 커뮤니티 모이자</div>
        </div>
        <div className="relative">
          <button className="flex w-[360px] h-[48px] bg-white rounded-lg justify-center items-center"
          style={{
            boxShadow: "0px 2px 12px rgba(171, 190, 209, 0.25)",
          }}>
            <div className="absolute left-4">
              <Icon.Google />
            </div>
            <span className="text-center text-bnt1">구글로 로그인</span>
          </button>
        </div>
        <div className="text-p2 text-accent">
          dsm.hs.kr, gsm.hs.kr, dgws.hs.kr, bssm.hs.kr 이메일만 로그인 할 수
          있습니다.
        </div>
      </div>
    </div>
  );
};

export default Login;
