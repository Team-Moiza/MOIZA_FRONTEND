"use client";
import { useState } from "react";
import { BottomArrow, Search, Replay } from "@moija/ui";
import Button from "../common/Button";

type Option = string;

const Filter = () => {
    const [filterState, setFilterState] = useState({
        isOpen: {
            sort: false,
            stack: false,
            school: false,
            company: false,
        },
        selectedSort: "인기순" as Option,
        searchInput: "",
        selectedStacks: [] as string[],
        filteredStacks: [] as string[],
        selectedSchool: [] as string[],
        selectedCompany: "전체" as Option,
    });

    const [isFilterChanged, setIsFilterChanged] = useState(false);

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

    const options = {
        sort: ["인기순", "최신순", "오래된순"] as Option[],
        school: [
            "광주소마고",
            "대구소마고",
            "대덕소마고",
            "부산소마고",
        ] as Option[],
        company: ["전체", "재직중", "미재직"] as Option[],
    };

    const handleSortChange = (status: Option): void => {
        setFilterState((prev) => ({ ...prev, selectedSort: status }));
        setIsFilterChanged(true);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFilterState((prev) => ({
            ...prev,
            searchInput: value,
            filteredStacks:
                value.trim() === ""
                    ? []
                    : stacks.filter((stack) =>
                        stack.toLowerCase().includes(value.toLowerCase())
                    ),
        }));
        setIsFilterChanged(true);
    };

    const handleToggleSelection = (item: string, type: 'stack' | 'school') => {
        setFilterState((prev) => {
            const selectedItems = type === 'stack' 
                ? prev.selectedStacks 
                : prev.selectedSchool;

            const updatedItems = selectedItems.includes(item)
                ? selectedItems.filter((i) => i !== item)
                : [...selectedItems, item];

            return {
                ...prev,
                [type === 'stack' ? 'selectedStacks' : 'selectedSchool']: updatedItems,
            };
        });
        setIsFilterChanged(true);
    };

    const handleToggleStack = (stack: string) => handleToggleSelection(stack, 'stack');
    const handleToggleSchool = (school: string) => handleToggleSelection(school, 'school');

    const handleCompanyChange = (status: Option): void => {
        setFilterState((prev) => ({ ...prev, selectedCompany: status }));
        setIsFilterChanged(true);
    };

    const toggleDropdown = (
        dropdown: keyof typeof filterState.isOpen
    ): void => {
        setFilterState((prev) => ({
            ...prev,
            isOpen: { ...prev.isOpen, [dropdown]: !prev.isOpen[dropdown] },
        }));
    };

    const resetFilters = () => {
        setFilterState({
            isOpen: {
                sort: false,
                stack: false,
                school: false,
                company: false,
            },
            selectedSort: "인기순" as Option,
            searchInput: "",
            selectedStacks: [] as string[],
            filteredStacks: [] as string[],
            selectedSchool: [],
            selectedCompany: "전체" as Option,
        });
        setIsFilterChanged(false);
    };

    return (
        <div className="flex-col">
            <div className="mb-2.5 w-[260px] bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex justify-between">
                    <h4 className="text-black text-h4">필터</h4>
                    {isFilterChanged && <Replay onClick={resetFilters} />}
                </div>
                {/* 정렬 */}
                <div
                    onClick={() => toggleDropdown("sort")}
                    className="text-p4 text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
                >
                    정렬
                    <BottomArrow isOpen={filterState.isOpen.sort} />
                </div>
                {filterState.isOpen.sort && (
                    <div className="flex items-center justify-center mb-2.5">
                        {options.sort.map((option, index) => (
                            <div key={option} className="flex items-center">
                                <div
                                    onClick={() => handleSortChange(option)}
                                    className={`cursor-pointer text-btn ${
                                        filterState.selectedSort === option
                                            ? "text-primary-500"
                                            : "text-black"
                                    }`}
                                >
                                    {option}
                                </div>
                                {index < options.sort.length - 1 && (
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
                    className="text-p4 text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
                >
                    기술 스택
                    <BottomArrow isOpen={filterState.isOpen.stack} />
                </div>
                {filterState.isOpen.stack && (
                    <div className="mb-2.5">
                        {/* 검색 입력 */}
                        <div className="px-4 py-2 border rounded-lg border-gray-200 w-full flex justify-between items-center gap-2">
                            <input
                                className="border-none focus:outline-none w-[90%]"
                                type="text"
                                placeholder="직무 기술 스택 검색"
                                value={filterState.searchInput}
                                onChange={handleSearchChange}
                            />
                            <Search />
                        </div>
                        {/* 선택된 스택 */}
                        {filterState.selectedStacks.length > 0 && (
                            <>
                                <div className="flex flex-wrap gap-1 my-2">
                                    {filterState.selectedStacks.map((stack) => (
                                        <div
                                            key={stack}
                                            onClick={() =>
                                                handleToggleStack(stack)
                                            }
                                            className="bg-primary-500 text-white py-[5px] px-[10px] rounded-[8px] text-caption1 cursor-pointer"
                                        >
                                            {stack}
                                        </div>
                                    ))}
                                </div>
                                {filterState.filteredStacks.length > 0 && (
                                    <div className="border-b border-gray-100 mb-2" />
                                )}
                            </>
                        )}

                        {/* 검색 결과 */}
                        {filterState.filteredStacks.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                                {filterState.filteredStacks.map((stack) => (
                                    <div
                                        key={stack}
                                        onClick={() => handleToggleStack(stack)}
                                        className={`py-[5px] px-[10px] border rounded-[8px] text-caption1 cursor-pointer ${
                                            filterState.selectedStacks.includes(
                                                stack
                                            )
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
                    className="text-p4 text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
                >
                    출신 학교
                    <BottomArrow isOpen={filterState.isOpen.school} />
                </div>
                {filterState.isOpen.school && (
                    <div className="mb-2.5 flex flex-wrap gap-2">
                        {options.school.map((option) => (
                            <div key={option} className="flex items-center">
                                <div
                                    onClick={() => handleToggleSchool(option)}
                                    className={`cursor-pointer py-2 px-4 border rounded-lg ${
                                        filterState.selectedSchool.includes(
                                            option
                                        )
                                            ? "text-primary-500 bg-primary-100 border-primary-500"
                                            : "text-black bg-white border-gray-200"
                                    }`}
                                >
                                    {option}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="border-b border-gray-100" />

                {/* 재직 여부 */}
                <div
                    onClick={() => toggleDropdown("company")}
                    className="text-p4 text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
                >
                    재직 여부
                    <BottomArrow isOpen={filterState.isOpen.company} />
                </div>
                {filterState.isOpen.company && (
                    <div className="flex items-center justify-center">
                        {options.company.map((option, index) => (
                            <div key={option} className="flex items-center">
                                <div
                                    onClick={() => handleCompanyChange(option)}
                                    className={`cursor-pointer text-btn ${
                                        filterState.selectedCompany === option
                                            ? "text-primary-500"
                                            : "text-black"
                                    }`}
                                >
                                    {option}
                                </div>
                                {index < options.sort.length - 1 && (
                                    <div className="h-4 w-[1px] mx-3 bg-gray-100" />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Button text="필터 적용하기" />
        </div>
    );
};

export default Filter;
