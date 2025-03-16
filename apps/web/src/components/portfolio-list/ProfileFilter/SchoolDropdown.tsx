import React from "react";
import { School } from "../../../enum/enums";
import { BottomArrow } from "@moija/ui";
import { FilterState, SchoolOption } from "../../../types/ProfileFilter";

interface SchoolDropdownProps {
    filterState: any;
    setFilterState: React.Dispatch<React.SetStateAction<any>>;
    setIsFilterChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const SchoolDropdown = ({
    filterState,
    setFilterState,
    setIsFilterChanged,
}: SchoolDropdownProps) => {
    const options = [
        { label: "부산소마고", value: School.BSSM },
        { label: "대구소마고", value: School.DGSM },
        { label: "대덕소마고", value: School.DSM },
        { label: "광주소마고", value: School.GSM },
    ];

    const handleToggleSelection = (item: { label: string; value: School }) => {
        setFilterState((prev: FilterState) => {
            const selectedItems = prev.selectedSchool;
            const isSelected = selectedItems.some(
                (i: SchoolOption) => i.value === item.value
            );

            const updatedItems = isSelected
                ? selectedItems.filter(
                      (i: SchoolOption) => i.value !== item.value
                  )
                : [...selectedItems, item];

            return {
                ...prev,
                selectedSchool: updatedItems,
            };
        });
        setIsFilterChanged(true);
    };

    return (
        <div>
            <div
                onClick={() =>
                    setFilterState((prev: FilterState) => ({
                        ...prev,
                        isOpen: { ...prev.isOpen, school: !prev.isOpen.school },
                    }))
                }
                className="text-p4 text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
            >
                출신 학교
                <BottomArrow isOpen={filterState.isOpen.school} />
            </div>
            {filterState.isOpen.school && (
                <div className="mb-2.5 flex flex-wrap gap-2">
                    {options.map((option) => (
                        <div key={option.label} className="flex items-center">
                            <div
                                onClick={() => handleToggleSelection(option)}
                                className={`cursor-pointer py-2 px-4 border rounded-lg ${
                                    filterState.selectedSchool.some(
                                        (s: SchoolOption) =>
                                            s.value === option.value
                                    )
                                        ? "text-primary-500 bg-primary-100 border-primary-500"
                                        : "text-black bg-white border-gray-200"
                                }`}
                            >
                                {option.label}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SchoolDropdown;
