import { School } from "../enum/enums";

export type Option = string;

export type SchoolOption = {
    label: string;
    value: School;
};

export interface FilterState {
    isOpen: {
        sort: boolean;
        stack: boolean;
        school: boolean;
        company: boolean;
    };
    selectedSort: string;
    searchInput: string;
    selectedStacks: { id: number; keyword: string }[];
    filteredStacks: string[];
    selectedSchool: SchoolOption[];
    filteredSchools: SchoolOption[];
    selectedCompany: string;
}