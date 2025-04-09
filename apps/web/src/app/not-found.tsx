"use client";

import { RightArrow } from "@moija/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Custom404 = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
            <Image src="/404.png" alt="404" width={250} height={250} />
            <h1 className="mt-3 text-h5 text-black">
                앗! 이 페이지에는 아무것도 존재하지 않는 것 같아요.
            </h1>
            <p className="mt-2 mb-6 text-p3 text-gray-500">
                때때로 탐험가들도 길을 잃을 때가 있죠.
            </p>
            <button
                className="flex px-[22px] py-2 text-p2 bg-primary-100 border border-primary-500 text-primary-500 rounded-[10px] gap-1 items-center"
                onClick={() => router.push("/")}
            >
                홈으로 돌아가기
                <RightArrow color="#1ADFB4" size="22" />
            </button>
        </div>
    );
};

export default Custom404;
