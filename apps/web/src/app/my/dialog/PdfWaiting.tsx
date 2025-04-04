"use client";

import { Dialog } from "./index";

export const PdfWaiting = () => {
    return (
        <>
            <style jsx>{`
                @keyframes slide {
                    0% {
                        left: 0%;
                        width: 0%;
                    }
                    50% {
                        left: 0%;
                        width: 100%;
                    }
                    100% {
                        left: 100%;
                        width: 0%;
                    }
                }
            `}</style>

            <Dialog>
                <div className="flex flex-col items-center gap-4">
                    <>
                        <span className="text-h4">
                            이력서를 PDF로 생성 중입니다.
                        </span>
                        <span className="text-p3 text-gray-500">
                            잠시만 기다려 주세요.
                        </span>
                    </>
                    <div className="w-[75%] bg-gray-100 rounded-full p-[6px] mt-4">
                        <div className="relative h-[14px] bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full rounded-full bg-primary-500"
                                style={{ animation: "slide 1.7s infinite" }}
                            />
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};