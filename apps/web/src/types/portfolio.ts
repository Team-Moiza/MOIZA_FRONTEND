import { Job, School } from "../enum/enums";

export interface Profile {
    id: number;
    name: string;
    school: keyof typeof School;
    job: keyof typeof Job;
    introduce: string;
    profile: string;
    likeCnt: string;
    codes?: { keyword: string }[];
    company: string | null;
}

export interface ProfileListProps {
    paginatedProfiles: Profile[];
    isLoggedOut?: boolean;
}

export interface FilterApply {
    sort: string;
    stacks: string[];
    schools: string[];
    company: string;
}
