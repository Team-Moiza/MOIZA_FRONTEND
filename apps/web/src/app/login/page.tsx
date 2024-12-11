import { Google, Logo } from "@moija/ui";
import React from "react";

const Login = () => {
    return (
        <div className="w-screen h-screen items-center justify-center bg-gray-50 flex flex-col">
            <div className="w-[500px] h-[500px] gap-[50px] flex-col justify-center items-center  bg-white border border-gray-100 rounded-[30px]">
                <div className="gap-5 items-center flex flex-col ">
                    <Logo width={150} />
                    <div className="text-p2 text-gray-600">
                        로그인하고 소마고생들의 포트폴리오를 구경해보세요!
                    </div>
                    <button className="flex rounded-[50px] border-2 border-[#E2E8F0] px-6 py-3 gap-4 text-black text-p2 ">
                        <Google />
                        Google로 로그인
                    </button>
                </div>
            </div>
            <div className="text-p3 mt-[50px] text-gray-300">
                ©2024. team MOIZA. All rights reserved.
            </div>
        </div>
    );
};

export default Login;
