import React from "react";
import { BottomArrow } from "@moija/ui";
import { FilterState } from "../../../types/ProfileFilter";

interface SortDropdownProps {
    filterState: any;
    setFilterState: React.Dispatch<React.SetStateAction<any>>;
    setIsFilterChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortDropdown = ({
    filterState,
    setFilterState,
    setIsFilterChanged,
}: SortDropdownProps) => {
    const options = ["인기순", "최신순", "오래된순"];

    const handleSortChange = (status: string) => {
        setFilterState((prev: FilterState) => ({
            ...prev,
            selectedSort: status,
        }));
        setIsFilterChanged(true);
    };

    return (
        <div>
            <div
                onClick={() =>
                    setFilterState((prev: FilterState) => ({
                        ...prev,
                        isOpen: { ...prev.isOpen, sort: !prev.isOpen.sort },
                    }))
                }
                className="text-p4 text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
            >
                정렬
                <BottomArrow isOpen={filterState.isOpen.sort} />
            </div>
            {filterState.isOpen.sort && (
                <div className="flex items-center justify-center mb-2.5">
                    {options.map((option, index) => (
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
                            {index < options.length - 1 && (
                                <div className="h-4 w-[1px] mx-3 bg-gray-100" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SortDropdown;
