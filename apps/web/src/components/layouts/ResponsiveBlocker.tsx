"use client";

import { useEffect, useState } from "react";
import { Logo } from "@moija/ui";

const ResponsiveBlocker = ({ children }: { children: React.ReactNode }) => {
    const [isBlocked, setIsBlocked] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsBlocked(window.innerWidth < 767);
        };

        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    if (isBlocked) {
        return (
            <div className="w-screen h-screen flex flex-col items-center justify-center px-4">
                <Logo />
                <h2 className="text-h5 text-gray-600 mt-4 mb-2 animate-pulse">
                    앗! 화면이 너무 작아요
                </h2>
                <p className="text-p4 text-gray-600 mb-1">
                    <span className="font-semibold text-black">모이자</span>는{" "}
                    <span className="text-primary-500">767px 이상</span>{" "}
                    화면에서만 이용할 수 있어요!
                </p>
                <p className="text-caption1 text-gray-400 mt-2">
                    모바일에서는 사용이 제한됩니다 🙏 <br />
                    빠른 시일 내에 모바일로 찾아올게요!
                </p>
            </div>
        );
    }

    return <>{children}</>;
};

export default ResponsiveBlocker;
