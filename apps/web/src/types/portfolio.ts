import { Job, School } from "../enum/enums";

export interface Profile {
    id: string;
    name: string;
    school: School;
    job: Job;
    introduce: string;
    profileImg: string;
    likeCnt: number;
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
