"use client";

import { useRouter } from "next/navigation";

const NoPermission = () => {
  const router = useRouter();

  return (
    <div className="fixed z-10 inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white/0 via-white/90 to-white backdrop-blur-[1px]">
      <p className="mb-1 text-h4 text-black">
        이력서가 궁금하다면?
      </p>
      <p className="text-h2 text-black">
        지금 나의 이력서를 작성하고, 다양한 이력서를 살펴보세요!
      </p>
      <button
        className="mt-10 flex px-[22px] py-2 text-p2 bg-primary-500 text-white rounded-[10px] gap-1 items-center"
        onClick={() => router.push("/")}
      >
        이력서 작성하러 가기
      </button>
    </div>
  );
};

export default NoPermission;