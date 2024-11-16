"use client";
import { useState } from "react";
import Button from "../common/Button";
import { Arrow, Search } from "@moija/ui";
import { Replay } from "@moija/ui";

type SortOption = "인기순" | "최신순" | "오래된순";

const Filter = () => {
    const [isOpen, setIsOpen] = useState({
        sort: false,
        stack: true,
        school: false,
        company: false,
    });
    const [selectedSort, setSelectedSort] = useState<SortOption>("인기순");

    const toggleDropdown = (dropdown: keyof typeof isOpen): void => {
        setIsOpen((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
    };

    const handleSortChange = (sortOption: SortOption): void => {
        setSelectedSort(sortOption);
    };

    const sortOptions: SortOption[] = ["인기순", "최신순", "오래된순"];

    return (
        <div className="flex-col">
            <div className="mb-2.5 w-[260px] bg-white rounded-lg border border-gray-200 p-5">
                <h4 className="text-black font-bold">필터</h4>

                {/* 정렬 */}
                <div
                    onClick={() => toggleDropdown("sort")}
                    className="text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
                >
                    정렬
                    <Arrow isOpen={isOpen.sort} />
                </div>
                {isOpen.sort && (
                    <div className="flex items-center justify-center mb-2.5">
                        {sortOptions.map((option, index) => (
                            <div key={option} className="flex items-center">
                                <div
                                    onClick={() => handleSortChange(option)}
                                    className={`cursor-pointer text-sm font-medium ${selectedSort === option ? "text-primary-500" : "text-black"}`}
                                >
                                    {option}
                                </div>
                                {index < sortOptions.length - 1 && (
                                    <div className="h-4 w-[1px] mx-3 bg-gray-100" />
                                )}
                            </div>
                        ))}
                    </div>
                )}
                <div className="border-b border-gray-100" />

                {/* 기술 스택 */}
                <div
                    onClick={() => toggleDropdown("stack")}
                    className="text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
                >
                    기술 스택
                    <Arrow isOpen={isOpen.stack} />
                </div>
                {isOpen.stack && (
                    <div className="flex items-center mb-2.5">
                        <div className="px-4 py-2 border rounded-lg border-gray-200 w-full flex justify-between items-center gap-1">
                            <input
                                className="border-none focus:outline-none focus:border-none w-[90%]"
                                type="text"
                                placeholder="직무 기술 스택 검색"
                            />
                            <Search />
                        </div>
                    </div>
                )}
                <div className="border-b border-gray-100" />

                {/* 출신 학교 */}
                <div
                    onClick={() => toggleDropdown("school")}
                    className="text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
                >
                    출신 학교
                    <Arrow isOpen={isOpen.school} />
                </div>
                <div className="border-b border-gray-100" />
                {/* 재직 여부 */}
                <div
                    onClick={() => toggleDropdown("company")}
                    className="text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
                >
                    재직 여부
                    <Arrow isOpen={isOpen.company} />
                </div>
            </div>

            <Button text="필터 적용하기" />
        </div>
    );
};

export default Filter;
