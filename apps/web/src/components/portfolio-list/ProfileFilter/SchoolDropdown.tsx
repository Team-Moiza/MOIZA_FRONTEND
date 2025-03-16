import React from "react";
import { School } from "../../../enum/enums";
import { BottomArrow } from "@moija/ui";
import { FilterState, SchoolOption } from "../../../types/ProfileFilter";

interface SchoolDropdownProps {
    filterState: FilterState;
    setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
    setIsFilterChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const SchoolDropdown = ({
    filterState,
    setFilterState,
    setIsFilterChanged,
}: SchoolDropdownProps) => {
    // 학교 옵션 정의 (한국어 이름 + 코드)
    const options = [
        { label: "부산소마고", value: School.BSSM },
        { label: "대구소마고", value: School.DGSM },
        { label: "대덕소마고", value: School.DSM },
        { label: "광주소마고", value: School.GSM },
    ];

    // 학교 선택 핸들러
    const handleToggleSelection = (item: SchoolOption) => {
        setFilterState((prev) => ({
            ...prev,
            selectedSchool: prev.selectedSchool.some(
                (s) => s.value === item.value
            )
                ? prev.selectedSchool.filter((s) => s.value !== item.value)
                : [...prev.selectedSchool, item],
        }));
        setIsFilterChanged(true);
    };

    return (
        <div>
            <div
                onClick={() =>
                    setFilterState((prev) => ({
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
                <div className="mb-2.5">
                    <div className="flex flex-wrap gap-2 mt-2">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => handleToggleSelection(option)}
                                className={`cursor-pointer py-2 px-4 border rounded-lg ${
                                    filterState.selectedSchool.some(
                                        (s) => s.value === option.value
                                    )
                                        ? "text-primary-500 bg-primary-100 border-primary-500"
                                        : "text-black bg-white border-gray-200"
                                }`}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SchoolDropdown;
