"use client"
import { Assets } from '@repo/ui/src'
import { useState } from 'react';

type User = {
  profile?: string;
};

const Header = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <header className="w-[100vw] fixed justify-center bg-white h-[80px] border-b-[1p] border-gray-100">
    <div className="mx-[200px] h-full flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Assets.Logo />
      </div>
      <div className="flex items-center gap-5">
        {user ? (
          <img
            src={user?.profile}
            className="rounded-full w-[42px] h-[42px] flex-shrink-0"
          />
        ) : (
          <div className="gap-[50px] flex">
          <div className="text-p3 text-black">로그인</div>
          <div className="text-p3  text-black">회원가입</div>
          </div>
        )}
      </div>
    </div>
  </header>
  );
};

export default Header;