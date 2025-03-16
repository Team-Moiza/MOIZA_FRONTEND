import React, { useState, useEffect } from "react";
import { Button, Replay } from "@moija/ui";
import SortDropdown from "./SortDropdown";
import StackDropdown from "./StackDropdown";
import SchoolDropdown from "./SchoolDropdown";
import CompanyDropdown from "./CompanyDropdown";
import getCodes from "../../../app/api/codes";
import { School } from "../../../enum/enums";
import { SchoolOption, FilterState } from "../../../types/ProfileFilter";

type Option = string;
interface ProfileFilterProps {
    applyFilter: (filters: {
        sort: string;
        stacks: { id: number; keyword: string }[];
        schools: string[];
        company: "전체" | "재직중" | "미재직";
    }) => void;
}

const ProfileFilter = ({ applyFilter }: ProfileFilterProps) => {
    const [filterState, setFilterState] = useState<FilterState>({
        isOpen: {
            sort: false,
            stack: false,
            school: false,
            company: false,
        },
        selectedSort: "인기순",
        searchInput: "",
        selectedStacks: [],
        filteredStacks: [],
        selectedSchool: [],
        filteredSchools: [],
        selectedCompany: "전체",
    });

    const [isFilterChanged, setIsFilterChanged] = useState(false);
    const [stacks, setStacks] = useState<{ id: number; keyword: string }[]>([]);

    useEffect(() => {
        const getStacks = async () => {
            try {
                const data: { id: number; keyword: string }[] =
                    await getCodes();
                setStacks(data || []);
            } catch (error) {
                console.error(error);
            }
        };
        getStacks();
    }, []);

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
            selectedStacks: [] as { id: number; keyword: string }[],
            filteredStacks: [] as string[],
            selectedSchool: [] as SchoolOption[],

            filteredSchools: [] as SchoolOption[],
            selectedCompany: "전체",
        });
        setIsFilterChanged(false);
        window.location.reload();
    };

    const handleSearchChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value;
        setFilterState((prev) => ({
            ...prev,
            searchInput: value,
        }));
        setIsFilterChanged(true);

        if (value.trim() === "") {
            setFilterState((prev) => ({ ...prev, filteredStacks: [] }));
            return;
        }

        try {
            const response: { id: number; keyword: string }[] =
                await getCodes(value);
            setFilterState((prev) => ({
                ...prev,
                filteredStacks: response.map((item) => item.keyword),
            }));
        } catch (error) {
            console.error(error);
        }
    };

    const handleApplyFilter = () => {
        applyFilter({
            sort: filterState.selectedSort,
            stacks: filterState.selectedStacks,
            schools: filterState.selectedSchool.map((school) => school.value),
            company: filterState.selectedCompany,
        });
    };

    return (
        <div className="flex-col">
            <div className="mb-2.5 w-[260px] bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex justify-between">
                    <h4 className="text-black text-h4">필터</h4>
                    {isFilterChanged && <Replay onClick={resetFilters} />}
                </div>
                <SortDropdown
                    filterState={filterState}
                    setFilterState={setFilterState}
                    setIsFilterChanged={setIsFilterChanged}
                />
                <StackDropdown
                    filterState={filterState}
                    setFilterState={setFilterState}
                    setIsFilterChanged={setIsFilterChanged}
                    stacks={stacks}
                    handleSearchChange={handleSearchChange}
                />

                <SchoolDropdown
                    filterState={filterState}
                    setFilterState={setFilterState}
                    setIsFilterChanged={setIsFilterChanged}
                />
                <CompanyDropdown
                    filterState={filterState}
                    setFilterState={setFilterState}
                    setIsFilterChanged={setIsFilterChanged}
                />
            </div>
            <Button type="default" width="100%" onClick={handleApplyFilter}>
                필터 적용하기
            </Button>
        </div>
    );
};

export default ProfileFilter;
