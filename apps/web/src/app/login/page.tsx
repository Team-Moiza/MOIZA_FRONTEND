'use client';
import React from "react";
import { Assets } from "@repo/ui/src"

const Login = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full max-h-full"> {/* 바닥에 고정 */}
        <Assets.Bubble />
      </div>
    </div>
  );
};

export default Login;