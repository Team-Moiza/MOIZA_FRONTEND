import { Button } from "@moija/ui";
import React from "react";

const LogoutMessage = () => {
    return (
        <div className="relative h-[800px] mt-[50px]">
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.88) 16%, rgba(255, 255, 255, 0.96) 49%, #FFF 100%)",
                    backdropFilter: "blur(2px)",
                    opacity: 0.5,
                }}
            ></div>
            <div className="w-full absolute flex flex-col items-center justify-center gap-[30px]">
                <div className="text-black text-p2">
                    로그인하시면 더 많은 이력서를 확인할 수 있습니다!
                </div>
                <Button width={244}>로그인 하기</Button>
            </div>
        </div>
    );
};

export default LogoutMessage;
