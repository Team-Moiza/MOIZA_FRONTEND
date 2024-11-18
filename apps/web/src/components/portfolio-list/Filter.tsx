"use client";
import { useState } from "react";
import { Arrow, Search } from "@moija/ui";
import Button from "../common/Button";

type SortOption = "인기순" | "최신순" | "오래된순";

const Filter = () => {
    const [isOpen, setIsOpen] = useState({
        sort: false,
        stack: true,
        school: false,
        company: false,
    });
    const [selectedSort, setSelectedSort] = useState<SortOption>("인기순");
    const [searchInput, setSearchInput] = useState("");
    const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
    const [filteredStacks, setFilteredStacks] = useState<string[]>([]);

    const stacks = [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "TailwindCSS",
        "Python",
        "Django",
        "Flask",
        "MySQL",
        "MongoDB",
        "GraphQL",
        "REST API",
    ];

    const handleSortChange = (sortOption: SortOption): void => {
        setSelectedSort(sortOption);
    };

    const sortOptions: SortOption[] = ["인기순", "최신순", "오래된순"];

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchInput(value);

        if (value.trim() === "") {
            setFilteredStacks([]);
        } else {
            const filtered = stacks.filter((stack) =>
                stack.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredStacks(filtered);
        }
    };

    const handleToggleStack = (stack: string) => {
        if (selectedStacks.includes(stack)) {
            setSelectedStacks(selectedStacks.filter((item) => item !== stack));
        } else {
            setSelectedStacks([...selectedStacks, stack]);
        }
    };

    const toggleDropdown = (dropdown: keyof typeof isOpen): void => {
        setIsOpen((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
    };

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
                                    className={`cursor-pointer text-sm font-medium ${
                                        selectedSort === option
                                            ? "text-primary-500"
                                            : "text-black"
                                    }`}
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
                    <div className="mb-2.5">
                        {/* 검색 입력 */}
                        <div className="px-4 py-2 border rounded-lg border-gray-200 w-full flex justify-between items-center gap-2">
                            <input
                                className="border-none focus:outline-none w-[90%]"
                                type="text"
                                placeholder="직무 기술 스택 검색"
                                value={searchInput}
                                onChange={handleSearchChange}
                            />
                            <Search />
                        </div>
                        {/* 선택된 스택 */}
                        {selectedStacks.length > 0 && (
                            <>
                                <div className="flex flex-wrap gap-1 my-2">
                                    {selectedStacks.map((stack) => (
                                        <div
                                            key={stack}
                                            onClick={() => handleToggleStack(stack)}
                                            className="bg-primary-500 text-white py-[5px] px-[10px] rounded-[8px] text-caption1 cursor-pointer"
                                        >
                                            {stack}
                                        </div>
                                    ))}
                                </div>
                                {filteredStacks.length > 0 && (
                                    <div className="border-b border-gray-100 mb-2" />
                                )}
                            </>
                        )}

                        {/* 검색 결과 */}
                        {filteredStacks.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                                {filteredStacks.map((stack) => (
                                    <div
                                        key={stack}
                                        onClick={() => handleToggleStack(stack)}
                                        className={`py-[5px] px-[10px] border rounded-[8px] text-caption1 cursor-pointer ${
                                            selectedStacks.includes(stack)
                                                ? "bg-primary-500 text-white border-primary-500"
                                                : "bg-white text-black border-gray-200"
                                        }`}
                                    >
                                        {stack}
                                    </div>
                                ))}
                            </div>
                        )}
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
