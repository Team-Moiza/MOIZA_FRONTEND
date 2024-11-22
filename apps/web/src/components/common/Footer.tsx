import { Github } from "@moija/ui";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[200px] h-[380px] w-full bg-gray-600 flex flex-col items-center justify-center text-white">
      <div className="font-black text-xl mb-6">MOIZA</div>

      <div className="flex gap-4 mb-6 text-sm">
        <span>강민지</span>
        <span>김명진</span>
        <span>김수아</span>
        <span>안혜성</span>
        <span>이지후</span>
      </div>

      <div className="w-[80%] border-t border-white mb-6"></div>
      <div className="text-xs text-gray-200 flex items-center gap-2">
      이용약관 | 개인정보처리방침
      </div>
      <div className="text-[13px] text-gray-300 flex items-center">
      ©2024. team MOIZA. All rights reserved.
      </div>
      <div className="absolute">
        <Link
          href="https://github.com/Team-Moiza"
        >
          <Github/>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;