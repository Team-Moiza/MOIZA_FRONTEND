import React from "react";
import { BottomArrow } from "@moija/ui";
import { FilterState } from "../../../types/ProfileFilter";

interface SortDropdownProps {
    filterState: FilterState;
    setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
    setIsFilterChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortDropdown = ({
    filterState,
    setFilterState,
    setIsFilterChanged,
}: SortDropdownProps) => {
    const options = [
        { label: "최신순", value: null },
        { label: "오래된순", value: "dateSort:ASC" },
        { label: "좋아요순", value: "likeSort:DESC" },
    ];

    const handleSortChange = (
        value: "dateSort:ASC" | "likeSort:DESC" | null
    ) => {
        setFilterState((prev) => ({
            ...prev,
            selectedSort: value,
        }));
        setIsFilterChanged(true);
    };

    return (
        <div>
            <div
                onClick={() =>
                    setFilterState((prev) => ({
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
                        <div key={option.label} className="flex items-center">
                            <div
                                onClick={() => {
                                    if (
                                        option.value === null ||
                                        option.value === "dateSort:ASC" ||
                                        option.value === "likeSort:DESC"
                                    ) {
                                        handleSortChange(option.value);
                                    }
                                }}
                                className={`cursor-pointer text-btn ${
                                    filterState.selectedSort === option.value
                                        ? "text-primary-500"
                                        : "text-black"
                                }`}
                            >
                                {option.label}
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
