import { Github } from "@moija/ui";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bottom-0 mt-[120px] w-full h-[380px] px-[200px] bg-gray-600 flex flex-col items-center justify-center text-white">
            <div className="font-black text-[22px] mb-6">MOIZA</div>
            <div className="flex gap-4 mb-6 text-caption1 text-white">
                {["강민지", "김명진", "김수아", "안혜성", "이지후"].map(
                    (name) => (
                        <span key={name}>{name}</span>
                    )
                )}
            </div>
            <div className="w-full h-[0.5px] bg-white mb-6"></div>
            <div className="text-[12px] font-light text-gray-200 flex items-center gap-2">
                이용약관 | 개인정보처리방침
            </div>
            <div className="text-[13px] text-gray-300 flex items-center mt-[30px]">
                ©2024. team MOIZA. All rights reserved.
            </div>
            <div className="absolute bottom-0 right-0">
                <Link href="https://github.com/Team-Moiza">
                    <Github />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
