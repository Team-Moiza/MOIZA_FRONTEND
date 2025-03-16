import React from "react";
import { BottomArrow } from "@moija/ui";
import { FilterState } from "../../../types/ProfileFilter";

interface CompanyDropdownProps {
    filterState: any;
    setFilterState: React.Dispatch<React.SetStateAction<any>>;
    setIsFilterChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompanyDropdown = ({
    filterState,
    setFilterState,
    setIsFilterChanged,
}: CompanyDropdownProps) => {
    const options = ["전체", "재직중", "미재직"];

    const handleCompanyChange = (status: string) => {
        setFilterState((prev: FilterState) => ({
            ...prev,
            selectedCompany: status,
        }));
        setIsFilterChanged(true);
    };

    return (
        <div>
            <div
                onClick={() =>
                    setFilterState((prev: FilterState) => ({
                        ...prev,
                        isOpen: {
                            ...prev.isOpen,
                            company: !prev.isOpen.company,
                        },
                    }))
                }
                className="text-p4 text-black mt-1.5 py-2.5 cursor-pointer flex items-center justify-between"
            >
                재직 여부
                <BottomArrow isOpen={filterState.isOpen.company} />
            </div>
            {filterState.isOpen.company && (
                <div className="flex items-center justify-center">
                    {options.map((option, index) => (
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

export default CompanyDropdown;
