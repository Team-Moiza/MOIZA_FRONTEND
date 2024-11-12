"use client";
import { useState } from "react";
import Button from "./common/Button";

import { Arrow } from "@moija/ui";

const Filter = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex-col ">
            <div className="max-w-xs bg-white rounded-[12px] border-[1px] border-gray-200 px-5 py-4">
                <div className="text-black text-h4">필터</div>
                <div className="mb-4">
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black text-btn mt-[5px] py-[10px] cursor-pointer flex items-center justify-between"
                    >
                        정렬 <Arrow />
                    </div>
                </div>
                </div>
            <Button text="필터 적용하기" />
        </div>
    );
};

export default Filter;
