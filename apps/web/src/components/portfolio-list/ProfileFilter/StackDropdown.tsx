import React from "react";
import { BottomArrow, Search } from "@moija/ui";
import { FilterState } from "../../../types/ProfileFilter";

interface StackDropdownProps {
    filterState: FilterState;
    setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
    setIsFilterChanged: React.Dispatch<React.SetStateAction<boolean>>;
    stacks: { id: number; keyword: string }[];
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StackDropdown = ({
    filterState,
    setFilterState,
    stacks,
    setIsFilterChanged,
    handleSearchChange,
}: StackDropdownProps) => {
    const handleToggleStack = (keyword: string) => {
        const stack = stacks.find((s) => s.keyword === keyword);
        if (!stack) return;

        setFilterState((prev) => ({
            ...prev,
            selectedStacks: prev.selectedStacks.some((s) => s.id === stack.id)
                ? prev.selectedStacks.filter((s) => s.id !== stack.id)
                : [...prev.selectedStacks, stack],
        }));
    };

    return (
        <div>
            <div
                onClick={() =>
                    setFilterState((prev) => ({
                        ...prev,
                        isOpen: { ...prev.isOpen, stack: !prev.isOpen.stack },
                    }))
                }
                className="text-p4 text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
            >
                기술 스택
                <BottomArrow isOpen={filterState.isOpen.stack} />
            </div>

            {filterState.isOpen.stack && (
                <div className="mb-2.5">
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

                    {filterState.selectedStacks.length > 0 && (
                        <>
                        <div className="flex flex-wrap gap-1 my-2">
                            {filterState.selectedStacks.map((stack) => (
                                <div
                                    key={stack.id}
                                    onClick={() =>
                                        handleToggleStack(stack.keyword)
                                    }
                                    className="bg-primary-500 text-white py-[5px] px-[10px] rounded-[8px] text-caption1 cursor-pointer"
                                >
                                    {stack.keyword}
                                </div>
                                
                            ))}
                        </div>
                        {filterState.filteredStacks.length > 0 && (
                            <div className="border-b border-gray-100 mb-2" />
                        )}
                        </>
                    )}

                    {filterState.filteredStacks.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                            {filterState.filteredStacks.map((keyword) => {
                                const stack = stacks.find(
                                    (s) => s.keyword === keyword
                                )!;
                                return (
                                    <div
                                        key={stack.id}
                                        onClick={() =>
                                            handleToggleStack(keyword)
                                        }
                                        className={`py-[5px] px-[10px] border rounded-[8px] text-caption1 cursor-pointer ${
                                            filterState.selectedStacks.some(
                                                (s) => s.id === stack.id
                                            )
                                                ? "bg-primary-500 text-white border-primary-500"
                                                : "bg-white text-black border-gray-200"
                                        }`}
                                    >
                                        {keyword}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default StackDropdown;
