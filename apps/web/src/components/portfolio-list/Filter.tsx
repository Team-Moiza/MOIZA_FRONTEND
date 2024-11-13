"use client";
import { useState } from "react";
import Button from "../common/Button";
import { Arrow } from "@moija/ui";
import { Replay } from "@moija/ui";

type SortOption = "인기순" | "최신순" | "오래된순";

const Filter = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [selectedSort, setSelectedSort] = useState<SortOption>("인기순");

    const toggleDropdown = (): void => setIsOpen(!isOpen);

    const handleSortChange = (sortOption: SortOption): void => {
        setSelectedSort(sortOption);
    };

    const sortOptions: SortOption[] = ["인기순", "최신순", "오래된순"];

    return (
        <div className="flex-col w-[250px]">
            <div className="mb-[10px] bg-white rounded-[12px] border-[1px] border-gray-200 px-5 py-4">
                <div className="text-black text-h4">필터</div>
                <div
                    onClick={toggleDropdown}
                    className="text-black text-content mt-[5px] py-2.5 cursor-pointer flex items-center justify-between"
                >
                    정렬
                    <Arrow isOpen={isOpen} />
                </div>
                {isOpen && (
                    <div className="flex flex-row items-center justify-center mb-[10px]">
                        {sortOptions.map((option, index) => (
                            <div key={option} className="flex items-center">
                                <div
                                    onClick={() => handleSortChange(option)}
                                    className={`cursor-pointer text-btn1 ${selectedSort === option ? "text-primary-500" : "text-black"}`}
                                >
                                    {option}
                                </div>
                                {index < sortOptions.length - 1 && (
                                    <div className="h-4 w-[1px] mx-[12px] bg-gray-100" />
                                )}
                            </div>
                        ))}
                    </div>
                )}
                <div className="border-b border-gray-100" />
                <div
                    onClick={toggleDropdown}
                    className="text-black text-content mt-[5px] py-2.5 cursor-pointer flex items-center justify-between"
                >
                    기술 스택
                    <Arrow isOpen={isOpen} />
                </div>
                <div className=" border-b border-gray-100" />
                <div
                    onClick={toggleDropdown}
                    className="text-black text-content mt-[5px] py-2.5 cursor-pointer flex items-center justify-between"
                >
                    출신 학교
                    <Arrow isOpen={isOpen} />
                </div>
                <div className=" border-b border-gray-100" />
                <div
                    onClick={toggleDropdown}
                    className="text-black text-content mt-[5px] py-2.5 cursor-pointer flex items-center justify-between"
                >
                    재직 여부
                    <Arrow isOpen={isOpen} />
                </div>
            </div>
            <Button text="필터 적용하기" />
        </div>
    );
};

export default Filter;
